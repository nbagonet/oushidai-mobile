// initial state
const state = {
  // 组件loading状态标识
  isLoading: false,
  // 出错状态
  isError: false,
  // 作者信息
  authorInfo: '',
  // 正文相关数据
  newsData: {
    id: '',
    type: '',
    category: {
      name: '',
      id: ''
    },
    prevNews: {
      id: ''
    },
    nextNews: {
      id: ''
    },
    tags: [{
      tag: '',
      id: ''
    }],
    cover: '',
    title: '',
    author: {
      type: '',
      name: '',
      uid: '',
      avatar: '',
      homepage: ''
    },
    like: {
      is_liked: false,
      num: ''
    },
    comment: {
      num: ''
    },
    view: {
      num: ''
    },
    content: ''
  },
  // 顶部工具栏配置
  topheaderConfig: {
    // 返回链接
    backLink: 'news',
    // 上一篇
    prev: {
      link: 'news-view',
      id: ''
    },
    // 下一篇
    next: {
      link: 'news-view',
      id: ''
    }
  },
  // 相关资讯列表配置
  releatedListConfig: {
    type: 'news',
    number: 10,
    list: []
  },
  // 底部工具栏配置
  bottomToolbarConfig: {}
}

// mutations
const mutations = {
  SET_NEWS_VIEW_BOTTOM_TOOLBAR_CONFIG (state, config) {
    state.bottomToolbarConfig = config
  },
  // 设置组件loading状态
  NEWS_VIEW_LOADING (state, status) {
    state.isLoading = status
  },
  // 设置出错状态
  IS_NEWS_VIEW_ERROR (state, status) {
    state.isError = status
  },
  // 设置topheader配置信息
  SET_TOPHEADER_CONFIG (state, data) {
    state.topheaderConfig = data
  },
  // 设置相关列表配置信息
  SET_NEWS_VIEW_RELEATED_LIST_CONFIG (state, config) {
    state.releatedListConfig = config
  },
  // 设置正文数据
  SET_NEWS_CONTENT (state, data) {
    state.newsData = data
  },
  // 更新作者信息数据
  SET_NEWS_AUTHOR_INFO (state, data) {
    state.authorInfo = data
  },
  // 重置数据
  RESET_NEWS_VIEW_STATE (state) {
    state.isLoading = false
    state.isError = false
  }
}

export default {
  state,
  mutations
}
