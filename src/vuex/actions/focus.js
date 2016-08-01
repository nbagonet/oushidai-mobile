import Swiper from 'swiper'
import {
  handleResponse,
  APIError
} from '../../api'
import {
  setWeixinShare
} from '../../vuex/action'

/**
 * 配置分享信息
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @return {[type]}       [description]
 */
export const setShareConf = ({ dispatch, state }) => {
  // 初始化微信分享配置
  setWeixinShare({ dispatch, state })
}

/**
 * 获取数据并初始化焦点图
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const getFocusData = ({
  dispatch,
  state
}, component, focusObj, paginationObj) => {
  // console.log('focus-getFocusData-component', component)
  const _port = component.config.port
  // const _type = component.config.type
  // console.log('type', _type)
  // 设置焦点图类型
  // dispatch('SET_FOCUS_TYPE', _type)
  // 重置
  dispatch('SET_FOCUS_LIST', [])

  // loading
  dispatch('GLOBAL_LOADING', true)

  // 发起请求
  component.$http.get(_port)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // 设置焦点图数据
        dispatch('SET_FOCUS_LIST', data.focus)
        // 初始化焦点图
        component.$nextTick(() => {
          initFocus({
            dispatch,
            state
          }, focusObj, paginationObj)
        })
        // 设置分享数据
        // console.log(data.focus[0].pic)
        dispatch('SET_SHARE_INFO', {
          title: '欧时代',
          description: component.$route.title,
          image: data.focus[0].pic
        })
        setShareConf({ dispatch, state })
      },
      function (errmsg) {
        // 输出错误
        APIError(_port, errmsg)
      }
    )
  }, function (res) {
    // 弹出提示
    window.alert('焦点图数据获取失败，请稍后重试')
  })
}

/**
 * 初始化焦点图
 * @param  {[type]} {                           dispatch [description]
 * @param  {[type]} state}        [description]
 * @param  {[type]} focusObj      [description]
 * @param  {[type]} paginationObj [description]
 * @return {[type]}               [description]
 */
const initFocus = ({
  dispatch,
  state
}, focusObj, paginationObj) => {
  /*eslint-disable */
  // let conf = {}
  // if (state.focus.type == 'mixed') {
  //   conf.paginationType = 'bullets'
  //   conf.prevButton = 'null'
  //   conf.nextButton = 'null'
  //   conf.paginationCustomRender = null
  // } else if (state.focus.type == 'thumb') {
  //   conf.paginationType = 'bullets'
  //   // conf.prevButton = '.swiper-button-prev'
  //   // conf.nextButton = '.swiper-button-next'
  //   conf.paginationBulletRender = function(index, className) {
  //     // 自定义分页器
  //     console.log('swiper', state.focus.list[index].pic)

  //     return '<div class="slider-thumb-item"><img class="swiper-lazy" src="../../assets/img/common/blank.png" style="background-image: url(' + state.focus.list[index].pic.replace('////g', '//') + ')";></div>' 
  //     // return '<span class="' + className + '">' + (index + 1) + '</span>'
  //     // return current + ' of ' + total
  //   }
  // }
  let SliderFocus = new Swiper(focusObj, {
    // autoplay: 6000,
    speed: 300,
    pagination: paginationObj,
    // paginationType: conf.paginationType,
    paginationClickable: true,
    paginationHide: false,
    preloadImages: false,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    // lazyLoadingInPrevNextAmount: 1,
    lazyLoadingOnTransitionStart: true,
    paginationElement: 'span',
    // prevButton: conf.prevButton,
    // nextButton: conf.nextButton,
    bulletActiveClass: 'slider-focus-bullet-active',
    bulletClass: 'slider-focus-bullet',
    loop: true,
    simulateTouch: true,
    iOSEdgeSwipeDetection: true,
    // paginationBulletRender: conf.paginationBulletRender,
    onInit: function () {
      // 结束全局loading
      dispatch('GLOBAL_LOADING', false)
    }
  })
  /* eslint-enable */
}
