webpackJsonp([26],{177:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=t.dispatch,o=t.state,s=o.apis["comments-list"],i={uid:"",page:1,type:"",category:"",tagid:"",userPageId:e.$route.params.id,userPageType:e.type};n("SET_NEWS_LIST_CONFIG",s,i)};e.init=function(t,e){var o=t.dispatch,s=t.state;n({dispatch:o,state:s},e)}},242:function(t,e,n){"use strict";var o=n(177);t.exports={name:"org-center-comments",props:["type","info"],vuex:{getters:{compoentConfig:function(t){return t.orgCenterComments}},actions:{init:o.init}},components:{"news-list":function(t){n.e(31,function(e){var n=[e(32)];t.apply(null,n)}.bind(this))}},route:{canReuse:!1},created:function(){this.init(this)}}},303:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,"",""])},349:function(t,e,n){var o=n(303);"string"==typeof o&&(o=[[t.id,o,""]]);n(7)(o,{});o.locals&&(t.exports=o.locals)},407:function(t,e){t.exports="<div class=org-center-comments><news-list v-bind:config=compoentConfig></news-list></div>"},448:function(t,e,n){var o,s;n(349),o=n(242),s=n(407),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}});