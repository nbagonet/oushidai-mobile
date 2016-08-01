// initial state
const state = {
  // 活动列表组件配置
  activityList: {
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
  SET_ORG_CENTER_EVENT_LIST_CONFIG (state, port, params) {
    state.activityList.port = port
    if (params) {
      for (let key in params) {
        state.activityList.params[key] = params[key]
      }
    }
  }
}

export default {
  state,
  mutations
}
