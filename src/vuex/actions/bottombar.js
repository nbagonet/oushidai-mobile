// import $ from 'jquery'
import {
  handleResponse
} from '../../api'
// import {
//   toggleLockScroll
// } from '../action.js'

const $ = window.$

export const bindClose = ({
  dispatch,
  state
}) => {
  $('.app-img .close').on('click.Close', function () {
    // $('.app-img').css('display', 'none')
    dispatch('SET_BOTTOMBAR_APP_AD_SHOW', false)
  })
}

export const setAppLink = ({
  dispatch,
  state
}, component) => {
  let sUserAgent = navigator.userAgent.toLowerCase()
  // let isIpad = sUserAgent.match(/ipad/i) === 'ipad'
  let isIphoneOs = !!sUserAgent.match(/iphone/i)
  let isAndroid = !!sUserAgent.match(/android/i)
  let _port = state.apis['app-download']
  let type
  if (isIphoneOs) {
    type = 'iphone'
  } else if (isAndroid) {
    type = 'android'
  } else {
    type = 'others'
  }
  // console.log('手机类型', type)
  component.$http.post(_port, {
    'type': type
  }).then(function (res) {
    handleResponse(res,
      function (data) {
        if (data.link) {
          dispatch('SET_BOTTOMBAR_APP_URL', data.link)
        }
      })
  })
}

const goTop = () => {
  $('html,body').animate({
    scrollTop: 0
  }, 500)
}

export const bindGoTop = ({
  dispatch,
  state
}) => {
  $('.func-list .top').on('click', function (e) {
    e.preventDefault()
    goTop()
  })
}

export const bindQR = ({
  dispatch,
  state
}) => {
  $('.func-list .qr').on('click.qr', function (e) {
    e.preventDefault()
    // toggleLockScroll({ dispatch, state }, true)
    $('.weixin-group-qr').removeClass('none').on('click', function () {
      // toggleLockScroll({ dispatch, state }, false)
      $(this).addClass('none')
    })
    $('body').on('scroll.removeQR', function () {
      $('.weixin-group-qr').addClass('none')
    })
  })
}
