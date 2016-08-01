// initial state
const state = {
  port: '',
  params: {
    page: 1,
    type: '',
    category: '',
    tagid: '',
    userPageId: '',
    userPageType: ''
  }
}

// mutations
const mutations = {
  SET_USER_LIST_CONFIG (state, port, params) {
    state.port = port
    if (params) {
      for (let key in params) {
        state.params[key] = params[key]
      }
    }
  }
}

export default {
  state,
  mutations
}
