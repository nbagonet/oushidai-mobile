// initial state
const state = {
  intro: {}
  // 'business_hours': '',
  // 'tel': '',
  // 'site': '',
  // 'local': {
  //   'country': '',
  //   'city': ''
  // },
  // 'public_transportation': {
  //   'metor': '',
  //   'bus': '',
  //   'tramway': '',
  //   'rer': '',
  //   'other': ''
  // },
  // 'zip': '',
  // 'address': '',
  // 'intro': '',
  // 'weixin': '',
  // 'qr': '',
  // 'email': ''
}

// mutations
const mutations = {
  SET_ACTIVITY_INTRO_DATA (state, data) {
    state.intro = { ...state.intro, data }
  },
  RESET_ACTIVITY_INTRO_DATA (state) {
    state.intro = {}
  }
}

export default {
  state,
  mutations
}
