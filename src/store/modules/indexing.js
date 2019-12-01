export default {
  namespaced: true,
  state: {
    average: null, // Number status.progress.indexes.current
    target: null, // Number status.progress.indexes.target
    indexes: null, // { String: Number } status.sync.plugins
  },
  getters: {
    hasData (state) {
      return state.average !== null
    },
  },
  mutations: {
    setAverage (state, average) {
      state.average = average
    },
    setTarget (state, target) {
      state.target = target
    },
    setIndexes (state, indexes) {
      state.indexes = indexes
    },
  },
  actions: {
    update ({ rootState, commit }) {
      rootState.sbot.status((err, res) => {
        if (err) throw err

        // discussion on .current being the average
        // https://github.com/ssbc/ssb-first-aid-kit/issues/4
        commit('setAverage', res.progress.indexes.current)
        commit('setTarget', res.progress.indexes.target)
        commit('setIndexes', res.sync.plugins)
      })
    },
  },
}