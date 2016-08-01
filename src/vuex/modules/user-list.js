// initial state
const state = {
  // 组件loading状态标识
  isLoading: false,
  // 无数据标识
  isNoData: false,
  // 锁定标识，true时，将不再请求下一页的数据
  isLocked: false,
  // 展开的列表单元索引值
  activeIndex: -1,
  // 资讯列表数据
  list: [],
  // 接口
  port: '',
  // 接口参数
  params: {
    page: 1,
    type: '',
    category: '',
    tagid: '',
    userPageId: '',
    userPageType: ''
  }
}

// mutations
const mutations = {
  SET_USER_LIST_LOCKED (state, status) {
    state.isLocked = status
  },
  SET_USER_LIST_NODATA (state, status) {
    state.isNoData = status
  },
  IS_USER_LIST_LOADING (state, status) {
    state.isLoading = status
  },
  SET_USER_LIST_ACTIVED (state, index) {
    state.activeIndex = index
  },
  SET_USER_LIST_PAGE_NUMBER_PLUS (state) {
    console.log('当前页码：', state.params.page)
    state.params.page = state.params.page + 1
    console.log('下次请求的页码：', state.params.page)
  },
  /**
   * 设置列表数据
   * @param {[type]} state [description]
   * @param {[type]} data  [description]
   */
  SET_USER_LIST (state, data) {
    if (state.list.length > 0) {
      for (let i = 0; i < data.length; i++) {
        state.list.push(data[i])
      }
    } else {
      state.list = data
    }
  },
  RESET_USER_LIST (state) {
    state.isLoading = false
    state.isNoData = false
    state.isLocked = false
    state.activeIndex = -1
    state.list = []
    state.port = ''
    state.params = {
      page: 1,
      type: '',
      category: '',
      tagid: '',
      userPageId: '',
      userPageType: ''
    }
  }
}

export default {
  state,
  mutations
}
