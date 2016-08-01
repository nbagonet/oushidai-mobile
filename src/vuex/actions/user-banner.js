import {
  handleResponse,
  APIError
} from '../../api'
import {
  setWeixinShare
} from '../../vuex/action'

/**
 * 配置分享信息
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @return {[type]}       [description]
 */
export const setShareConf = ({ dispatch, state }) => {
  // 初始化微信分享配置
  setWeixinShare({ dispatch, state })
}

/**
 * 读取用户信息
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const loadUserData = ({
  dispatch,
  state
}, component) => {
  // console.log(component.type)
  // 接口
  let _port = ''
  if (component.type === 'writer' || component.type === 'mediaOrg') {
    _port = state.apis['author-info']
  } else if (component.type === 'eventOrg') {
    _port = state.apis['activity-org-info']
  }
  // 请求参数
  const _params = {
    type: component.type,
    id: component.userid,
    userId: component.userid
  }

  // loading状态
  dispatch('GLOBAL_LOADING', true)

  // 发起请求
  component.$http.get(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // 用户信息数据
        dispatch('SET_USER_DATA', data)
        // loading状态
        dispatch('GLOBAL_LOADING', false)
        // 设置分享数据
        dispatch('SET_SHARE_INFO', {
          title: data.name,
          description: data.intro,
          image: data.avatar
        })
        setShareConf({ dispatch, state })
      },
      function (errmsg, errcode) {
        // 输出错误
        APIError(_port, errmsg)
        // loading状态
        dispatch('GLOBAL_LOADING', false)
      }
    )
  }, function (res) {
    // 弹出提示
    window.alert('用户信息数据获取失败，请稍后重试')
    // loading状态
    dispatch('GLOBAL_LOADING', false)
  })
}

/**
 * 重置user-banner
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
export const resetUserBanner = ({
  dispatch,
  state
}) => {
  dispatch('RESET_USER_DATA')
}

/**
 * 初始化用户banner
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const initUserBanner = ({
  dispatch,
  state
}, component) => {
  // 读取用户数据
  loadUserData({ dispatch, state }, component)
}
