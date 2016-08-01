import $ from 'jquery'
// import Clipboard from 'Clipboard'
/**
 * 弹出指定的浮层
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} name   [description]
 * @return {[type]}        [description]
 */
export const popup = ({
  dispatch,
  state
}, name) => {
  // 弹出浮层
  dispatch('POPUP', name)
}
function copyToClipboard (elem) {
  // create hidden text element, if it doesn't already exist
  let targetId = '_hiddenCopyText_'
  let isInput = elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA'
  let origSelectionStart, origSelectionEnd
  if (isInput) {
      // can just use the original source element for the selection and copy
    var target = elem
    origSelectionStart = elem.selectionStart
    origSelectionEnd = elem.selectionEnd
  } else {
      // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId)
    if (!target) {
      let target = document.createElement('textarea')
      target.style.position = 'absolute'
      target.style.left = '-9999px'
      target.style.top = '0'
      target.id = targetId
      document.body.appendChild(target)
    }
    target.textContent = elem.textContent
  }
  // select the content
  let currentFocus = document.activeElement
  target.focus()
  target.setSelectionRange(0, target.value.length)

  // copy the selection
  let succeed
  try {
    succeed = document.execCommand('copy')
  } catch (e) {
    succeed = false
  }
  // restore original focus
  if (currentFocus && typeof currentFocus.focus === 'function') {
    currentFocus.focus()
  }

  if (isInput) {
    // restore prior selection
    elem.setSelectionRange(origSelectionStart, origSelectionEnd)
  } else {
    // clear temporary content
    target.textContent = ''
  }
  return succeed
}

// 复制信息到剪切板
export const copyAction = ({
  dispatch,
  state
}) => {
  // const _dispatch = dispatch
  // _dispatch('SET_COPY_INFO', '链接已复制, 现在打开微信进行分享吧')
  // popup({dispatch, state}, 'copy')

  console.log('元素', document.querySelector('#currentURL'))
  let elem = document.querySelector('#currentURL')
  if (copyToClipboard(elem)) {
    console.log('复制成功')
    dispatch('SET_COPY_INFO', '链接已复制, 现在打开微信进行分享吧')
    console.log(111)
    // popup({dispatch, state}, 'copy')
    dispatch('POPUP', 'copy')
    console.log(state.toolbar.pop)
  } else {
    console.log('复制失败')
    dispatch('SET_COPY_INFO', '当前浏览器不支持自动复制，请手动复制链接')
    // popup({dispatch, state}, 'copy')
    dispatch('POPUP', 'copy')
  }

  // let clipboard = new Clipboard('#copylink')
  // clipboard.on('success', function (e) {
  //   e.clearSelection()
  //   dispatch('SET_COPY_INFO', '链接已复制, 现在打开微信进行分享吧')
  //   popup({dispatch, state}, 'copy')
  // })
  // clipboard.on('error', function (e) {
  //   dispatch('SET_COPY_INFO', '当前浏览器不支持自动复制，请手动复制链接')
  //   popup({dispatch, state}, 'copy')
  // })
}

/**
 * 显示/隐藏 微信分享提示浮层
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} status [description]
 * @return {[type]}        [description]
 */
export const toggleWeixinTips = ({
  dispatch,
  state
}, status) => {
  dispatch('TOGGLE_WEIXIN_TIPS', status)
  if (status) {
    dispatch('TOGGLE_TOPBAR_FIXED', false)
  }
}
export const toggleCopyTips = ({
  dispatch,
  state
}, status) => {
  dispatch('TOGGLE_COPY_TIPS', status)
}
/**
 * 初始化toolbar状态监测
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const initToolbarStatus = ({
  dispatch,
  state
}, component) => {
  const _dispatch = dispatch
  const _self = $(component.$el)
  const _parent = _self.parent()
  let _startPos = $(window).scrollTop()

  $(window).on('scroll.toolbar', function (e) {
    const _this = $(this)
    // 最下面窗口到本页顶的距离
    let _hold = _parent.height() - _this.height()
    // 当前窗口(中间)到本页顶的距离
    let _posTop = _this.scrollTop()
    // console.log(_posTop, _hold, _parent.height(), _this.height())
    // console.log(_this, _parent)

    // if (_posTop > _hold) {
    //   _dispatch('TOGGLE_TOOLBAR', true)
    // } else {
    //   if (_posTop > _startPos) {
    //     // console.log('向下')
    //     _dispatch('TOGGLE_TOOLBAR', false)
    //     _dispatch('POPUP', false)
    //   } else {
    //     // console.log('向上')
    //     if (_posTop > _this.height() / 2) {
    //       _dispatch('TOGGLE_TOOLBAR', true)
    //     } else {
    //       _dispatch('TOGGLE_TOOLBAR', false)
    //       _dispatch('POPUP', false)
    //     }
    //   }
    // }
    if (_posTop > _hold) {
      _dispatch('TOGGLE_TOOLBAR', true)
    } else {
      if (_posTop > _startPos) {
        // console.log('向下')
        _dispatch('TOGGLE_TOOLBAR', false)
        _dispatch('POPUP', false)
      } else {
        if (_posTop === 0) {
          _dispatch('TOGGLE_TOOLBAR', false)
          _dispatch('POPUP', false)
        } else {
          _dispatch('TOGGLE_TOOLBAR', true)
        }
      }
    }
    _startPos = _posTop
  })
}
