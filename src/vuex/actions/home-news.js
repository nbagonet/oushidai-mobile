import {
  handleResponse,
  APIError
} from '../../api'
import Swiper from 'swiper'

/**
 * 配置
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const setConfig = ({
  dispatch,
  state
}, component) => {
  console.log('配置网站首页资讯组件参数')
  // 接口地址
  state.homeNews.port = component.config.port
  // 请求参数
  state.homeNews.params = component.config.params
}

/**
* 获取资讯列表数据
* @param  {[type]} {                       dispatch [description]
* @param  {[type]} state}    [description]
* @param  {[type]} component [description]
* @return {[type]}           [description]
*/
const getNewsData = ({
 dispatch,
 state
}, component) => {
  const _port = state.homeNews.port
  const _params = state.homeNews.params

  console.log('请求网站首页资讯列表组件数据', _port, _params)

  // loading状态
  dispatch('GLOBAL_LOADING', true)

  // 发起请求
  component.$http.get(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // loading状态
        dispatch('GLOBAL_LOADING', false)
        // 设置资讯列表数据
        dispatch('SET_HOME_NEWS', data.list)
        // 初始化slider
        component.$nextTick(() => {
          initSlider({ dispatch, state }, '.slider-home-news', ['.home-news-arrLeft', '.home-news-arrRight'])
        })
      },
      function (errmsg, errcode) {
        // 设置为无数据
        dispatch('SET_HOME_NEWS_NODATA', true)
        // 输出错误
        APIError(_port, errmsg)
        // loading状态
        dispatch('GLOBAL_LOADING', false)
      }
    )
  }, function (res) {
    // 弹出提示
    window.alert('网站首页资讯数据获取失败，请稍后重试')
    // loading状态
    dispatch('GLOBAL_LOADING', false)
  })
}

/**
 * 初始化slider
 * @param  {[type]} {                        dispatch [description]
 * @param  {[type]} state}     [description]
 * @param  {[type]} sliderObj  [description]
 * @param  {[type]} controlObj [description]
 * @return {[type]}            [description]
 */
const initSlider = ({
  dispatch,
  state
}, sliderObj, controlObj) => {
  /*eslint-disable */
  let slider = new Swiper(sliderObj, {
    speed: 300,
    preloadImages: false,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    lazyLoadingOnTransitionStart: true,
    prevButton: controlObj[0],
    nextButton: controlObj[1],
    loop: true,
    simulateTouch: true,
    iOSEdgeSwipeDetection: true,
    onInit: function () {}
  })
  /*eslint-enable */
}

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
  // 配置
  setConfig({ dispatch, state }, component)
  // 请求数据
  getNewsData({ dispatch, state }, component)
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
  dispatch('RESET_HOME_NEWS')
}
