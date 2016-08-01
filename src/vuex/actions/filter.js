import {
  handleResponse,
  APIError
} from '../../api'
// import $ from 'jquery'

// const setFilterCategories = ({ dispatch, state }, component) => {
//   dispatch('SET_FILTER_CATEGORIES', component.config.categories)
// }

// const setFilterTags = ({ dispatch, state }, component) => {
//   dispatch('SET_FILTER_TAGS', component.config.tags)
// }

export const initFilter = ({ dispatch, state }, component) => {
  // console.log('111', component)
  // console.log('传入filter的数据', component.config)
  // console.log('filter内state', state)
  dispatch('GLOBAL_LOADING', true)
  const _port = component.config.port
  component.$http.post(_port)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        console.log('filter-data', data)
        dispatch('SET_FILTER_CATEGORIES', data.categories)
        dispatch('SET_FILTER_TAGS', data.tags)
        dispatch('SET_FILTER_LOC', data.loc)
        dispatch('SET_FILTER_ACT', data.act)
        dispatch('GLOBAL_LOADING', false)
      },
      function (errmsg, errcode) {
        if (Number(errcode) === 1011) {
          // 获取数据出错或无数据
          // dispatch('SET_NEWS_LIST_NODATA', true)
          // dispatch('SET_NEWS_LIST_LOCKED', true)
        } else if (Number(errcode) === 1099) {
          // 数据达到或超过最大页数
          // dispatch('SET_NEWS_LIST_LOCKED', true)
        } else {
          // 输出错误
          APIError(_port, errmsg)
        }
        dispatch('GLOBAL_LOADING', false)
      })
  }, function (res) {
    window.alert('资讯数据获取失败，请稍后重试')
  })
  // setFilterCategories({ dispatch, state }, component)
  // setFilterTags({ dispatch, state }, component)
  // dispatch('GLOBAL_LOADING', false)
}
