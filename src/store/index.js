import ssbClient from 'ssb-client'

export default {
  state: {
    sbot: null,
    status: null,
  },
  getters: {
    connected (state) {
      return state.sbot !== null
    },
  },
  mutations: {
    setSbot (state, val) {
      state.sbot = val
    },
    setStatus (state, val) {
      state.status = val
    },
  },
  actions: {
    poll ({ commit, dispatch }) {
      // this function runs at an interval
      // for stuff that isn't reactive/observable

      dispatch('connectSbot')
      try {
        dispatch('updateStatus')
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
            // TODO: make a status screen to display the `err`
            //console.error('Could not connect to ssb-server', err)
            return
          }

          commit('setSbot', sbot)
        })
      }
    },
    updateStatus ({ state, commit, getters }) {
      if (getters.connected) {
        state.sbot.status((err, res) => {
          if (err) throw err

          commit('setStatus', res)
        })
      }
    },
  },
}
