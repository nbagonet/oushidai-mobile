// initial state
const state = {
  // 焦点图组件配置
  focus: {
    port: ''
    // type: 'mixed'
  },
  // 资讯列表配置
  news: {
    port: '',
    params: {
      uid: '',
      page: 1,
      type: '',
      category: '',
      tagid: '',
      userPageId: '',
      userPageType: ''
    }
  },
  // 活动列表组件配置
  activity: {
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
}

// mutations
const mutations = {
  SET_HOME_FOCUS_CONFIG (state, data) {
    state.focus = data
  },
  SET_HOME_NEWS_CONFIG (state, port, params) {
    state.news.port = port
    if (params) {
      for (let key in params) {
        state.news.params[key] = params[key]
      }
    }
  },
  SET_HOME_ACTIVITY_CONFIG (state, port, params) {
    state.activity.port = port
    if (params) {
      for (let key in params) {
        state.activity.params[key] = params[key]
      }
    }
  }
}

export default {
  state,
  mutations
}
