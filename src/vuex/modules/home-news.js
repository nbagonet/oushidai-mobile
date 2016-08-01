// initial state
const state = {
  // 组件loading状态标识
  isLoading: false,
  // 无数据标识
  isNoData: false,
  // 资讯列表数据
  list: [],
  // 接口地址
  port: '',
  // 接口参数
  params: {
    uid: '',
    page: 1,
    type: 'news',
    category: '',
    tagid: '',
    userPageId: '',
    userPageType: ''
  }
}

// mutations
const mutations = {
  SET_HOME_NEWS_NODATA (state, status) {
    state.isNoData = status
  },
  IS_HOME_NEWS_LOADING (state, status) {
    state.isLoading = status
  },
  /**
   * 设置资讯列表数据
   * @param {[type]} state [description]
   * @param {[type]} data  [description]
   */
  SET_HOME_NEWS (state, data) {
    if (state.list.length > 0) {
      for (let i = 0; i < data.length; i++) {
        state.list.push(data[i])
      }
    } else {
      state.list = data
    }
  },
  /**
   * 重置资讯列表组件
   * @param {[type]} state [description]
   */
  RESET_HOME_NEWS (state) {
    state.isLoading = false
    state.isNoData = false
    state.port = ''
    state.list = []
    state.params = {
      uid: '',
      page: 1,
      type: 'news',
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
