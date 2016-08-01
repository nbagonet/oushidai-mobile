/**
 * 配置焦点图
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
const setFocusConfig = ({
  dispatch,
  state
}) => {
  const _port = state.apis['home-focus']
  dispatch('SET_HOME_FOCUS_CONFIG', {
    port: _port
    // type: 'mixed'
  })
}

/**
 * 配置资讯模块
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const setNews = ({
  dispatch,
  state
}, component) => {
  const _port = state.apis['news-list']
  const _params = {
    uid: '',
    page: 1,
    type: '',
    category: '',
    tagid: '',
    userPageId: '',
    userPageType: ''
  }

  dispatch('SET_HOME_NEWS_CONFIG', _port, _params)
}

/**
 * 初始化活动模块
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const setActivity = ({
  dispatch,
  state
}, component) => {
  const _port = state.apis['activity-list']
  const _params = {
    page: 1,
    type: '',
    category: '',
    tagid: '',
    userPageId: '',
    userPageType: ''
  }

  dispatch('SET_HOME_ACTIVITY_CONFIG', _port, _params)
}

/**
 * 初始化
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const init = ({
  dispatch,
  state
}, component) => {
  // 初始化焦点图
  setFocusConfig({ dispatch, state })
  // 初始化资讯模块
  setNews({ dispatch, state }, component)
  // 初始化活动模块
  setActivity({ dispatch, state }, component)
}
