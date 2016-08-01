const state = {
  // url: '',
  loc: [],
  act: [],
  categories: [],
  tags: []
}

const mutations = {
  SET_FILTER_CATEGORIES (state, data) {
    state.categories = data
  },
  SET_FILTER_TAGS (state, data) {
    state.tags = data
  },
  SET_FILTER_LOC (state, data) {
    state.loc = data
  },
  SET_FILTER_ACT (state, data) {
    state.act = data
  }
}

export default {
  state,
  mutations
}
