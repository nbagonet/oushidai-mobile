const setEventListConfig = ({
  dispatch,
  state
}, component) => {
  const _focusPort = state.apis['activity-focus']
  const _port = state.apis['activity-list']
  let category = component.$route.query.category
  let tagid = component.$route.query.tagid
  const _params = {
    page: 1,
    type: '',
    category: category ? decodeURIComponent(category) : '',
    tagid: tagid ? decodeURIComponent(tagid) : '',
    loc: component.$route.query.loc ? decodeURIComponent(component.$route.query.loc) : '',
    act: component.$route.query.act ? decodeURIComponent(component.$route.query.act) : '',
    userPageId: '',
    userPageType: ''
  }

  if (category || tagid) {
    dispatch('SET_EVENT_HOME_EVENT_FOCUS_CONFIG', {
      show: false,
      port: _focusPort,
      showFilter: false,
      filterLink: 'activity-filter'
    })
    dispatch('SET_EVENT_HOME_TOP_HEADER_CONFIG', {
      show: true,
      filterLink: 'activity-filter',
      title: '筛选结果'
    })
  } else {
    dispatch('SET_EVENT_HOME_EVENT_FOCUS_CONFIG', {
      show: true,
      port: _focusPort,
      showFilter: true,
      filterLink: 'activity-filter'
    })
    dispatch('SET_EVENT_HOME_TOP_HEADER_CONFIG', {
      show: false,
      filterLink: 'activity-filter',
      title: '筛选结果'
    })
  }
  dispatch('SET_EVENT_HOME_EVENT_LIST_CONFIG', _port, _params)
}

export const initEventHome = ({
  dispatch,
  state
}, component) => {
  setEventListConfig({ dispatch, state }, component)
}
