webpackJsonp([3],{40:function(t,e,n){var o,s;n(350),o=n(243),s=n(408),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},178:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){var n=t.dispatch,o=t.state,s=o.apis["fans-list"],i={page:1,type:"",category:"",tagid:"",userPageId:e.$route.params.id,userPageType:e.type};n("SET_USER_LIST_CONFIG",s,i)};e.init=function(t,e){var o=t.dispatch,s=t.state;n({dispatch:o,state:s},e)}},243:function(t,e,n){"use strict";var o=n(178);t.exports={name:"org-center-fans",props:["type","info"],components:{"org-center-fans-list":function(t){n.e(41,function(e){var n=[e(463)];t.apply(null,n)}.bind(this))}},vuex:{getters:{compoentConfig:function(t){return t.orgCenterFans}},actions:{init:o.init}},route:{canReuse:!1},created:function(){this.init(this)}}},304:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,"",""])},350:function(t,e,n){var o=n(304);"string"==typeof o&&(o=[[t.id,o,""]]);n(7)(o,{});o.locals&&(t.exports=o.locals)},408:function(t,e){t.exports="<div class=org-center-fans><org-center-fans-list v-bind:type=type v-bind:info=info v-bind:config=compoentConfig></org-center-fans-list></div>"}});