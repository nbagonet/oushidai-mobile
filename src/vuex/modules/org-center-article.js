// initial state
const state = {
  // 资讯列表组件配置
  newsList: {
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
}

// mutations
const mutations = {
  SET_ORG_CENTER_ARTICLE_NEWS_LIST_CONFIG (state, port, params) {
    state.newsList.port = port
    if (params) {
      for (let key in params) {
        state.newsList.params[key] = params[key]
      }
    }
  }
}

export default {
  state,
  mutations
}
