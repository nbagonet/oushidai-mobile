// 加载moment.js
import moment from 'moment'

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
 * @description 格式化一个数字
 * @param  {Number|String} number 数字
 * @return {String}        格式化后的数字
 */
export function formatNum (number) {
  // 规则：
  // 5412 ——XXXX， 1-9999时
  // 10K+ —— XXK+，10000或以上时
  if (number) {
    var _number = Number(number)
    if (_number < 10000) {
      return _number.toString()
    } else if (_number >= 10000) {
      var numTmp = _number.toString()
      var len = numTmp.length
      var start = 0
      var end = len - 3
      return _number.toString().substr(start, end) + 'K+'
    }
  }
}

/**
 * 格式化时间
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
export function formatDateTime (time) {
  // 时间显示格式：
  // 刚刚 —— 1小时内
  // 今天
  // 昨天
  // 前天
  // 05/31 —— 月/日，前天之前，而且当年情况下
  // 2014/09 —— 年/月，前一年及以前
  // 2015-11-20添加
  // 明天
  // 后天
  // N天后

  // 设置本地化语言
  moment.locale('zh-cn')

  // 日期和时间
  // 默认服务器时间为'Europe/Paris'，将其转换为本地时间
  // timezone.add(timezone_meta.zones)

  // var serverTime = timezone(time, 'Europe/Paris')
  // var localTZ = timezone.guess()
  // var localTime = serverTime.clone().tz(localTZ).format('YYYY-MM-DD HH:mm:ss')
  var timeObj = moment(time)
  // console.log(timeObj)

  // 对比单位
  // 刚刚：1小时前
  var recently = moment().subtract(1, 'hour')
  // 今天
  var today = moment()
  // 昨天
  var yestoday = moment().subtract(1, 'days')
  // 前天
  var twoDaysAgo = moment().subtract(2, 'days')
  // 大前天
  var threeDaysAgo = moment().subtract(3, 'days')
  // 当年
  var thisYear = moment().year()
  // 一年之前
  var past = thisYear - 1
  // 明天
  var tomorrow = moment().add(1, 'days')
  // 后天
  var dayAfterTomorrow = moment().add(2, 'days')
  // 大于后天的就是N天后

  // 判断条件
  // 是否是一年之前：参数time是否在一年前的此时之前
  var isPast = timeObj.isBefore(past + '-12-31 23:59:59', 'second')
  // 是否是当年
  var isThisYear = timeObj.isBetween(thisYear + '-01-01 00:00:00', threeDaysAgo.format('YYYY-MM-DD') + ' 23:59:59')
  // 是否是前天
  var isTwoDaysAgo = timeObj.isBetween(twoDaysAgo.format('YYYY-MM-DD') + ' 00:00:00', twoDaysAgo.format('YYYY-MM-DD') + ' 23:59:59')
  // 是否是昨天
  var isYestoday = timeObj.isBetween(yestoday.format('YYYY-MM-DD') + ' 00:00:00', yestoday.format('YYYY-MM-DD') + ' 23:59:59')
  // 是否是今天（不包含最近的1小时之内）
  var isToday = timeObj.isBetween(today.format('YYYY-MM-DD') + ' 00:00:00', recently)
  // 是否是明天
  var isTomorrow = timeObj.isBetween(tomorrow.format('YYYY-MM-DD') + ' 00:00:00', tomorrow.format('YYYY-MM-DD' + ' 23:59:59'))
  // 是否是后天
  var isDayAfterTomorrow = timeObj.isBetween(dayAfterTomorrow.format('YYYY-MM-DD') + ' 00:00:00', dayAfterTomorrow.format('YYYY-MM-DD' + ' 23:59:59'))
  // 是否是N天之后
  var isNDaysAfter = timeObj.isAfter(dayAfterTomorrow.format('YYYY-MM-DD' + ' 23:59:59'))

  // 开始对比
  var _result = ''
  if (isPast) {
    // 一年之前
    _result = timeObj.format('YYYY-MM')
  } else if (isThisYear) {
    // 当年
    _result = timeObj.format('MM-DD')
  } else if (isTwoDaysAgo) {
    // 前天
    _result = '前天'
  } else if (isYestoday) {
    // 昨天
    _result = '昨天'
  } else if (isToday) {
    // 今天
    _result = '今天'
  } else if (isTomorrow) {
    // 明天
    _result = '明天'
  } else if (isDayAfterTomorrow) {
    // 后天
    _result = '后天'
  } else if (isNDaysAfter) {
    // N天后，这里要计算N的值
    _result = timeObj.diff(today, 'days') + '天后'
  } else {
    // 刚刚
    _result = '刚刚'
  }

  return _result
}

/**
 * 优化正文内容
 * @param  {String} html 正文html代码
 * @return {String}      优化后的正文html代码
 */
// import $ from 'jquery'
export function optimizeContent (html) {
  const $ = window.$
  let newHtml = ''

  if (html) {
    // 清除空的section
    $('body').append('<div id="content_tmp"></div>')
    $('#content_tmp').html(html)
    $('#content_tmp').find('section').each(function (index, el) {
      if ($(this).html().length <= 0) {
        $(this).remove()
      }
    })

    newHtml = $('#content_tmp').html()
    $('#content_tmp').remove()
  } else {
    newHtml = html
  }

  return newHtml
}

/**
 * 支持汉字的字符串截取
 * @param  {String} str      字符串
 * @param  {Number} length   字符数(半角)
 * @param  {Boolen} ellipsis 是否显示省略号
 * @return {String}          截取后的字符串
 */
export function substr2 (str, length, ellipsis) {
  if (str) {
    var s = str.replace(/([^\x00-\xff])/g, '\x00$1')
    var e = ellipsis ? '…' : ''
    return (s.length < length) ? str : s.substring(0, length).replace(/\x00/g, '') + e
  } else {
    return str
  }
}

/**
 * 字符串转数字
 * @param  {String} str 需要转换的字符串
 * @return {Number}     转换后的数字
 */
export function strToNumber (str) {
  return Number(str)
}

/**
 * 将国家简写转换为汉字
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export function coverLocationName (name) {
  const _contrast = {
    eu: '全欧',
    fr: '法国',
    gb: '英国',
    de: '德国',
    it: '意大利',
    at: '奥地利'
  }
  for (var key in _contrast) {
    if (key === name) {
      return _contrast[key]
    }
  }
}

/**
 * 过滤html标签
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
export function removeHTMLTag (str) {
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
 * 转换日期格式，形如：“十一月 20”
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
export const coverDate = (time) => {
  // 设置本地化语言
  moment.locale('zh-cn')
  // 转换参数
  var timeObj = moment(time)
  // 月份
  var month = timeObj.format('MM')
  // 日期
  var dofm = timeObj.format('DD')
  // 返回
  return '<strong>' + month + '月</strong><small>' + dofm + '</small>'
}

/**
 * 获取日期中的月份
 * @param  {[type]} datetime [description]
 * @return {[type]}      [description]
 */
export const getMonth = (datetime) => {
  if (datetime) {
    let dateStr = datetime.split(' ')[0]
    let monStr = dateStr.split('-')[1]
    return monStr
  }
}

/**
 * 获取日期中的日期
 * @param  {[type]} datetime [description]
 * @return {[type]}      [description]
 */
export const getDay = (datetime) => {
  if (datetime) {
    let dateStr = datetime.split(' ')[0]
    let day = dateStr.split('-')[1]
    return day
  }
}
