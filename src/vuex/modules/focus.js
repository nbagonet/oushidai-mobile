// initial state
const state = {
  // 焦点图数据
  list: []
  // 焦点图类型 'mixed' 'thumb' 'activity'
  // type: 'mixed'
}

// mutations
const mutations = {
  /**
   * 设置焦点图列表数据
   * @param {[type]} state [description]
   * @param {[type]} data  [description]
   */
  SET_FOCUS_LIST (state, data) {
    state.list = data
  },
  SET_FOCUS_TYPE (state, data) {
    state.type = data
  }
}

export default {
  state,
  mutations
}
