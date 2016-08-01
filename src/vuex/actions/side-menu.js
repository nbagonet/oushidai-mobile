import {
  handleResponse
} from '../../api'
// import $ from 'jquery'
/**
 * 切换显示状态
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} status [description]
 * @return {[type]}        [description]
 */
export const toggleSidemenu = ({
  dispatch,
  state
}, status) => {
  if (typeof status !== 'boolean') {
    let _status = false
    if (state.sidemenu.show) {
      _status = false
    } else {
      _status = true
    }
    dispatch('TOGGLE_SIDEMENU', _status)
    dispatch('TOGGLE_LOCK_SCROLL', _status)
  } else {
    dispatch('TOGGLE_SIDEMENU', status)
    dispatch('TOGGLE_LOCK_SCROLL', status)
  }
}

export const downloadApp = ({
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
  console.log('手机类型', type)
  component.$http.post(_port, {
    'type': type
  }).then(function (res) {
    handleResponse(res,
      function (data) {
        if (data.link) {
          dispatch('SET_APP_LINK', data.link)
        }
      })
  })
}

// export const lock = ({
//   dispatch,
//   state
// }) => {
//   $('.mask').on('scroll.lock', function (e) {
//     console.log(111)
//     e.stopPropagation()
//     return false
//   })
// }
