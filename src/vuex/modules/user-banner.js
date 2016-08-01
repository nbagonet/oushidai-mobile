const state = {
  id: '',
  name: '',
  avatar: '',
  banner: '',
  type: '',
  level: '',
  intro: '',
  fans: 0,
  article: 0,
  liked: 0,
  comments: 0,
  event: 0,
  followed: false
}

const mutations = {
  SET_USER_DATA (state, data) {
    for (let key in data) {
      state[key] = data[key]
    }
  },
  RESET_USER_DATA (state) {
    state.id = ''
    state.name = ''
    state.avatar = ''
    state.banner = ''
    state.type = ''
    state.level = ''
    state.intro = ''
    state.fans = 0
    state.article = 0
    state.liked = 0
    state.comments = 0
    state.event = 0
    state.followed = false
  }
}

export default {
  state,
  mutations
}
