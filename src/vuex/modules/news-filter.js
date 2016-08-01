// initial state
const state = {
  topheaderConfig: {
    show: true,
    backLink: 'news',
    title: '筛选资讯'
  },
  filterConfig: {
    // // url: '',
    // categories: [{
    //   name: 'news-home',
    //   title: '新鲜事',
    //   category: 'interesting'
    // }],
    // tags: [{
    //   title: '出行',
    //   name: 'news-home',
    //   // link: 'www.baidu.com',
    //   id: 123123
    // }]
    port: ''
  }
}

const mutations = {
  SET_NEWS_FILTER_TOP_HEADER_CONFIG (state, data) {
    state.topheaderConfig = data
  },
  SET_NEWS_FILTER_CONFIG (state, data) {
    console.log('111', data)
    state.filterConfig = data
  }
}

export default {
  state,
  mutations
}

