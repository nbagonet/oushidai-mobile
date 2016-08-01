// initial state
const state = {
  port: '',
  params: {
    uid: '',
    page: 1,
    type: 'news',
    category: '',
    tagid: '',
    userPageId: '',
    userPageType: ''
  },
  showCommentsNum: true,
  showLikedNum: false
}

// mutations
const mutations = {
  SET_NEWS_LIST_CONFIG (state, port, params) {
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
