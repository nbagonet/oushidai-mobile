webpackJsonp([11,29],{6:function(t,i){"use strict";function e(t,i,e){var a=JSON.parse(t.data),n=a.error,o=a.errmsg,c=a.data;1e3===Number(n)?"function"==typeof i?i.call(this,c):console.log(t):"function"==typeof e&&e.call(this,o,n)}function a(t,i){console.error("[接口错误]\n接口地址："+t+"\n错误信息："+i)}function n(t,i){var e=new RegExp("\\?(?:.+&)?"+i+"=(.*?)(?:&.*)?$"),a=t.toString().match(e);return a?a[1]:""}Object.defineProperty(i,"__esModule",{value:!0}),i.handleResponse=e,i.APIError=a,i.getURLParam=n},24:function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=window.$,a=(i.setBreadcrumbs=function(t,i){var e=t.dispatch;t.state;e("SET_BREADCRUMBS_INFO",i)},i.showSidebarMenuBtn=function(t,i){var e=t.dispatch;t.state;"boolean"==typeof i?e("TOGGLE_SIDEBAR_MENU_BTN",i):console.error("参数应为boolen，请检查")},i.toggleFixed=function(t,i){var e=t.dispatch;t.state;"boolean"==typeof i?e("TOGGLE_TOPBAR_FIXED",i):console.error("参数应为boolen，请检查")});i.bindScroll=function(t){var i=t.dispatch,n=t.state,o=e(window).scrollTop(),c=document.querySelector(".topbar").clientHeight+10;e(window).on("scroll.fixTopbar",function(t){var r=e("body").height(),s=window.screen.availHeight,l=document.body.scrollTop||document.documentElement.scrollTop;l<=c?a({dispatch:i,state:n},!1):o<l||l+s>=r?a({dispatch:i,state:n},!1):a({dispatch:i,state:n},!0),o=l})}},26:function(t,i,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0}),i.scrollTo=i.scrollTopPos=i.setApp=i.checkRouterDirection=i.shareToTwitter=i.shareToFacebook=i.shareToQZone=i.shareToWeibo=i.setWeixinShare=i.checkInWeiXin=i.loadLocation=i.toggleLockScroll=i.removeHTMLTag=i.setShareInfo=i.getStringLength=void 0;var n=e(27),o=a(n),c=e(28),r=e(6),s=window.$;i.getStringLength=function(t){if("undefined"==typeof t)return 0;var i=t.match(/[\u4e00-\u9fa5]/g);return t.length+(i?i.length:0)},i.setShareInfo=function(t,i){var e=t.dispatch;t.state;e("SET_SHARE_INFO",i)},i.removeHTMLTag=function(t){return t=t.replace(/<\/?[^>]*>/g,""),t=t.replace(/&nbsp;/gi,"")},i.toggleLockScroll=function(t,i){var e=t.dispatch;t.state;e("TOGGLE_LOCK_SCROLL",i)},i.loadLocation=function(t){var i=t.dispatch,e=(t.state,"eu");o["default"].get("location")&&(e=o["default"].get("location")),i("SET_LOCAL",e)},i.checkInWeiXin=function(t){var i=t.dispatch;t.state;navigator.userAgent.toLowerCase().indexOf("micromessenger")!==-1?i("IN_WEIXIN",!0):i("IN_WEIXIN",!1)},i.setWeixinShare=function(t){var i=(t.dispatch,t.state),e=window.$info;window.wx.config({debug:!1,appId:e.shareConf.weixin.appId,timestamp:e.shareConf.weixin.timestamp,nonceStr:e.shareConf.weixin.nonceStr,signature:e.shareConf.weixin.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]}),window.wx.onMenuShareTimeline({title:i.shareInfo.title,link:window.location.href,imgUrl:i.shareInfo.image,success:function(){},cancel:function(){}}),window.wx.onMenuShareAppMessage({title:i.shareInfo.title,link:window.location.href,desc:i.shareInfo.description,imgUrl:i.shareInfo.image,type:"link",dataUrl:"",success:function(){},cancel:function(){}})},i.shareToWeibo=function(t){var i=(t.dispatch,t.state),e=window.$info,a=function(){for(var t="",e=0;e<i.shareInfo.tags.length;e++)t+="#"+i.shareInfo.tags[e].tag+"#";return t},n=(0,c.substr2)(i.shareInfo.description,100,!0),o={url:encodeURIComponent(window.location.href),appkey:e.shareConf.weibo.appkey,title:encodeURIComponent("《"+i.shareInfo.title+"》"+a()+n),ralateUid:e.shareConf.weibo.ralateUid,pic:encodeURIComponent(i.shareInfo.image),lang:"zh_cn"},r="http://service.weibo.com/share/share.php?url="+o.url+"&appkey="+o.appkey+"&title="+o.title+"&pic="+o.pic+"&ralateUid="+o.ralateUid+"&language="+o.lang+"&searchPic=true";window.open(r,"shareWindow","directories=no,fullscreen=no,height=600,width=800,left=100,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no")},i.shareToQZone=function(t){var i=(t.dispatch,t.state),e=window.$info,a={url:window.location.href,showcount:"0",desc:"",summary:(0,c.substr2)(i.shareInfo.description,100,!0),title:i.shareInfo.title,site:e.shareConf.qzone.site,pics:i.shareInfo.image,style:"203",width:22,height:22},n=[];for(var o in a)n.push(o+"="+encodeURIComponent(a[o]||""));var r="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+n.join("&");window.open(r,"shareWindow","directories=no,fullscreen=no,height=400,width=600,left=100,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no")},i.shareToFacebook=function(t){var i=(t.dispatch,t.state,window.$info),e={app_id:i.shareConf.facebook.appid,href:encodeURIComponent(window.location.href)},a=[];for(var n in e)a.push(n+"="+encodeURIComponent(e[n]||""));var o="https://www.facebook.com/dialog/share?"+a.join("&");window.open(o,"shareWindow","directories=no,fullscreen=no,height=600,width=800,left=100,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no")},i.shareToTwitter=function(t){var i=(t.dispatch,t.state),e=window.$info,a={text:"《"+i.shareInfo.title+"》"+(0,c.substr2)(i.shareInfo.description,50,!0),url:window.location.href,nick:e.shareConf.twitter.nick},n=[];for(var o in a)n.push(o+"="+encodeURIComponent(a[o]||""));var r="https://twitter.com/intent/tweet?"+n.join("&")+"hashtags=&related=&in-reply-to=";window.open(r,"shareWindow","directories=no,fullscreen=no,height=600,width=800,left=100,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,toolbar=no")},i.checkRouterDirection=function(t){console.log(t.from,t.to)},i.setApp=function(t,i){var e=t.dispatch,a=t.state,n=navigator.userAgent.toLowerCase(),o=!!n.match(/iphone/i),c=!!n.match(/android/i),s=a.apis["app-download"],l=void 0;l=o?"iphone":c?"android":"others",i.$http.post(s,{type:l}).then(function(t){(0,r.handleResponse)(t,function(t){t.link&&e("SET_APP_LINK",t.link)})})},i.scrollTopPos=function(){return s("body").scrollTop()},i.scrollTo=function(t,i){t.dispatch,t.state;s("body").scrollTop(i)}},27:function(t,i,e){var a,n,o;(function(e){"use strict";!function(e,c){n=[],a=c,o="function"==typeof a?a.apply(i,n):a,!(void 0!==o&&(t.exports=o))}(this,function(){function t(){try{return c in n&&n[c]}catch(t){return!1}}var i,a={},n="undefined"!=typeof window?window:e,o=n.document,c="localStorage",r="script";if(a.disabled=!1,a.version="1.3.20",a.set=function(t,i){},a.get=function(t,i){},a.has=function(t){return void 0!==a.get(t)},a.remove=function(t){},a.clear=function(){},a.transact=function(t,i,e){null==e&&(e=i,i=null),null==i&&(i={});var n=a.get(t,i);e(n),a.set(t,n)},a.getAll=function(){},a.forEach=function(){},a.serialize=function(t){return JSON.stringify(t)},a.deserialize=function(t){if("string"==typeof t)try{return JSON.parse(t)}catch(i){return t||void 0}},t())i=n[c],a.set=function(t,e){return void 0===e?a.remove(t):(i.setItem(t,a.serialize(e)),e)},a.get=function(t,e){var n=a.deserialize(i.getItem(t));return void 0===n?e:n},a.remove=function(t){i.removeItem(t)},a.clear=function(){i.clear()},a.getAll=function(){var t={};return a.forEach(function(i,e){t[i]=e}),t},a.forEach=function(t){for(var e=0;e<i.length;e++){var n=i.key(e);t(n,a.get(n))}};else if(o&&o.documentElement.addBehavior){var s,l;try{l=new ActiveXObject("htmlfile"),l.open(),l.write("<"+r+">document.w=window</"+r+'><iframe src="/favicon.ico"></iframe>'),l.close(),s=l.w.frames[0].document,i=s.createElement("div")}catch(v){i=o.createElement("div"),s=o.body}var d=function(t){return function(){var e=Array.prototype.slice.call(arguments,0);e.unshift(i),s.appendChild(i),i.addBehavior("#default#userData"),i.load(c);var n=t.apply(a,e);return s.removeChild(i),n}},f=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),p=function(t){return t.replace(/^d/,"___$&").replace(f,"___")};a.set=d(function(t,i,e){return i=p(i),void 0===e?a.remove(i):(t.setAttribute(i,a.serialize(e)),t.save(c),e)}),a.get=d(function(t,i,e){i=p(i);var n=a.deserialize(t.getAttribute(i));return void 0===n?e:n}),a.remove=d(function(t,i){i=p(i),t.removeAttribute(i),t.save(c)}),a.clear=d(function(t){var i=t.XMLDocument.documentElement.attributes;t.load(c);for(var e=i.length-1;e>=0;e--)t.removeAttribute(i[e].name);t.save(c)}),a.getAll=function(t){var i={};return a.forEach(function(t,e){i[t]=e}),i},a.forEach=d(function(t,i){for(var e,n=t.XMLDocument.documentElement.attributes,o=0;e=n[o];++o)i(e.name,a.deserialize(t.getAttribute(e.name)))})}try{var m="__storejs__";a.set(m,m),a.get(m)!=m&&(a.disabled=!0),a.remove(m)}catch(v){a.disabled=!0}return a.enabled=!a.disabled,a})}).call(i,function(){return this}())},176:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.setActivityMap=i.setExpandItem=i.setActivityInfoContent=i.resetActivityView=i.initActivityView=i.setShareConf=void 0;var a=e(6),n=e(26),o=window.$,c=function(t,i){var e=t.dispatch,o=t.state,c=i.$route.params.id,v=o.apis["activity-content"],d={id:c};e("GLOBAL_LOADING",!0),e("SET_EVENT_AUTHOR_INFO",""),e("SET_EVENT_VIEW_RELEATED_LIST_CONFIG",{type:o.activityView.releatedListConfig.type,number:o.activityView.releatedListConfig.number,list:[]}),i.$http.get(v,d).then(function(t){(0,a.handleResponse)(t,function(t){e("SET_EVENT_CONTENT",t),e("SET_TOPHEADER_CONFIG",{backLink:"activity",prev:{link:"activity-view",id:t.prev.id},next:{link:"activity-view",id:t.next.id}}),e("GLOBAL_LOADING",!1),r({dispatch:e,state:o},i),s({dispatch:e,state:o},i),e("SET_EVENT_VIEW_BOTTOM_TOOLBAR_CONFIG",t),e("SET_SHARE_INFO",{title:t.title,description:(0,n.removeHTMLTag)(t.description),image:t.cover,tags:function(){for(var i=[],e=0;e<t.tags.length;e++)i.push(t.tags[e]);return i}}),l({dispatch:e,state:o})},function(t,i){(0,a.APIError)(v,t),e("GLOBAL_LOADING",!1),e("IS_EVENT_VIEW_ERROR",!0)})},function(t){window.alert("资讯内容数据获取失败，请稍后重试"),e("GLOBAL_LOADING",!1),e("IS_EVENT_VIEW_ERROR",!0)})},r=function(t,i){var e=t.dispatch,n=t.state,o=n.apis["activity-org-info"],c={userId:"",type:n.activityView.activityData.data.author.type,id:n.activityView.activityData.data.author.uid};e("GLOBAL_LOADING",!0),i.$http.get(o,c).then(function(t){(0,a.handleResponse)(t,function(t){e("SET_EVENT_AUTHOR_INFO",t),e("GLOBAL_LOADING",!1)},function(t,i){(0,a.APIError)(o,t),e("GLOBAL_LOADING",!1)})},function(t){window.alert("活动发布者详情数据获取失败，请稍后重试"),e("GLOBAL_LOADING",!1)})},s=function(t,i){t.dispatch,t.state},l=i.setShareConf=function(t){var i=t.dispatch,e=t.state;(0,n.setWeixinShare)({dispatch:i,state:e})};i.initActivityView=function(t,i){var e=t.dispatch,a=t.state;c({dispatch:e,state:a},i)},i.resetActivityView=function(t,i){var e=t.dispatch;t.state;e("RESET_EVENT_VIEW_STATE")},i.setActivityInfoContent=function(t,i){var e=t.dispatch;t.state;e("SET_ACTIVITY_INFO_CONTENT",i),o(window).scrollTop(o(".info-content").offset().top)},i.setExpandItem=function(t,i){var e=t.dispatch,a=t.state;a.activityView.expandItem===i?e("SET_EXPAND_ITEM",-1):e("SET_EXPAND_ITEM",i)},i.setActivityMap=function(t,i){var e=t.dispatch;t.state;e("SET_ACTIVITY_MAP",i)}},235:function(t,i,e){"use strict";var a=e(24),n=e(176),o=e(26);t.exports={name:"activity-view",vuex:{getters:{topheaderConfig:function(t){return t.activityView.topheaderConfig},bottomToolbarConfig:function(t){return t.activityView.bottomToolbarConfig},releatedListConfig:function(t){return t.activityView.releatedListConfig},isError:function(t){return t.activityView.isError},isLoading:function(t){return t.loading},activityData:function(t){return t.activityView.activityData.data},breadcrumbs:function(t){return t.topbar.breadcrumbs},authorInfo:function(t){return t.activityView.authorInfo},activeInfoContent:function(t){return t.activityView.activeInfoContent},expandItem:function(t){return t.activityView.expandItem}},actions:{setBreadcrumbs:a.setBreadcrumbs,initActivityView:n.initActivityView,resetActivityView:n.resetActivityView,getStringLength:o.getStringLength,setActivityInfoContent:n.setActivityInfoContent,setExpandItem:n.setExpandItem}},components:{topheader:function(t){e.e(32,function(i){var e=[i(31)];t.apply(null,e)}.bind(this))},loading:function(t){e.e(0,function(i){var e=[i(30)];t.apply(null,e)}.bind(this))},"user-info-block":function(t){e.e(38,function(i){var e=[i(168)];t.apply(null,e)}.bind(this))},"releated-list":function(t){e.e(37,function(i){var e=[i(166)];t.apply(null,e)}.bind(this))},toolbar:function(t){e.e(35,function(i){var e=[i(167)];t.apply(null,e)}.bind(this))}},route:{canReuse:!1},ready:function(){this.resetActivityView(),this.initActivityView(this),this.setBreadcrumbs(this.$route.breadcrumbs)}}},309:function(t,i,e){i=t.exports=e(7)(),i.push([t.id,".activity-view{min-height:100vh;padding-bottom:2.34375rem}.activity-view .error{font-size:.46875rem;line-height:1.7;min-height:100vh;text-align:center;color:#2b3f45;position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0;padding-right:.46875rem;padding-left:.46875rem}.activity-view .error a{color:#00cdd7}.activity-view .content{color:#516167;background-color:#fff;box-shadow:0 .015625rem .0625rem 0 rgba(0,0,0,.15);margin-bottom:.234375rem}.activity-view .content .cover{position:relative;overflow:hidden}.activity-view .content .tags{z-index:100;position:absolute;top:.3125rem;left:.3125rem}.activity-view .content .pic{overflow:hidden;width:100%;min-height:1.5625rem}.activity-view .content .pic img,.activity-view .content .pic video{display:block;width:100%}.activity-view .content .title-bar{position:relative;margin-top:.546875rem;display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:.3125rem}.activity-view .content .title-bar .author-avatar{-webkit-box-flex:0;-ms-flex:none;flex:none;padding-right:.3125rem;padding-left:.625rem}.activity-view .content .title-bar h1{font-size:.59375rem;font-weight:400;line-height:1.15789474;word-wrap:break-word;word-break:break-all;margin:0;-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:.625rem}.activity-view .content .title-attr{color:#acb9bd;margin-right:.625rem;margin-left:.625rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:.15625rem}.activity-view .content .title-attr>div{font-size:.3125rem}.activity-view .content .title-attr .author{color:#6b8088;margin-right:.3em}.activity-view .content .title-attr .author a{color:#6b8088}.activity-view .content .title-attr .author a:active{color:#00e6e8}.activity-view .content .title-attr .time{padding-right:.3125rem;margin-right:auto}.activity-view .content .title-attr .time:before{content:'\\B7';margin-right:.3em}.activity-view .content .title-attr .count-like,.activity-view .content .title-attr .count-pv{margin-right:.3125rem}.activity-view .content .title-attr .count-comments,.activity-view .content .title-attr .count-like,.activity-view .content .title-attr .count-pv{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.activity-view .content .title-attr .count-comments .icon-like,.activity-view .content .title-attr .count-like .icon-like,.activity-view .content .title-attr .count-pv .icon-like{margin-top:.1em}.activity-view .content .title-attr .count-comments span,.activity-view .content .title-attr .count-like span,.activity-view .content .title-attr .count-pv span{margin-left:.3em}.activity-view .releated-list-block{padding-bottom:1.796875rem}.activity-view .main-content{padding:.625rem}.activity-view .main-content .main-item-1{border-bottom:1px solid #e3e2e1;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding-top:.234375rem;padding-bottom:.234375rem}.activity-view .main-content .main-item-1.expand>strong>.avatar-list,.activity-view .main-content .main-item-1.expand>strong>div{height:auto}.activity-view .main-content .main-item-1.expand>em{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.activity-view .main-content .main-item-1,.activity-view .main-content .main-item-1 a{color:#5f5d5d;-webkit-transition:all .2s ease;transition:all .2s ease}.activity-view .main-content .main-item-1 a:active,.activity-view .main-content .main-item-1:active{color:#00e6e8}.activity-view .main-content .main-item-1>em,.activity-view .main-content .main-item-1>span,.activity-view .main-content .main-item-1>strong{-webkit-transition:all .2s ease;transition:all .2s ease}.activity-view .main-content .main-item-1>span{font-size:.625rem;color:#464646;margin-right:.3125rem}.activity-view .main-content .main-item-1>strong{font-size:.375rem;font-weight:300;line-height:.625rem;max-width:6.5625rem;margin-right:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.activity-view .main-content .main-item-1>strong+span{border-left:1px solid #e3e9ea;padding-left:.3125rem}.activity-view .main-content .main-item-1>strong>div{overflow:hidden;height:.625rem}.activity-view .main-content .main-item-1>strong>div .avatar{width:.625rem;height:.625rem;margin-right:.3125rem}.activity-view .main-content .main-item-1>strong>i.font-osd{margin-right:.5em;margin-left:.5em}.activity-view .main-content .main-item-1>em{font-size:.5625rem;padding-right:.15625rem;padding-left:.15625rem}.activity-view .main-content .main-item-1>em,.activity-view .main-content .main-item-1>em a{color:#aaa}.activity-view .main-content .main-item-1>em:active,.activity-view .main-content .main-item-1>em a:active{color:#00e6e8}.activity-view .info-content{color:#516167;background-color:#fff;box-shadow:0 .015625rem .0625rem 0 rgba(0,0,0,.15)}.activity-view .info-content .info-tab{font-size:.5rem;color:#acaaaa;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-right:.625rem;margin-left:.625rem;padding-top:.125rem}.activity-view .info-content .info-tab>li{position:relative;white-space:nowrap;border-bottom:1px solid #c7c6c5;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-transition:all .2s ease;transition:all .2s ease}.activity-view .info-content .info-tab>li:after{z-index:1;overflow:hidden;height:0;content:'';position:absolute;right:0;bottom:-1px;left:0;-webkit-transition:all .2s ease;transition:all .2s ease}.activity-view .info-content .info-tab>li span{height:1.25rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.activity-view .info-content .info-tab>li.active{color:#464646}.activity-view .info-content .info-tab>li.active:after{height:.09375rem;background-color:#00e6e8}.activity-view .info-content .info-con{font-size:.40625rem;line-height:1.46153846;overflow-x:hidden;text-align:justify;word-wrap:break-word;word-break:break-all;color:#464646;padding:.46875rem .625rem .625rem}.activity-view .info-content .info-con li>strong{white-space:nowrap;float:left}.activity-view .info-content .info-con li>span{display:block;margin-left:1.25rem;word-wrap:break-word;word-break:break-all}.activity-view .info-content .info-con li>span a{color:#00cdd7}.activity-view .info-content .info-con p{margin-bottom:1em}.activity-view .info-content .info-con img{display:block;max-width:100%;height:auto!important}.activity-view .author-info-block{background-color:#fff;padding-right:.625rem;padding-left:.625rem;margin-top:.234375rem;box-shadow:0 .015625rem .0625rem rgba(0,0,0,.15)}#detail-tail .title{display:inline-block;font-size:.5rem;border-bottom:.09375rem solid #00e6e8}#detail-tail .detail,#detail-tail .detail-info{margin-top:.15625rem}",""])},354:function(t,i,e){var a=e(309);"string"==typeof a&&(a=[[t.id,a,""]]);e(8)(a,{});a.locals&&(t.exports=a.locals)},412:function(t,i){t.exports='<div class=activity-view><topheader v-if=!isError v-bind:config=topheaderConfig></topheader><div v-if="isError &amp;&amp; !isLoading" class=error><p>读取资讯数据失败或指定的资讯数据不存在<br/>请<a href=javascript:history.back()>返回</a>并重试</p></div><div v-if="!isError &amp;&amp; !isLoading &amp;&amp; activityData" class="content animated"><div class=cover><div class=tags><a href=javascript:void(0) v-for="tag in activityData.tags" data-id=tag.id class="tag white-nb"><span>{{ tag.tag }}</span></a></div><div class="pic inset-shadow-l"><img v-bind:src=activityData.cover /></div><div class=activity-info><ul class=activity-date><li v-if=activityData.info[0].time.start>{{{ activityData.info[0].time.start | coverDate }}}</li><li v-if="activityData.info[0].time.end &amp;&amp; activityData.info[0].time.start.split(\' \')[0] !== activityData.info[0].time.end.split(\' \')[0]">{{{ activityData.info[0].time.end | coverDate }}}</li></ul><div class=activity-pandc><div v-bind:class="{ \'equally\': activityData.info[0].price_type === \'aa\', \'others\': activityData.info[0].price_type === \'other\', \'free\': activityData.info[0].price === \'\' &amp;&amp; activityData.info[0].price_type !== \'aa\' &amp;&amp; activityData.info[0].price_type !== \'other\' }" class=activity-price><span v-if="activityData.info[0].price_type === \'aa\'">平摊费用</span><span v-if="activityData.info[0].price_type === \'other\'">其他</span><span v-if="activityData.info[0].price === \'\' &amp;&amp; activityData.info[0].price_type !== \'aa\' &amp;&amp; activityData.info[0].price_type !== \'other\'">免费</span><span v-if="activityData.info[0].price_type !== \'aa\' &amp;&amp; activityData.info[0].price_type !== \'other\' &amp;&amp; activityData.info[0].price !== \'\'"><strong>{{ activityData.info[0].price }}</strong><small>€</small></span></div><div class=activity-city><i class="font-osd icon-lbsmark"></i><span>{{ activityData.info[0].city }}</span></div></div></div></div><div class=title-bar><div class=author-avatar><a v-link="{ name: activityData.author.type, params: { id: activityData.author.uid }}" class="avatar avatar-md"><img v-bind:src=activityData.author.avatar /></a></div><h1>{{{ activityData.title }}}</h1></div><div class=title-attr><div class=author><a v-link="{ name: activityData.author.type, params: { id: activityData.author.uid }}">@{{ activityData.author.name }}</a></div><div class=time>{{ activityData.pub_time | formatDateTime }}</div></div><div class=main-content><div v-if=activityData.author.name class=main-item-1><span><i class="font-osd icon-usersuit"></i></span><strong><div>{{ activityData.author.name }}</div></strong></div><div v-if="activityData.info[0].time.start &amp;&amp; activityData.info[0].time.end" v-bind:class="{ \'expand\': expandItem === 1 }" class=main-item-1><span><i class="font-osd icon-clock"></i></span><strong v-on:click=setExpandItem(1)><div>{{ activityData.info[0].time.start }} 至 {{ activityData.info[0].time.end }}</div></strong><em v-on:click=setExpandItem(1)><i class="font-osd icon-chevronright"></i></em></div><div v-if="activityData.info[0].addr || activityData.info[0].city || activityData.info[0].zip || activityData.info[0].country" class=main-item-1><span><i class="font-osd icon-lbsmark"></i></span><strong><div><a href="https://www.google.com/maps/place/{{ activityData.info[0].addr }},{{ activityData.info[0].city }},{{ activityData.info[0].zip }},{{ activityData.info[0].country }}" target=_blank>{{ activityData.info[0].addr }}, {{ activityData.info[0].city }}, {{ activityData.info[0].zip }}, {{ activityData.info[0].country }}</a></div></strong><em><a href="https://www.google.com/maps/place/{{ activityData.info[0].addr }},{{ activityData.info[0].city }},{{ activityData.info[0].zip }},{{ activityData.info[0].country }}" target=_blank><i class="font-osd icon-chevronright"></i></a></em></div><div class=main-item-1><span><i class="font-osd icon-ticket"></i></span><strong><div v-if=!activityData.info[0].price>免费</div><div v-if="activityData.info[0].price | strToNumber">{{ activityData.info[0].price }}€</div><i v-if=activityData.price_info class="font-osd text-green icon-infocircle"></i></strong><em v-if=activityData.price_info v-on:click=setActivityInfoContent(1)><i class="font-osd icon-chevronright"></i></em></div><div class=main-item-1><span><i class="font-osd icon-chair"></i></span><strong><div v-if="activityData.info[0].number.max === \'0\' || activityData.info[0].number.max === 0">不限</div><div v-if="activityData.info[0].number.max | strToNumber">{{ activityData.info[0].number.max }}人</div></strong><span v-on:click=setActivityInfoContent(2)><i class="font-osd icon-infocircle"></i></span><strong v-on:click=setActivityInfoContent(2)><div>咨询</div></strong><em v-on:click=setActivityInfoContent(2)><i class="font-osd icon-chevronright"></i></em></div><div v-bind:class="{ \'expand\': expandItem === 2 }" class=main-item-1><span><i class="font-osd icon-hand"></i></span><strong><div v-if=!activityData.sign_list>暂无</div><div v-if=activityData.sign_list v-on:click=setExpandItem(2) class=avatar-list><div v-for="item in activityData.sign_list" class="avatar avatar-md"><img v-bind:src=item.avatar /></div></div></strong><em v-if="activityData.sign_list.length &gt; 6" v-on:click=setExpandItem(2)><i class="font-osd icon-chevronright"></i></em></div></div></div><div v-if="!isError &amp;&amp; !isLoading &amp;&amp; activityData" class=info-content><ul class=info-tab><li v-if=activityData.description v-bind:class="{ \'active\': activeInfoContent === 0 }" v-on:click=setActivityInfoContent(0)><span>详细描述</span></li><li v-bind:class="{ \'active\': activeInfoContent === 1 }" v-on:click=setActivityInfoContent(1)><span>费用说明</span></li><li v-bind:class="{ \'active\': activeInfoContent === 2 }" v-on:click=setActivityInfoContent(2)><span>联系方式</span></li><li v-if=activityData.disclaimer v-bind:class="{ \'active\': activeInfoContent === 3 }" v-on:click=setActivityInfoContent(3)><span>免责声明</span></li></ul><div v-if=activityData.description v-show="activeInfoContent === 0" class=info-con> <div>{{{ activityData.description }}}</div><div id=detail-tail><div class=detail-info><div class=title>费用说明</div><div class=detail>{{{ activityData.price_info }}}</div></div><div class=detail-info><div class=title>联系方式</div><ul class=detail><li v-if=activityData.contact.tel><strong>电话:</strong><span>{{ activityData.contact.tel }}</span></li><li v-if=activityData.contact.email><strong>邮箱:</strong><span>{{ activityData.contact.email }}</span></li><li v-if=activityData.contact.site><strong>网址:</strong><span><a href="{{ activityData.contact.site }}">{{ activityData.contact.site }}</a></span></li></ul></div></div></div><div v-show="activeInfoContent === 1" class=info-con>{{{ activityData.price_info }}}</div><div v-show="activeInfoContent === 2" class=info-con><ul><li v-if=activityData.contact.tel><strong>电话:</strong><span>{{ activityData.contact.tel }}</span></li><li v-if=activityData.contact.email><strong>邮箱:</strong><span>{{ activityData.contact.email }}</span></li><li v-if=activityData.contact.site><strong>网址:</strong><span><a href="{{ activityData.contact.site }}">{{ activityData.contact.site }}</a></span></li></ul></div><div v-if=activityData.disclaimer v-show="activeInfoContent === 3" class=info-con><p>1.欧时代是一个开放平台，用户或机构将文章或照片等资料上传到互联网上，有可能会 被其他组织或个人复制、转载、擅改或做其他非法用途，用户必须充分意识此类风险的存在。作为网络服务的提供者，我们对用户在任何信息发布、个人主页或其他互动 区域提供的任何陈述、声明或内容均不承担责任。您明确同意使用欧时代平台所存在的风险或产生的一切后果将完全由您自身承担，我们对上述风险或后果不 承担任何责任。</p><p>2.您违反本服务条款、违反道德或法律的，侵犯他人权利的，我们不承担任何责任。同时，我们对任何第三方通过有欧时代平台发送服务或包含在服务中的任何内容不承担责任。</p><p>3.用户在欧时代平台发布的活动和内容侵犯他人知识产权和其他合法权益时，布凡有权立即删除，并保留移交司法机关处理的权利。</p><p>4.对您、其他用户或任何第三方发布、存储或上传的任何内容或由该等内容导致的任何损失或损害，我们不承担责任。</p><p>5.对任何第三方通过欧时代平台可能对您造成的任何错误、中伤、诽谤、诬蔑、不作为、谬误、淫秽、色情或亵渎，我们不承担责任。</p><p>6. 欧时代有权认为，所有使用欧时代发起活动的用户，均已仔细看过本条款并完全同意。</p></div></div><div v-if=activityData class=author-info-block><user-info-block v-bind:info=authorInfo v-bind:uid=activityData.author.uid v-show=authorInfo></user-info-block></div><toolbar v-bind:config=bottomToolbarConfig></toolbar></div>'},457:function(t,i,e){var a,n;e(354),a=e(235),n=e(412),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}});