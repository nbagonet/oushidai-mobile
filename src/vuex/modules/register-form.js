// initial state
const state = {
  // 注册接口地址
  port: '',
  // 提交参数
  params: {
    email: '',
    nickname: '',
    password: '',
    'password-recheck': '',
    captcha: '',
    agree: true,
    union: '',
    source: '1003'
  }
}

// mutations
const mutations = {
  SET_REGISTER_PORT (state, port) {
    state.port = port
  },
  SET_REGISTER_PARAMS (state, params) {
    for (let key in params) {
      state.params[key] = params[key]
    }
  },
  RESET_REGISTER_STATE (state) {
    state.port = ''
    state.params.email = ''
    // state.params.nickname = ''
    state.params.password = ''
    state.params['password-recheck'] = ''
    state.params.captcha = ''
    state.params.agree = true
    state.params.union = ''
    state.params.source = '1003'
  }
}

export default {
  state,
  mutations
}
