// initial state
const state = {
  scroll: 0,
  topheader: {
    show: false,
    filterLink: 'news-filter',
    title: '筛选结果'
  },
  focusThumb: {
    show: true,
    port: '',
    showFilter: true,
    filterLink: 'activity-filter'
  },
  // 活动列表组件配置
  activityList: {
    port: '',
    params: {
      page: 1,
      type: '',
      category: '',
      tagid: '',
      loc: '',
      act: '',
      userPageId: '',
      userPageType: ''
    }
  }
}

// mutations
const mutations = {
  SET_EVENT_HOME_TOP_HEADER_CONFIG (state, data) {
    state.topheader = data
  },
  SET_EVENT_HOME_EVENT_FOCUS_CONFIG (state, data) {
    state.focusThumb = data
  },
  SET_EVENT_HOME_EVENT_LIST_CONFIG (state, port, params) {
    state.activityList.port = port
    if (params) {
      for (let key in params) {
        state.activityList.params[key] = params[key]
      }
    }
  },
  SET_EVENT_HOME_SCROLL (state, val) {
    state.scroll = val
  }
}

export default {
  state,
  mutations
}
