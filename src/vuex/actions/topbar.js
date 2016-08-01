import $ from 'jquery'
/**
 * 设置面包屑
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} data   [description]
 * @return {[type]}        [description]
 */
export const setBreadcrumbs = ({
  dispatch,
  state
}, data) => {
  console.log('配置面包屑')
  dispatch('SET_BREADCRUMBS_INFO', data)
}

/**
 * 显示/隐藏侧边栏切换按钮
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} status [description]
 * @return {[type]}        [description]
 */
export const showSidebarMenuBtn = ({
  dispatch,
  state
}, status) => {
  if (typeof status === 'boolean') {
    dispatch('TOGGLE_SIDEBAR_MENU_BTN', status)
  } else {
    console.error('参数应为boolen，请检查')
  }
}

/**
 * 切换吸顶状态
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} status [description]
 * @return {[type]}        [description]
 */
export const toggleFixed = ({
  dispatch,
  state
}, status) => {
  if (typeof status === 'boolean') {
    dispatch('TOGGLE_TOPBAR_FIXED', status)
  } else {
    console.error('参数应为boolen，请检查')
  }
}

export const bindScroll = ({
  dispatch,
  state
}) => {
  let _startPos = $(window).scrollTop()
  let topbarHeight = document.querySelector('.topbar').clientHeight + 10
  // console.log($('.bottombar').get(0).offsetTop)
  // let bottombarOffsetTop = document.querySelector('.bottombar').offsetTop
  // console.log(bottombarOffsetTop)
  // let bodyElemHeight = document.querySelector('body').offsetHeight
  $(window).on('scroll.fixTopbar', function (e) {
    // 当前页面高度(渲染完topbar以后很多元素并没有渲染完毕，所以要放在事件中来)
    let bodyElemHeight = $('body').height()
    // 当前可用窗口的高度
    let windowAvailHeight = window.screen.availHeight
    // 当前窗口顶端到页面顶端的像素值
    let _pos = document.body.scrollTop || document.documentElement.scrollTop
    if (_pos <= topbarHeight) {
      toggleFixed({
        dispatch,
        state
      }, false)
    } else {
      if (_startPos < _pos || _pos + windowAvailHeight >= bodyElemHeight) {
        toggleFixed({
          dispatch,
          state
        }, false)
      } else {
        toggleFixed({
          dispatch,
          state
        }, true)
      }
    }
    _startPos = _pos
  })
}
