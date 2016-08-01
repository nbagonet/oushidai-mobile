/**
 * 处理接口返回值
 * @param  {array}    response 接口返回值
 * @param  {function} success  返回成功(error === 1000)时的处理函数，此函数接收一个参数，参数值为接口返回值中的data字段内容
 * @param  {function} failed   返回失败(error !== 1000)时的处理函数，此函数接收2个参数，参数1为errmsg，参数2为error
 */
export function handleResponse (response, success, failed) {
  var d = response.data
  var e = d.error
  var m = d.errmsg
  var r = d.data

  if (Number(e) === 1000) {
    if (typeof success === 'function') {
      success.call(this, r)
    } else {
      console.log(response)
    }
  } else {
    // window.alert('错误: ' + c + '\n' + m)
    // console.log('错误: ' + c + '\n' + m)
    if (typeof failed === 'function') {
      failed.call(this, m, e)
    }
  }
}

/**
 * 控制台输出接口错误
 * @param  {[type]} url     [description]
 * @param  {[type]} code    [description]
 * @param  {[type]} message [description]
 * @return {[type]}         [description]
 */
export function APIError (url, message) {
  console.error('[接口错误]\n接口地址：' + url + '\n错误信息：' + message)
}

/**
 * @description getURLParam：获取url的参数值
 * @param  {String} url   url
 * @param  {String} param 参数名
 * @return {String}       参数值
 */
export function getURLParam (url, param) {
  var r = new RegExp('\\?(?:.+&)?' + param + '=(.*?)(?:&.*)?$')
  var m = url.toString().match(r)
  return m ? m[1] : ''
  // 如果需要处理中文，可以用返回decodeURLComponent(m[1])
}

// /**
//  * @description objURL：url参数操作
//  * @param  {String} url 需要操作的url
//  * @return {Null}
//  */
// export class URL {
//   constructor (url) {
//     this.url = url || window.location.href
//     this.href = '' // ?前面部分
//     this.params = {}
//     this.jing = '' // #及后面部分
//     this.init()
//   }
//   /**
//    * @description init：初始化
//    * @return {Null}
//    */
//   init () {
//     var str = this.url
//     var index = str.indexOf('')
//     if (index > 0) {
//       this.jing = str.substr(index)
//       str = str.substring(0, index)
//     }
//     index = str.indexOf('?')
//     if (index > 0) {
//       this.href = str.substring(0, index)
//       str = str.substr(index + 1)
//       var parts = str.split('&')
//       for (var i = 0; i < parts.length; i++) {
//         var kv = parts[i].split('=')
//         this.params[kv[0]] = kv[1]
//       }
//     } else {
//       this.href = this.url
//       this.params = {}
//     }
//   };

//   *
//    * @description set：新增/修改一个参数值
//    * @param {String} key 参数名
//    * @param {String} val 参数值
//   set (key, val) {
//     this.params[key] = encodeURIComponent(val)
//   };

//   /**
//    * @description remove：移除参数
//    * @param  {String} key 参数名
//    */
//   remove (key) {
//     if (key in this.params) this.params[key] = undefined
//   };

//   /**
//    * @description get：读取一个参数值
//    * @param  {String} key 参数名
//    * @return {String}     参数值
//    */
//   get (key) {
//     return this.params[key]
//   };

//   /**
//    * @description url：获取处理后的url
//    * @return {String}  处理后的url
//    */
//   url () {
//     var strurl = this.href
//     var objps = []
//     for (var k in this.params) {
//       if (this.params[k]) {
//         objps.push(k + '=' + this.params[k])
//       }
//     }
//     if (objps.length > 0) {
//       strurl += '?' + objps.join('&')
//     }
//     if (this.jing.length > 0) {
//       strurl += this.jing
//     }
//     return strurl
//   };
// }
