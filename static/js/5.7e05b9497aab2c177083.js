webpackJsonp([5,29],{163:function(t,e,n){var i,o;n(371),i=n(252),o=n(429),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},188:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=t.dispatch,i=t.state,o=i.apis["news-list"],s={uid:"",page:1,type:"",category:"",tagid:"",userPageId:e.$route.params.id,userPageType:e.type};n("SET_ORG_CENTER_ARTICLE_NEWS_LIST_CONFIG",o,s)};e.init=function(t,e){var i=t.dispatch,o=t.state;n({dispatch:i,state:o},e)}},252:function(t,e,n){"use strict";var i=n(188);t.exports={name:"org-center-article",props:["type","info"],vuex:{getters:{compoentConfig:function(t){return t.orgCenterArticle}},actions:{init:i.init}},components:{"news-list":function(t){n.e(33,function(e){var n=[e(34)];t.apply(null,n)}.bind(this))}},route:{canReuse:!1},created:function(){this.init(this)}}},326:function(t,e,n){e=t.exports=n(7)(),e.push([t.id,"",""])},371:function(t,e,n){var i=n(326);"string"==typeof i&&(i=[[t.id,i,""]]);n(8)(i,{});i.locals&&(t.exports=i.locals)},429:function(t,e){t.exports="<div class=org-center-article><news-list v-bind:config=compoentConfig.newsList></news-list></div>"}});