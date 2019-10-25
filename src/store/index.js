import ssbClient from 'ssb-client'

export default {
  state: {
    sbot: null,
    status: null,
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
    poll ({ dispatch }) {
      // this function runs at an interval
      // for stuff that isn't reactive/observable

      dispatch('connectSbot')
      dispatch('updateStatus')
    },
    connectSbot ({ state, commit }) {
      if (state.sbot === null) {
        ssbClient((err, sbot) => {
          if (err) {
            console.error('Could not connect to ssb-server')
            return
          }

          commit('setSbot', sbot)
        })
      }
    },
    updateStatus ({ state, commit }) {
      if (state.sbot !== null) {
        state.sbot.status((err, res) => {
          if (err) throw err

          console.log('status', res)
          commit('setStatus', res.progress.indexes.current)
        })
      }
    },
  },
}
