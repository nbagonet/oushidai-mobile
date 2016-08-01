import {
  handleResponse,
  APIError
} from '../../api'

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
  // 重置
  reset({ dispatch, state }, component)

  // 如果已经登录，跳转到home
  if (state.isLogin) {
    component.$router.go({ name: 'home' })
  } else {
    // 接口
    const _port = state.apis['register']
    // 联合登录信息
    const _union = component.$route.query.union

    // 配置接口
    dispatch('SET_REGISTER_PORT', _port)
    // 配置联合登录信息
    if (_union) {
      dispatch('SET_REGISTER_PARAMS', {
        union: _union
      })
    }
  }
}

/**
 * 重置
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const reset = ({
  dispatch,
  state
}, component) => {
  dispatch('RESET_REGISTER_STATE')
}

/**
 * 提交注册信息
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const submit = ({
  dispatch,
  state
}, component) => {
  // 接口
  const _port = state.registerForm.port
  // 参数
  const _params = state.registerForm.params

  // loading
  dispatch('GLOBAL_LOADING', true)

  // 提交数据
  component.$http.post(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // loading状态
        dispatch('GLOBAL_LOADING', false)
        // 跳转到注册成功页
        component.$router.go({ name: 'register-success' })
      },
      function (errmsg, errcode) {
        // 输出错误
        APIError(_port, errmsg)
        window.alert(errmsg)
        // loading状态
        dispatch('GLOBAL_LOADING', false)
      }
    )
  }, function (res) {
    // 弹出提示
    window.alert('注册信息提交失败，请稍后重试')
    // loading状态
    dispatch('GLOBAL_LOADING', false)
  })
}
