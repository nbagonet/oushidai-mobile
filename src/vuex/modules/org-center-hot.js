// initial state
const state = {
  list: []
}

// mutations
const mutations = {
  SET_HOTLIST (state, data) {
    state.list = data
    // for (let i = 0; i < data.length; i++) {
    //   state.list.push(data[i])
    // }
  }
}

export default {
  state,
  mutations
}
