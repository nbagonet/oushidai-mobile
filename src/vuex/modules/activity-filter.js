// initial state
const state = {
  topheaderConfig: {
    show: true,
    backLink: 'activity',
    title: '筛选活动'
  },
  filterConfig: {
    // categories: [{
    //   title: '新鲜事',
    //   name: 'activity-home',
    //   category: '1'
    // }]
    port: ''
  }
}

const mutations = {
  SET_ACTIVITY_FILTER_TOP_HEADER_CONFIG (state, data) {
    state.topheaderConfig = data
  },
  SET_ACTIVITY_FILTER_CONFIG (state, data) {
    state.filterConfig = data
  }
}

export default {
  state,
  mutations
}

