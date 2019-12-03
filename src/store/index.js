import ssbClient from 'ssb-client'
import indexing from './modules/indexing'

export default {
  state: {
    sbot: null,
    ebt: null,
  },
  getters: {
    connected (state) {
      return state.sbot !== null
    },
    ebt (state) {
      return state.ebt
    },
  },
  mutations: {
    setSbot (state, val) {
      state.sbot = val
    },
    setEbt (state, val) {
      state.ebt = val
    },
  },
  actions: {
    poll ({ getters, commit, dispatch }) {
      // this function runs at an interval
      // for stuff that isn't reactive/observable

      dispatch('connectSbot')
      try {
        if (getters.connected) {
          dispatch('indexing/update')
          dispatch('updateEbt')
        }
      } catch (err) {
        // sometimes (not sure when, happened once with patchwork) the
        // connection drops but `closed` is still false. simplest way to detect
        // it is probably to catch the eventual errors from the calls to sbot
        console.error('Connection dropped for unknown reason')
        commit('setSbot', null)

        throw err
      }
    },
    connectSbot ({ state, commit, getters }) {
      if (state.sbot && state.sbot.closed === true) {
        // when we've been connected to the server before but the connection
        // dropped for some reason (probably that the client was closed)
        commit('setSbot', null)
      }

      if (!getters.connected) {
        ssbClient((err, sbot) => {
          if (err) {
            // Maybe make a status screen to display the `err`? Hasn't been
            // super useful so far when I've tried uncommenting it.
            //console.error('Could not connect to ssb-server', err)
            return
          }

          commit('setSbot', sbot)
        })
      }
    },
    updateEbt ({ state, commit}) {
      if (state.sbot.ebt) {
        state.sbot.ebt.peerStatus(state.sbot.id, (err, data) => {
          if (err) return console.error('ebt update failed', err)

          commit('setEbt', data)
        })
      } else {
        // the client doesn't have ebt installed
        commit('setEbt', null)
      }
    },
  },
  modules: {
    indexing,
  },
}
