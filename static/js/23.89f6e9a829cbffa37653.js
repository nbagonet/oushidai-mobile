webpackJsonp([23,29],{6:function(e,i){"use strict";function t(e,i,t){var n=JSON.parse(e.data),o=n.error,s=n.errmsg,a=n.data;1e3===Number(o)?"function"==typeof i?i.call(this,a):console.log(e):"function"==typeof t&&t.call(this,s,o)}function n(e,i){console.error("[接口错误]\n接口地址："+e+"\n错误信息："+i)}function o(e,i){var t=new RegExp("\\?(?:.+&)?"+i+"=(.*?)(?:&.*)?$"),n=e.toString().match(t);return n?n[1]:""}Object.defineProperty(i,"__esModule",{value:!0}),i.handleResponse=t,i.APIError=n,i.getURLParam=o},25:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.downloadApp=i.toggleSidemenu=void 0;var n=t(6);i.toggleSidemenu=function(e,i){var t=e.dispatch,n=e.state;if("boolean"!=typeof i){var o=!1;o=!n.sidemenu.show,t("TOGGLE_SIDEMENU",o),t("TOGGLE_LOCK_SCROLL",o)}else t("TOGGLE_SIDEMENU",i),t("TOGGLE_LOCK_SCROLL",i)},i.downloadApp=function(e,i){var t=e.dispatch,o=e.state,s=navigator.userAgent.toLowerCase(),a=!!s.match(/iphone/i),r=!!s.match(/android/i),d=o.apis["app-download"],l=void 0;l=a?"iphone":r?"android":"others",i.$http.post(d,{type:l}).then(function(e){(0,n.handleResponse)(e,function(e){e.link&&t("SET_APP_LINK",e.link)})})}},267:function(e,i,t){"use strict";var n=t(25);e.exports={name:"side-menu",vuex:{getters:{local:function(e){return e.local},stateSidemenu:function(e){return e.sidemenu},isLogin:function(e){return e.isLogin},userInfo:function(e){return e.userInfo}},actions:{toggleSidemenu:n.toggleSidemenu,downloadApp:n.downloadApp}},created:function(){this.downloadApp(this)},ready:function(){}}},341:function(e,i,t){i=e.exports=t(7)(),i.push([e.id,".side-menu{pointer-events:none}.side-menu .mask{z-index:2050;opacity:0;left:0}.side-menu .mask,.side-menu .side-menu-body{position:fixed;top:0;right:0;bottom:0;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.side-menu .side-menu-body{font-size:.4375rem;z-index:900;color:#fff;background-image:-webkit-linear-gradient(315deg,#59dcc4,#00bff2);background-image:linear-gradient(135deg,#59dcc4,#00bff2);background-repeat:repeat;width:7.8125rem;height:100%;-webkit-transform:translateX(100%);transform:translateX(100%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-top:.703125rem}.side-menu.show{pointer-events:auto}.side-menu.show .mask{opacity:1}.side-menu.show .side-menu-body{z-index:2100;-webkit-transform:translateX(0);transform:translateX(0);box-shadow:0 0 .3125rem rgba(0,0,0,.3)}.side-menu.show+.page{-webkit-transform:translateX(-7.8125rem);transform:translateX(-7.8125rem)}.side-menu a{color:#fff}.side-menu a:active{color:hsla(0,0%,100%,.65)}.side-menu .category-list{margin-bottom:auto;margin-left:.625rem}.side-menu .category-list li a{display:block}.side-menu .category-list dl{height:1.25rem}.side-menu .category-list dd,.side-menu .category-list dl,.side-menu .category-list dt{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.side-menu .category-list dd,.side-menu .category-list dt{height:100%;border-bottom:1px solid transparent}.side-menu .category-list dt{width:1.5625rem;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.side-menu .category-list dt .font-osd{font-size:.625rem}.side-menu .category-list dd{border-bottom-color:#fff;-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:.625rem}.side-menu .category-list dd strong{font-size:.4375rem;font-weight:400;margin-right:auto}.side-menu .category-list dd .font-osd{font-size:.375rem}.side-menu .help-list{font-size:.40625rem;line-height:2.69230769;text-align:center;margin-bottom:.3125rem}.side-menu .help-list a{display:block}.side-menu .bottom-bar{height:1.25rem;min-height:1.25rem;background-color:#333e42;display:-webkit-box;display:-ms-flexbox;display:flex}.side-menu .bottom-bar li{height:100%;text-align:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.side-menu .bottom-bar li a{display:block;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.side-menu .bottom-bar li .font-osd{font-size:.5625rem}",""])},386:function(e,i,t){var n=t(341);"string"==typeof n&&(n=[[e.id,n,""]]);t(8)(n,{});n.locals&&(e.exports=n.locals)},444:function(e,i){e.exports='<div v-bind:class="{ \'show\': stateSidemenu.show }" class=side-menu><div v-on:click=toggleSidemenu(false) class=mask></div><div class=side-menu-body><ul class=category-list><li v-for="item in stateSidemenu.categoryList" v-if=item.show><a v-link="{ name: item.link, params: item.params }" v-on:click=toggleSidemenu(false)><dl><dt><i v-if=item.icon class="font-osd icon-{{ item.icon }}"></i></dt><dd><strong>{{ item.name }}</strong><i class="font-osd icon-chevronright"></i></dd></dl></a></li><li v-if="!isLogin &amp;&amp; stateSidemenu.showLogin"><a v-link="{ name: \'login\' }" v-on:click=toggleSidemenu(false)><dl><dt><div class="avatar avatar-md avatar-highlight"><div class=pic><img src=http://www.oushidai.com/img/common/avatar.png /></div></div></dt><dd><strong>登录/注册</strong><i class="font-osd icon-chevronright"></i></dd></dl></a></li><li v-if="isLogin &amp;&amp; stateSidemenu.showLogin"><a v-link="{ name: \'user-center\', params: { userId: userInfo.uid } }" v-on:click=toggleSidemenu(false)><dl><dt><div class="avatar avatar-md avatar-highlight"><div class=pic><img v-if=userInfo.avatar v-bind:src=userInfo.avatar /><img v-else=v-else src=http://www.oushidai.com/img/common/avatar.png /></div></div></dt><dd><strong>{{ userInfo.nick }}</strong><i class="font-osd icon-chevronright"></i></dd></dl></a></li></ul><ul class=help-list><li v-for="item in stateSidemenu.helpList" v-if=item.show><a v-link="{ name: item.link, params: item.params }" v-on:click=toggleSidemenu(false)>{{ item.name }}</a></li></ul><ul class=bottom-bar><li v-for="item in stateSidemenu.bottomBar" v-if=item.show><a href="{{ item.link }}" v-on:click=toggleSidemenu(false)><i class="font-osd icon-{{ item.icon }}"></i></a></li></ul></div></div>'},480:function(e,i,t){var n,o;t(386),n=t(267),o=t(444),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)}});