// initial state
const state = {
  email: '',
  intro: '',
  qr: '',
  weixin: ''
}

// mutations
const mutations = {
  SET_INTRO_DATA (state, data) {
    for (let key in data) {
      state[key] = data[key]
    }
  }
}

export default {
  state,
  mutations
}
