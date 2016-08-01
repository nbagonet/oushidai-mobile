// initial state
const state = {
  // 组件loading状态标识
  isLoading: false,
  // 出错状态
  isError: false,
  // 作者信息
  authorInfo: '',
  // 正文相关数据
  activityData: {},
  // 活动描述标签
  activeInfoContent: 0,
  // 主内容展开的标识
  expandItem: 0,
  // 地图
  map: 'about:blank',
  // 顶部工具栏配置
  topheaderConfig: {
    // 返回链接
    backLink: 'activity',
    // 上一篇
    prev: {
      link: 'activity-view',
      id: ''
    },
    // 下一篇
    next: {
      link: 'activity-view',
      id: ''
    }
  },
  // 相关资讯列表配置
  releatedListConfig: {
    type: 'event',
    number: 4,
    list: []
  },
  // 底部工具栏配置
  bottomToolbarConfig: {}
}

// mutations
const mutations = {
  SET_ACTIVITY_MAP (state, src) {
    state.map = src
  },
  SET_EXPAND_ITEM (state, index) {
    state.expandItem = index
  },
  SET_ACTIVITY_INFO_CONTENT (state, index) {
    state.activeInfoContent = index
  },
  SET_EVENT_VIEW_BOTTOM_TOOLBAR_CONFIG (state, config) {
    // console.log(config)
    state.bottomToolbarConfig = config
  },
  // 设置组件loading状态
  EVENT_VIEW_LOADING (state, status) {
    state.isLoading = status
  },
  // 设置出错状态
  IS_EVENT_VIEW_ERROR (state, status) {
    state.isError = status
  },
  // 设置topheader配置信息
  SET_TOPHEADER_CONFIG (state, data) {
    state.topheaderConfig = data
  },
  // 设置相关列表配置信息
  SET_EVENT_VIEW_RELEATED_LIST_CONFIG (state, config) {
    state.releatedListConfig = config
  },
  // 设置正文数据
  SET_EVENT_CONTENT (state, data) {
    state.activityData = { ...state.activityData, data }
  },
  // 更新作者信息数据
  SET_EVENT_AUTHOR_INFO (state, data) {
    state.authorInfo = data
  },
  // 重置数据
  RESET_EVENT_VIEW_STATE (state) {
    state.isLoading = false
    state.isError = false
  }
}

export default {
  state,
  mutations
}
