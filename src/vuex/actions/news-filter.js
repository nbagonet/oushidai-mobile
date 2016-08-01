const setTopheader = ({
  dispatch,
  state
}) => {
  console.log('设置topheader')
  dispatch('SET_NEWS_FILTER_TOP_HEADER_CONFIG', {
    show: true,
    backLink: 'news-home',
    title: '筛选资讯'
  })
}

const setFilter = ({
  dispatch, state
}) => {
  console.log('设置Filter')
  const _port = state.apis['news-filter']
  dispatch('SET_NEWS_FILTER_CONFIG', {
    port: _port
    // categories: [{
    //   title: '新鲜事',
    //   name: 'news-home',
    //   category: 'interesting'
    // }, {
    //   title: '生活',
    //   name: 'news-home',
    //   category: '2'
    // }, {
    //   title: '时尚',
    //   name: 'news-home',
    //   category: '2'
    // }],
    // tags: [{
    //   title: '新鲜事',
    //   name: 'news-home',
    //   id: '1'
    // }, {
    //   title: '生活',
    //   name: 'news-home',
    //   id: '2'
    // }, {
    //   title: '时尚',
    //   name: 'news-home',
    //   id: '2'
    // }, {
    //   name: 'news-home',
    //   title: '美食',
    //   id: '2'
    // }]
  })
}

export const initNewsFilter = ({
  dispatch,
  state
}, component) => {
  setTopheader({ dispatch, state })
  setFilter({ dispatch, state })
  dispatch('GLOBAL_LOADING', false)
}
