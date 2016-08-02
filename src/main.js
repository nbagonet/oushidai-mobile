/*eslint-disable */
// =====
! function (a, b) {
  function c() {
    var c, b = f.getBoundingClientRect().width;
    b / i > 540 && (b = 540 * i), c = b / 10, f.style.fontSize = c + "px", k.rem = a.rem = c
  }
  var d, l, m, n, o, p, q, r, s, t, e = a.document,
    f = e.documentElement,
    g = e.querySelector('meta[name="viewport"]'),
    h = e.querySelector('meta[name="flexible"]'),
    i = 0,
    j = 0,
    k = b.flexible || (b.flexible = {});
  g ? (l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/), l && (j = parseFloat(l[1]), i = parseInt(1 / j))) : h && (m = h.getAttribute("content"), m && (n = m.match(/initial\-dpr=([\d\.]+)/), o = m.match(/maximum\-dpr=([\d\.]+)/), n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2))))), i || j || (p = a.navigator.userAgent, !!p.match(/android/gi), q = !!p.match(/iphone/gi), r = q && !!p.match(/OS 9_3/), s = a.devicePixelRatio, i = q && !r ? s >= 3 && (!i || i >= 3) ? 3 : s >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i), f.setAttribute("data-dpr", i), g || (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild ? f.firstElementChild.appendChild(g) : (t = e.createElement("div"), t.appendChild(g), e.write(t.innerHTML))), a.addEventListener("resize", function () {
    clearTimeout(d), d = setTimeout(c, 300)
  }, !1), a.addEventListener("pageshow", function (a) {
    a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
  }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
    e.body.style.fontSize = 12 * i + "px"
  }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
    var b = parseFloat(a) * this.rem;
    return "string" == typeof a && a.match(/rem$/) && (b += "px"), b
  }, k.px2rem = function (a) {
    var b = parseFloat(a) / this.rem;
    return "string" == typeof a && a.match(/px$/) && (b += "rem"), b
  }
}(window, window.lib || (window.lib = {}));
// =====
/* eslint-enable */

// imports
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import { RouterConf, RouterRedirect } from './router'
import VueValidator from 'vue-validator'
import Resource from 'vue-resource'
import { initMock } from './api/mock'
// import FastClick from 'fastclick'
// import { checkRouterDirection } from './vuex/action'
import $ from '../node_modules/jquery/dist/jquery.slim.js'

// 全局$
window.$ = $

// 开启Vue debug
Vue.config.debug = true
if (!Vue.config.debug) {
  console.log = function () {}
}
Vue.config.devtools = true

// 使用插件
Vue.use(Vuex)
Vue.use(Router)
Vue.use(Resource)
Vue.use(VueValidator)

// 配置resource插件
Vue.http.options.emulateJSON = true

// 初始化fastclick
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body)
//   }, false)
// }

// 初始化Mock
initMock()

// 入口组件
import entrance from './entrance'

// 配置路由 begin
let router = new Router()
router.map(RouterConf)
router.redirect(RouterRedirect)
router.beforeEach(function (transition) {
  if (transition.to.title) {
    document.title = transition.to.title
  }
  transition.next()
  window.scrollTo(0, 0)

  // checkRouterDirection(transition)
})
// router.afterEach(function (transition) {
//   checkRouterDirection(transition)
// })
if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
  // 微信内
  document.addEventListener('WeixinJSBridgeReady', function () {
    router.start(entrance, '#apps')
  })
} else {
  // 非微信内
  router.start(entrance, '#apps')
}
// 配置路由 end

// 过渡效果
Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})

// 注册全局过滤器
import * as _filters from './filter'
for (var key in _filters) {
  Vue.filter(key, _filters[key])
}

/*eslint-disable */
// 配置全局表单验证规则
// email
Vue.validator('email', {
  message: '邮件地址有误，请检查',
  check: function (val) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
  }
})
// 昵称
Vue.validator('nickname', {
  message: '昵称为2-20个半角字符，支持中文、拉丁字母、数字和下划线\'_\'',
  check: function (str) {
    /**
     * 条件：
     * 1. 长度为2-20个半角字符；
     * 2. 允许汉字、拉丁字母、下划线；
     */
    // 非汉字字符表
    var strRules = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŠŸŒàáâãäåæçèéêëìíîïðñòóõôöøùúûüýþšÿœāáǎàōòǒóēéěèêńňīíǐìūúǔùǖǘǚǜüɑɡ1234567890'
    // 汉字正则
    var ChsReg = /[\u2E80-\u9FFF]/
    // 长度范围
    var strLenRange = [2, 20]
    // 将str转为数组
    var strArr = str.split('')
    // 是否合法
    var isLegal = false
    // 计算字符串长度，全角为2
    function byteLength (str) {
      var aMatch = str.match(/[\u4e00-\u9fa5]/g)
      return (str.length + (!aMatch ? 0 : aMatch.length))
    }
    // 验证长度
    function chkLen (testStr) {
      var strLen = byteLength(testStr)
      if (strLen >= strLenRange[0] && strLen <= strLenRange[1]) {
        return true
      } else {
        return false
      }
    }
    // 验证是否为汉字
    function chkHan (testStr) {
      var isHan = ChsReg.test(testStr)
      return isHan
    }
    // 验证是否在非汉字字符表内
    function chkRules (testStr) {
      if (strRules.indexOf(testStr) !== -1) {
        return true
      } else {
        return false
      }
    }
    // 验证长度
    if (chkLen(str)) {
      // 循环验证
      for (var i = 0; i < strArr.length; i++) {
        var tmpStr = strArr[i]
        // 验证是否为汉字
        if (chkHan(tmpStr)) {
          isLegal = true
        } else {
          // 验证是否在非汉字字符表内
          if (chkRules(tmpStr)) {
            isLegal = true
          } else {
            isLegal = false
            break
          }
        }
      }
    } else {
      isLegal = false
    }
    // 返回结果
    return isLegal
  }
})
/* eslint-enable */

// 隐藏cover
// window.onload = function () {
//   document.querySelector('.start-cover').className += ' hidden'
// }
$(function () {
  $('.start-cover').remove()
})
