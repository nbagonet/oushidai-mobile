import {
  handleResponse,
  APIError
} from '../../api'

/**
 * 读取机构信息
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const loadOrgIntroData = ({
  dispatch,
  state
}, component) => {
  // 接口
  const _port = state.apis['activity-intro']
  // 请求参数
  const _params = {
    type: component.type,
    id: component.$route.params.id
  }

  // loading状态
  dispatch('GLOBAL_LOADING', true)

  // 发起请求
  component.$http.get(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // 写入数据
        dispatch('SET_ACTIVITY_INTRO_DATA', data)
        // console.log(state.orgCenterIntroActivity)
        // loading状态
        dispatch('GLOBAL_LOADING', false)
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
    window.alert('活动机构简介数据获取失败，请稍后重试')
    // loading状态
    dispatch('GLOBAL_LOADING', false)
  })
}

/**
 * 重置
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
export const reset = ({
  dispatch,
  state
}) => {
  dispatch('RESET_ACTIVITY_INTRO_DATA')
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
  // 读取数据
  loadOrgIntroData({ dispatch, state }, component)
}
