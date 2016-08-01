// initial state
const state = {
  // 是否渲染
  show: true,
  // 显示筛选
  showFilter: false,
  // 过滤页链接
  filterLink: 'news-filter',
  // 焦点图数据
  list: []
  // 焦点图类型 'mixed' 'news' 'activity'
  // type: 'mixed'
}

// mutations
const mutations = {
  /**
   * 设置焦点图列表数据
   * @param {[type]} state [description]
   * @param {[type]} data  [description]
   */
  SET_FOCUS_THUMB_LIST (state, data) {
    state.list = data
  },
  SET_FOCUS_THUMB_FILTER (state, status) {
    console.log('设置筛选按钮', status)
    state.showFilter = status
  },
  SET_FOCUS_THUMB_FILTER_LINK (state, data) {
    state.filterLink = data
  },
  SET_FOCUS_THUMB_SHOW (state, status) {
    console.log('是否显示焦点图', status)
    state.show = status
  }
  // SET_FOCUS_TYPE (state, data) {
  //   state.type = data
  // }
}

export default {
  state,
  mutations
}
