webpackJsonp([22],{26:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.downloadApp=t.toggleSidemenu=void 0;var n=o(24);t.toggleSidemenu=function(e,t){var o=e.dispatch,n=e.state;if("boolean"!=typeof t){var i=!1;i=!n.sidemenu.show,o("TOGGLE_SIDEMENU",i),o("TOGGLE_LOCK_SCROLL",i)}else o("TOGGLE_SIDEMENU",t),o("TOGGLE_LOCK_SCROLL",t)},t.downloadApp=function(e,t){var o=e.dispatch,i=e.state,s=navigator.userAgent.toLowerCase(),r=!!s.match(/iphone/i),p=!!s.match(/android/i),a=i.apis["app-download"],u=void 0;u=r?"iphone":p?"android":"others",t.$http.post(a,{type:u}).then(function(e){(0,n.handleResponse)(e,function(e){e.link&&o("SET_APP_LINK",e.link)})})}},264:function(e,t,o){"use strict";var n=o(26);e.exports={name:"user-center",vuex:{getters:{stateSidemenu:function(e){return e.sidemenu}},actions:{toggleSidemenu:n.toggleSidemenu}},ready:function(){this.toggleSidemenu(!1)}}},325:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,"",""])},371:function(e,t,o){var n=o(325);"string"==typeof n&&(n=[[e.id,n,""]]);o(7)(n,{});n.locals&&(e.exports=n.locals)},429:function(e,t){e.exports="<div class=user-center><router-view></router-view></div>"},463:function(e,t,o){var n,i;o(371),n=o(264),i=o(429),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}});