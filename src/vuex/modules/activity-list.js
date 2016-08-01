// initial state
const state = {
  // 组件loading状态标识
  isLoading: false,
  // 无数据标识
  isNoData: false,
  // 锁定标识，true时，将不再请求下一页的数据
  isLocked: false,
  // 列表数据
  list: [],
  // 接口地址
  port: '',
  // 接口参数
  params: {
    page: 1,
    type: 'event',
    category: '',
    tagid: '',
    loc: '',
    act: '',
    userPageId: '',
    userPageType: ''
  }
}

// mutations
const mutations = {
  SET_EVENT_LIST_LOCKED (state, status) {
    state.isLocked = status
  },
  SET_EVENT_LIST_NODATA (state, status) {
    state.isNoData = status
  },
  IS_EVENT_LIST_LOADING (state, status) {
    console.log('修改loading', status)
    state.isLoading = status
  },
  SET_EVENT_LIST_PAGE_NUMBER_PLUS (state) {
    // console.log('当前页码：', state.params.page)
    state.params.page = state.params.page + 1
    // console.log('下次请求的页码：', state.params.page)
  },
  /**
   * 设置列表数据
   * @param {[type]} state [description]
   * @param {[type]} data  [description]
   */
  SET_EVENT_LIST (state, data) {
    console.log('设置活动列表数据')
    if (state.list.length > 0) {
      for (let i = 0; i < data.length; i++) {
        state.list.push(data[i])
      }
    } else {
      state.list = data
    }
    // console.log(state.list)
  },
  /**
   * 重置列表组件
   * @param {[type]} state [description]
   */
  RESET_EVENT_LIST (state) {
    state.isLoading = false
    state.isNoData = false
    state.isLocked = false
    state.port = ''
    state.list = []
    state.params = {
      page: 1,
      type: 'event',
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
