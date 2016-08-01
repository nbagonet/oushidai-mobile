const setTopheader = ({
  dispatch,
  state
}) => {
  console.log('设置topheader')
  dispatch('SET_ACTIVITY_FILTER_TOP_HEADER_CONFIG', {
    show: true,
    backLink: 'activity-home',
    title: '筛选活动'
  })
}

const setFilter = ({
  dispatch, state
}) => {
  console.log('设置活动Filter')
  dispatch('SET_ACTIVITY_FILTER_CONFIG', {
    // url: '/activity',
    // categories: [{
    //   title: '新鲜事',
    //   name: 'activity-home',
    //   category: 'interesting'
    // }, {
    //   title: '生活',
    //   name: 'activity-home',
    //   category: '2'
    // }, {
    //   title: '时尚',
    //   name: 'activity-home',
    //   category: '2'
    // }]
    // tags: []
    port: state.apis['activity-filter']
  })
}

export const initActivityFilter = ({
  dispatch,
  state
}, component) => {
  setTopheader({ dispatch, state })
  setFilter({ dispatch, state })
  dispatch('GLOBAL_LOADING', false)
}
