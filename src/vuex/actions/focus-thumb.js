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
  console.log('传入的focusThumb数据', component.config)
  const _port = component.config.port
    // const _type = component.config.type
  const _filter = component.config.showFilter
  const _show = component.config.show
  const _filterLink = component.config.filterLink
    // dispatch('SET_FOCUS_THUMB_FILTER', _filter)
  dispatch('SET_FOCUS_THUMB_FILTER_LINK', _filterLink)
  dispatch('SET_FOCUS_THUMB_SHOW', _show)
    // 设置焦点图类型
    // dispatch('SET_FOCUS_TYPE', _type)
    // 重置
  dispatch('SET_FOCUS_THUMB_LIST', [])
    // 是否渲染焦点图
  if (!_show) return
    // loading
  dispatch('GLOBAL_LOADING', true)

  // 发起请求
  component.$http.get(_port)
    .then(function (res) {
      handleResponse(
        res,
        function (data) {
          console.log('focus-thumb', data.focus.length)
          if (!data.focus.length) {
            console.log('1')
            dispatch('SET_FOCUS_THUMB_SHOW', false)
            dispatch('GLOBAL_LOADING', false)
          }
          // 设置焦点图数据
          dispatch('SET_FOCUS_THUMB_LIST', data.focus)
            // 显示过滤按钮
          dispatch('SET_FOCUS_THUMB_FILTER', _filter)
            // 初始化焦点图
          component.$nextTick(() => {
            initFocus({
              dispatch,
              state
            }, focusObj, paginationObj)
          })
            // 设置分享数据
            // console.log(data.focus[0].pic)
            // 数据有可能为空 会报错
          // dispatch('SET_SHARE_INFO', {
          //   title: '欧时代',
          //   description: component.$route.title,
          //   image: data.focus[0].pic
          // })
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
}, focusObj, thumbsObj) => {
  /*eslint-disable */
  // let conf = {}
  // console.log('state', state)
  // if (state.focus.type == 'mixed') {
  //   conf.paginationType = 'bullets'
  //   conf.prevButton = 'null'
  //   conf.nextButton = 'null'
  //   conf.paginationCustomRender = null
  // } else if (state.focus.type == 'news') {
  //   conf.paginationType = 'custom'
  //   conf.prevButton = '.swiper-button-prev'
  //   conf.nextButton = '.swiper-button-next'
  //   conf.paginationCustomRender = function(swiper, current, total) {
  //     // 自定义分页器
  //     console.log('swiper', swiper)
  //     return 
  //   }
  // }
  let SliderFocus = new Swiper(focusObj, {
    // autoplay: 6000,
    speed: 300,
    // pagination: paginationObj,
    pagination: 'null',
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
    // loop: true,
    simulateTouch: true,
    iOSEdgeSwipeDetection: true,
    // paginationCustomRender: conf.paginationCustomRender,
    onInit: function(swiper) {
      // 结束全局loading
      // dispatch('GLOBAL_LOADING', false)
      console.log('大图初始化完毕')
      let SliderThumbs = new Swiper(thumbsObj, {
        speed: 300,
        spaceBetween: 10,
        slideToClickedSlide: true,
        // lazyLoading: false,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        lazyLoadingOnTransitionStart: true,
        // lazyLoadingInPrevNextAmount: 5,
        // loop: true,
        centeredSlides: true,
        // virtualTranslate : true,
        slidesPerView: 'auto',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onInit: function(swiperThumb) {
          dispatch('GLOBAL_LOADING', false)
          console.log('小图初始化完毕')
          console.log('SliderThumbs', swiperThumb.params)
          swiper.params.control = swiperThumb
          swiperThumb.params.control = swiper
        },
        onSlideChangeEnd: function(swiperThumb) {
          swiper.slideTo(swiperThumb.activeIndex, 300, false)
        }
      })
    }
  })

  // let SliderThumbs = new Swiper(thumbsObj, {
  //   speed: 300,
  //   spaceBetween: 10,
  //   slideToClickedSlide: true,
  //   // lazyLoading: false,
  //   lazyLoading: true,
  //   lazyLoadingInPrevNext: true,
  //   lazyLoadingOnTransitionStart: true,
  //   // lazyLoadingInPrevNextAmount: 5,
  //   // loop: true,
  //   centeredSlides: true,
  //   // virtualTranslate : true,
  //   slidesPerView: 'auto',
  //   prevButton: '.swiper-button-prev',
  //   nextButton: '.swiper-button-next',
  //   onInit: function() {
  //     dispatch('GLOBAL_LOADING', false)
  //     console.log('小图初始化完毕')
  //   }
  // })
  // SliderFocus.params.control = SliderThumbs
  // SliderThumbs.params.control = SliderFocus
    /* eslint-enable */
}
