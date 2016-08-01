import {
  handleResponse,
  APIError
} from '../../api'

const loadOrgIntroData = ({
  dispatch,
  state
}, component) => {
  // 接口
  const _port = state.apis['mediaOrg-intro']
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
        dispatch('SET_INTRO_DATA', data)
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
    window.alert('简介数据获取失败，请稍后重试')
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
export const resetOrgIntro = ({
  dispatch,
  state
}) => {
  dispatch('SET_INTRO_DATA', {
    email: '',
    intro: '',
    qr: '',
    weixin: ''
  })
}

/**
 * 初始化
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const initOrgIntro = ({
  dispatch,
  state
}, component) => {
  // 读取数据
  loadOrgIntroData({ dispatch, state }, component)
}
