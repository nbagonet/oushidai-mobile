// initial state
const state = {
  topheader: {
    show: false,
    filterLink: 'news-filter',
    title: '筛选结果'
  },
  // 焦点图组件配置
  focus: {
    show: true,
    port: '',
    showFilter: false,
    filterLink: 'news-filter'
  },
  // 资讯列表组件配置
  newsList: {
    port: '',
    params: {
      uid: '',
      page: 1,
      type: '',
      category: '',
      tagid: '',
      loc: '',
      act: '',
      userPageId: '',
      userPageType: ''
    },
    showCommentsNum: false,
    showLikedNum: false,
    showViewNum: true
  }
}

// mutations
const mutations = {
  SET_NEWS_HOME_TOP_HEADER_CONFIG (state, data) {
    state.topheader = data
  },
  SET_NEWS_HOME_FOCUS_CONFIG (state, data) {
    state.focus = data
  },
  SET_NEWS_HOME_NEWS_LIST_CONFIG (state, port, params) {
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
