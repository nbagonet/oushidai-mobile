const setNewsListConfig = ({
  dispatch,
  state
}, component) => {
  const _port = state.apis['news-list']
  // const _userPageId = component.$route.params.id
  // const _userPageType = component.type
  const _params = {
    uid: '',
    page: 1,
    type: '',
    category: '',
    tagid: '',
    userPageId: component.$route.params.id,
    userPageType: component.type
  }

  // dispatch('SET_NEWS_LIST_CONFIG', _port, {
  //   userPageId: _userPageId,
  //   userPageType: _userPageType
  // })
  dispatch('SET_ORG_CENTER_ARTICLE_NEWS_LIST_CONFIG', _port, _params)
}

export const init = ({
  dispatch,
  state
}, component) => {
  setNewsListConfig({ dispatch, state }, component)
}
