const state = {
  topheaderConfig: {
    show: true,
    backLink: 'home',
    title: '吐槽建议'
  },
  btnLock: false
}

const mutations = {
  SET_ADVICE_top_HEADER_CONFIG (state, data) {
    state.topheaderConfig = data
  },
  SET_FEEDBACK_BTN_LOCK (state, status) {
    state.btnLock = status
  }
}

export default {
  state,
  mutations
}
