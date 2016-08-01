import Store from 'store'
import $ from 'jquery'
import {
  substr2
} from '../filter'
import {
  handleResponse
} from '../api'
/**
 * 计算一个字符串的长度，其中全角字符计为2
 * @param  {string} str 字符串
 * @return {number}     计算后的长度
 */
export const getStringLength = (str) => {
  if (typeof str === 'undefined') {
    return 0
  }
  var aMatch = str.match(/[\u4e00-\u9fa5]/g)
  // var aMatch = str.match(/[^\x00-\x80]/g)
  return (str.length + (!aMatch ? 0 : aMatch.length))
}

/**
 * 设置分享内容
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} info   [description]
 * @return {[type]}        [description]
 */
export const setShareInfo = ({
  dispatch,
  state
}, info) => {
  dispatch('SET_SHARE_INFO', info)
}

/**
 * 去除html标签等
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export const removeHTMLTag = (str) => {
  // 去除HTML tag
  str = str.replace(/<\/?[^>]*>/g, '')
  // 去除行尾空白
  // str = str.replace(/[ | ]*\n/g, '\n')
  // 去除多余空行
  // str = str.replace(/\n[\s| | ]*\r/g, '\n')
  // 去掉&nbsp;
  str = str.replace(/&nbsp;/ig, '')
  return str
}

/**
 * 锁定/解锁页面滚动
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} status [description]
 * @return {[type]}        [description]
 */
export const toggleLockScroll = ({
  dispatch,
  state
}, status) => {
  dispatch('TOGGLE_LOCK_SCROLL', status)
}

/**
 * 读取本地存储的国家信息
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
export const loadLocation = ({
  dispatch,
  state
}) => {
  // 默认值为全欧
  let _local = 'eu'
  if (Store.get('location')) {
    _local = Store.get('location')
  }
  dispatch('SET_LOCAL', _local)
}

/**
 * 判断是否在微信内
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
export const checkInWeiXin = ({
  dispatch,
  state
}) => {
  if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
    dispatch('IN_WEIXIN', true)
  } else {
    dispatch('IN_WEIXIN', false)
  }
}

/**
 * 配置微信分享内容
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} title  [description]
 * @param  {[type]} desc   [description]
 * @param  {[type]} pic    [description]
 * @return {[type]}        [description]
 */
export const setWeixinShare = ({
  dispatch,
  state
}) => {
  const $info = window.$info
  window.wx.config({
    debug: false,
    appId: $info.shareConf.weixin.appId,
    timestamp: $info.shareConf.weixin.timestamp,
    nonceStr: $info.shareConf.weixin.nonceStr,
    signature: $info.shareConf.weixin.signature,
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo'
    ]
  })
  // 分享到朋友圈
  window.wx.onMenuShareTimeline({
    title: state.shareInfo.title,
    link: window.location.href,
    imgUrl: state.shareInfo.image,
    success: function () {},
    cancel: function () {}
  })
  // 分享给微信好友
  window.wx.onMenuShareAppMessage({
    title: state.shareInfo.title,
    link: window.location.href,
    desc: state.shareInfo.description,
    imgUrl: state.shareInfo.image,
    type: 'link',
    dataUrl: '',
    success: function () {},
    cancel: function () {}
  })
}

/**
 * 分享到微博
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
export const shareToWeibo = ({
  dispatch,
  state
}) => {
  const $info = window.$info
  const _tags = function () {
    let c = ''
    for (var i = 0; i < state.shareInfo.tags.length; i++) {
      c += '#' + state.shareInfo.tags[i].tag + '#'
    }
    return c
  }
  const _desc = substr2(state.shareInfo.description, 100, true)
  const _conf = {
    url: encodeURIComponent(window.location.href),
    appkey: $info.shareConf.weibo.appkey,
    title: encodeURIComponent('《' + state.shareInfo.title + '》' + _tags() + _desc),
    ralateUid: $info.shareConf.weibo.ralateUid,
    pic: encodeURIComponent(state.shareInfo.image),
    lang: 'zh_cn'
  }
  const _href = 'http://service.weibo.com/share/share.php?url=' + _conf.url + '&appkey=' + _conf.appkey + '&title=' + _conf.title + '&pic=' + _conf.pic + '&ralateUid=' + _conf.ralateUid + '&language=' + _conf.lang + '&searchPic=true'
  window.open(_href, 'shareWindow', 'directories=no,fullscreen=no,height=600,width=800,left=100,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no')
}

/**
 * 分享到QZone
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
export const shareToQZone = ({
  dispatch,
  state
}) => {
  const $info = window.$info
  const _conf = {
    url: window.location.href,
    showcount: '0',
    desc: '',
    summary: substr2(state.shareInfo.description, 100, true),
    title: state.shareInfo.title,
    site: $info.shareConf.qzone.site,
    pics: state.shareInfo.image,
    style: '203',
    width: 22,
    height: 22
  }
  let s = []
  for (let key in _conf) {
    s.push(key + '=' + encodeURIComponent(_conf[key] || ''))
  }
  const _href = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + s.join('&')
  window.open(_href, 'shareWindow', 'directories=no,fullscreen=no,height=400,width=600,left=100,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no')
}

/**
 * 分享到facebook
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
export const shareToFacebook = ({
  dispatch,
  state
}) => {
  const $info = window.$info
  const _conf = {
    app_id: $info.shareConf.facebook.appid,
    href: encodeURIComponent(window.location.href)
  }
  let s = []
  for (let key in _conf) {
    s.push(key + '=' + encodeURIComponent(_conf[key] || ''))
  }
  const _href = 'https://www.facebook.com/dialog/share?' + s.join('&')
  window.open(_href, 'shareWindow', 'directories=no,fullscreen=no,height=600,width=800,left=100,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no')
}

/**
 * 分享到twitter
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
export const shareToTwitter = ({
  dispatch,
  state
}) => {
  const $info = window.$info
  const _conf = {
    text: '《' + state.shareInfo.title + '》' + substr2(state.shareInfo.description, 50, true),
    url: window.location.href,
    nick: $info.shareConf.twitter.nick
  }
  let s = []
  for (let key in _conf) {
    s.push(key + '=' + encodeURIComponent(_conf[key] || ''))
  }
  const _href = 'https://twitter.com/intent/tweet?' + s.join('&') + 'hashtags=&related=&in-reply-to='
  window.open(_href, 'shareWindow', 'directories=no,fullscreen=no,height=600,width=800,left=100,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no')
}

/**
 * 判断路由方向（前进或后退），并应用对应的过渡效果
 * @param  {[type]} transition [description]
 * @return {[type]}            [description]
 */
export const checkRouterDirection = (transition) => {
  console.log(transition.from, transition.to)
}
// 活动app下载链接
export const setApp = ({
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
  // $.ajax({
  //   url: _port,
  //   type: 'POST',
  //   dateType: 'JSON',
  //   data: {
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

// 获取此时scroll的位置
export const scrollTopPos = () => {
  return $('body').scrollTop()
}

// scroll到指定位置
export const scrollTo = ({
  dispatch,
  state
}, val) => {
  // console.log('scrollTo', val)
  // $('html,body').animate({
  //   scrollTop: val
  // }, 500)
  $('body').scrollTop(val)
}
