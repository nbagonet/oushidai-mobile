// initial state
const state = {
  // 是否显示侧边栏切换按钮
  showSideMenuBtn: true,
  // 是否吸顶
  fixed: false,
  // 面包屑信息
  breadcrumbs: []
}

// mutations
const mutations = {
  /**
   * 配置面包屑信息
   * @param {[type]} state [description]
   * @param {[type]} info  [description]
   */
  SET_BREADCRUMBS_INFO (state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs
  },
  /**
   * 显示/隐藏侧边栏切换按钮
   * @param {object} state
   * @param {boolean} status
   */
  TOGGLE_SIDEBAR_MENU_BTN (state, status) {
    state.showSideMenuBtn = status
  },
  /**
   * 切换吸顶状态
   * @param {object} state  [description]
   * @param {boolean} status [description]
   */
  TOGGLE_TOPBAR_FIXED (state, status) {
    state.fixed = status
  }
}

export default {
  state,
  mutations
}
