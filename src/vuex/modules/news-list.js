// initial state
const state = {
  // 是否第一次进入组件
  first: true,
  // 组件loading状态标识
  isLoading: false,
  // 无数据标识
  isNoData: false,
  // 锁定标识，true时，将不再请求下一页的数据
  isLocked: false,
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
    loc: '',
    act: '',
    userPageId: '',
    userPageType: ''
  },
  // 是否显示评论数
  showCommentsNum: false,
  // 是否显示点赞数
  showLikedNum: false,
  // 是否显示阅读数
  showViewNum: true
}

// mutations
const mutations = {
  SET_NEWS_LIST_LOCKED (state, status) {
    state.isLocked = status
  },
  SET_NEWS_LIST_NODATA (state, status) {
    state.isNoData = status
  },
  IS_NEWS_LIST_LOADING (state, status) {
    console.log('修改Loading', status)
    state.isLoading = status
  },
  SET_NEWS_LIST_PAGE_NUMBER_PLUS (state) {
    // console.log('当前页码：', state.params.page)
    state.params.page = state.params.page + 1
    // console.log('下次请求的页码：', state.params.page)
  },
  /**
   * 设置资讯列表数据
   * @param {[type]} state [description]
   * @param {[type]} data  [description]
   */
  SET_NEWS_LIST (state, data) {
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
  RESET_NEWS_LIST (state) {
    state.isLoading = false
    state.isNoData = false
    state.isLocked = false
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
    state.showCommentsNum = false
    state.showLikedNum = false
  }
}

export default {
  state,
  mutations
}
