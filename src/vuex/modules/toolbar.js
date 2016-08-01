const state = {
  // 是否显示
  show: false,
  // 更多操作按钮
  more: {
    // 是否显示
    show: true
  },
  // 分享按钮
  share: {
    // 是否显示
    show: true
  },
  // 弹出的选项浮层
  // 'more', share', 'copy'
  pop: '',
  // 微信分享提示
  WeiXinTips: false,
  // 复制提示
  CopyTips: true,
  CopyInfo: ''
}

const mutations = {
  // 显示/隐藏toolbar
  TOGGLE_TOOLBAR (state, status) {
    state.show = status
  },
  // 弹出选项浮层
  POPUP (state, name) {
    state.pop = name
  },
  // 显示/隐藏 微信分享提示
  TOGGLE_WEIXIN_TIPS (state, status) {
    state.WeiXinTips = status
  },
  TOGGLE_COPY_TIPS (state, status) {
    state.CopyTips = status
  },
  SET_COPY_INFO (state, info) {
    state.CopyInfo = info
  }
}

export default {
  state,
  mutations
}
