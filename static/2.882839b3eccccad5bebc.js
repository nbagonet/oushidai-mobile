webpackJsonp([2],{10:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.bindScroll=t.toggleFixed=t.showSidebarMenuBtn=t.setBreadcrumbs=void 0;var i=n(25),r=o(i),a=(t.setBreadcrumbs=function(e,t){var n=e.dispatch;e.state;n("SET_BREADCRUMBS_INFO",t)},t.showSidebarMenuBtn=function(e,t){var n=e.dispatch;e.state;"boolean"==typeof t&&n("TOGGLE_SIDEBAR_MENU_BTN",t)},t.toggleFixed=function(e,t){var n=e.dispatch;e.state;"boolean"==typeof t&&n("TOGGLE_TOPBAR_FIXED",t)});t.bindScroll=function(e){var t=e.dispatch,n=e.state,o=(0,r["default"])(window).scrollTop(),i=document.querySelector(".topbar").clientHeight+10;(0,r["default"])(window).on("scroll.fixTopbar",function(e){var s=(0,r["default"])("body").height(),u=window.screen.availHeight,d=document.body.scrollTop||document.documentElement.scrollTop;i>=d?a({dispatch:t,state:n},!1):d>o||d+u>=s?a({dispatch:t,state:n},!1):a({dispatch:t,state:n},!0),o=d})}},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.downloadApp=t.toggleSidemenu=void 0;var o=n(24);t.toggleSidemenu=function(e,t){var n=e.dispatch,o=e.state;if("boolean"!=typeof t){var i=!1;i=!o.sidemenu.show,n("TOGGLE_SIDEMENU",i),n("TOGGLE_LOCK_SCROLL",i)}else n("TOGGLE_SIDEMENU",t),n("TOGGLE_LOCK_SCROLL",t)},t.downloadApp=function(e,t){var n=e.dispatch,i=e.state,r=navigator.userAgent.toLowerCase(),a=!!r.match(/iphone/i),s=!!r.match(/android/i),u=i.apis["app-download"],d=void 0;d=a?"iphone":s?"android":"others",t.$http.post(u,{type:d}).then(function(e){(0,o.handleResponse)(e,function(e){e.link&&n("SET_APP_LINK",e.link)})})}},43:function(e,t,n){var o,i;n(359),o=n(252),i=n(417),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initUserBanner=t.resetUserBanner=t.setShareConf=void 0;var o=n(24),i=n(28),r=t.setShareConf=function(e){var t=e.dispatch,n=e.state;(0,i.setWeixinShare)({dispatch:t,state:n})},a=function(e,t){var n=e.dispatch,i=e.state,a="";"writer"===t.type||"mediaOrg"===t.type?a=i.apis["author-info"]:"eventOrg"===t.type&&(a=i.apis["activity-org-info"]);var s={type:t.type,id:t.userid,userId:t.userid};n("GLOBAL_LOADING",!0),t.$http.get(a,s).then(function(e){(0,o.handleResponse)(e,function(e){n("SET_USER_DATA",e),n("GLOBAL_LOADING",!1),n("SET_SHARE_INFO",{title:e.name,description:e.intro,image:e.avatar}),r({dispatch:n,state:i})},function(e,t){(0,o.APIError)(a,e),n("GLOBAL_LOADING",!1)})},function(e){window.alert("用户信息数据获取失败，请稍后重试"),n("GLOBAL_LOADING",!1)})};t.resetUserBanner=function(e){var t=e.dispatch;e.state;t("RESET_USER_DATA")},t.initUserBanner=function(e,t){var n=e.dispatch,o=e.state;a({dispatch:n,state:o},t)}},252:function(e,t,n){"use strict";var o=n(26),i=n(10),r=n(45);e.exports={name:"org-center",vuex:{getters:{stateSidemenu:function(e){return e.sidemenu},loading:function(e){return e.loading},userInfo:function(e){return e.userBanner}},actions:{toggleSidemenu:o.toggleSidemenu,setBreadcrumbs:i.setBreadcrumbs,resetUserBanner:r.resetUserBanner}},components:{topheader:function(e){n.e(30,function(t){var n=[t(30)];e.apply(null,n)}.bind(this))},"user-banner":function(e){n.e(46,function(t){var n=[t(461)];e.apply(null,n)}.bind(this))},"org-center-navbar":function(e){n.e(48,function(t){var n=[t(454)];e.apply(null,n)}.bind(this))}},route:{activate:function(e){this.loading||e.next()}},ready:function(){this.toggleSidemenu(!1),this.setBreadcrumbs(this.$route.breadcrumbs)}}},313:function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"",""])},359:function(e,t,n){var o=n(313);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)},417:function(e,t){e.exports="<div class=org-center><topheader v-bind:type=\"$route.name.split('-')[0]\" v-bind:info=userInfo></topheader><user-banner v-bind:type=\"$route.name.split('-')[0]\" v-bind:userid=$route.params.id></user-banner><org-center-navbar v-bind:type=$route.name v-bind:info=userInfo></org-center-navbar><router-view v-bind:type=\"$route.name.split('-')[0]\" v-bind:info=userInfo></router-view></div>"}});