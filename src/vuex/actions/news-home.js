// const setFocusConfig = ({
//   dispatch,
//   state
// }, component) => {
//   let category = component.$route.query.category
//   let tagid = component.$route.query.tagid
//   dispatch('SET_NEWS_HOME_TOP_HEADER_CONFIG', {
//     show: f
//   })
// }
const setFocusConfig = ({
  dispatch,
  state
}, component) => {
  let category = component.$route.query.category
  let tagid = component.$route.query.tagid
  const _port = state.apis['news-focus']
  console.log('是否渲染焦点图', category || tagid)
  if (category || tagid) {
    dispatch('SET_NEWS_HOME_FOCUS_CONFIG', {
      show: false,
      port: _port,
      showFilter: false,
      filterLink: 'news-filter'
    })
    dispatch('SET_NEWS_HOME_TOP_HEADER_CONFIG', {
      show: true,
      filterLink: 'news-filter',
      title: '筛选结果'
    })
  } else {
    dispatch('SET_NEWS_HOME_FOCUS_CONFIG', {
      show: true,
      port: _port,
      showFilter: true,
      filterLink: 'news-filter'
    })
    dispatch('SET_NEWS_HOME_TOP_HEADER_CONFIG', {
      show: false,
      filterLink: 'news-filter',
      title: '筛选结果'
    })
  }
  // dispatch('SET_NEWS_HOME_FOCUS_CONFIG', {
  //   show: true,
  //   port: _port,
  //   showFilter: true,
  //   filterLink: 'news-filter'
  // })
}

const setNewsListConfig = ({
  dispatch,
  state
}, component) => {
  const _port = state.apis['news-list']
  // let urlObj = new URL()
  // console.log('component', component)
  const _params = {
    uid: '',
    page: 1,
    type: '',
    category: component.$route.query.category ? decodeURIComponent(component.$route.query.category) : '',
    tagid: component.$route.query.tagid ? decodeURIComponent(component.$route.query.tagid) : '',
    loc: component.$route.query.loc ? decodeURIComponent(component.$route.query.loc) : '',
    act: component.$route.query.act ? decodeURIComponent(component.$route.query.act) : '',
    userPageId: '',
    userPageType: ''
  }

  dispatch('SET_NEWS_HOME_NEWS_LIST_CONFIG', _port, _params)
}

export const initNewsHome = ({
  dispatch,
  state
}, component) => {
  // if (tagid || category) {
  setFocusConfig({ dispatch, state }, component)
  // }
  setNewsListConfig({ dispatch, state }, component)
}
