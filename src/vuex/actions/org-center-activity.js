const setEventListConfig = ({
  dispatch,
  state
}, component) => {
  const _port = state.apis['activity-list']
  const _params = {
    page: 1,
    type: 'event',
    category: '',
    tagid: '',
    userPageId: component.$route.params.id,
    userPageType: component.type
  }
  // console.log(component.$route.params.id)

  dispatch('SET_ORG_CENTER_EVENT_LIST_CONFIG', _port, _params)
}

export const init = ({
  dispatch,
  state
}, component) => {
  setEventListConfig({ dispatch, state }, component)
}
