const setListConfig = ({
  dispatch,
  state
}, component) => {
  const _port = state.apis['fans-list']
  // const _userPageId = component.$route.params.id
  // const _userPageType = component.type
  const _params = {
    page: 1,
    type: '',
    category: '',
    tagid: '',
    userPageId: component.$route.params.id,
    userPageType: component.type
  }

  // dispatch('SET_USER_LIST_CONFIG', _port, {
  //   userPageId: _userPageId,
  //   userPageType: _userPageType
  // })
  dispatch('SET_USER_LIST_CONFIG', _port, _params)
}

export const init = ({
  dispatch,
  state
}, component) => {
  setListConfig({ dispatch, state }, component)
}
