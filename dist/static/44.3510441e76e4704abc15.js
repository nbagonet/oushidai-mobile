webpackJsonp([44],{8:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQAAAAClSfIQAAAAAnRSTlMAAQGU/a4AAAANSURBVHgBY/h/AA8CAAdSEXcIxUkmAAAAAElFTkSuQmCC"},180:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=t.resetData=void 0;var o=i(24),r=function(e,t){var i=e.dispatch,r=e.state,n=r.apis["mediaOrg-hot"],a={type:t.type,id:t.$route.params.id};i("GLOBAL_LOADING",!0),t.$http.get(n,a).then(function(e){(0,o.handleResponse)(e,function(e){i("SET_HOTLIST",e.list),i("GLOBAL_LOADING",!1)},function(e,t){(0,o.APIError)(n,e),i("GLOBAL_LOADING",!1)})},function(e){window.alert("热门数据获取失败，请稍后重试"),i("GLOBAL_LOADING",!1)})};t.resetData=function(e){var t=e.dispatch;e.state;t("SET_HOTLIST",[])},t.init=function(e,t){var i=e.dispatch,o=e.state;r({dispatch:i,state:o},t)}},245:function(e,t,i){"use strict";var o=i(180);e.exports={name:"org-center-hot",props:["info","type"],vuex:{getters:{list:function(e){return e.orgCenterHot.list}},actions:{init:o.init,resetData:o.resetData}},created:function(){this.resetData()},ready:function(){this.init(this)}}},306:function(e,t,i){t=e.exports=i(6)(),t.push([e.id,".org-center-hot{font-size:.375rem;position:relative;color:#516167;background-color:#fff;margin-bottom:.390625rem;padding:.46875rem .46875rem .15625rem;box-shadow:0 .046875rem .046875rem rgba(0,0,0,.15)}.org-center-hot:after{overflow:hidden;content:'';width:100%;height:.078125rem;background-image:-webkit-linear-gradient(left,#59dcc4,#00bff2);background-image:linear-gradient(90deg,#59dcc4,#00bff2);background-repeat:repeat-x;position:absolute;right:0;bottom:0;left:0}.org-center-hot .title-bar{margin-bottom:.15625rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.org-center-hot .title-bar i,.org-center-hot .title-bar strong{font-weight:400}.org-center-hot .title-bar i{font-size:.5625rem;margin-right:.15625rem}.org-center-hot .title-bar strong{font-size:.5rem}.org-center-hot .list{word-wrap:break-word;word-break:break-all;padding-top:.15625rem}.org-center-hot .list li{display:table;width:100%;border-bottom:1px solid #ecf2f3;padding-top:.3125rem;padding-bottom:.3125rem}.org-center-hot .list li:last-child{border-bottom:0}.org-center-hot .list .num,.org-center-hot .list .pic,.org-center-hot .list .title{display:table-cell;vertical-align:top}.org-center-hot .list .num{width:1px}.org-center-hot .list em{font-size:.34375rem;font-style:normal;display:block;color:#fff;background-color:#516167;border-radius:50%;width:.625rem;height:.625rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.org-center-hot .list .title{line-height:.625rem;padding-right:.234375rem;padding-left:.234375rem}.org-center-hot .list .title a{display:block;color:#516167}.org-center-hot .list .title a:active{color:#00e6e8}.org-center-hot .list .title.hasPic .inner{height:2.578125rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.org-center-hot .list .text{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.org-center-hot .list .text a{overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.org-center-hot .list .author,.org-center-hot .list .time{-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.org-center-hot .list .author{font-size:.34375rem;line-height:1.27272727}.org-center-hot .list .author a{color:#6b797e}.org-center-hot .list .author a:active{color:#00e6e8}.org-center-hot .list .time{font-size:.3125rem;line-height:1;color:#acbbc0}.org-center-hot .list .pic{padding-right:.3125rem}.org-center-hot .list .pic a{position:relative;display:block;overflow:hidden}.org-center-hot .list .pic img{display:block;background-repeat:no-repeat;background-position:50% 50%;background-size:cover;width:4.0625rem;height:2.578125rem}",""])},352:function(e,t,i){var o=i(306);"string"==typeof o&&(o=[[e.id,o,""]]);i(7)(o,{});o.locals&&(e.exports=o.locals)},410:function(e,t,i){e.exports='<div v-if=list.length transition=fade class="org-center-hot animated"><div class=title-bar><i class="font-osd icon-fire"></i><strong>TA的热文</strong></div><ul class=list><li v-for="(index, item) in list"><div class=num><em>{{ index + 1 }}</em></div><div v-bind:class="{ \'hasPic\': index === 0 }" class=title><div class=inner><div class=text><a v-link="{ name: \'news-view\', params: { id: item.id }}">{{ item.title }}</a></div><div v-if="index === 0" class=author><a v-link="{ name: item.author.type, params: { id: item.author.uid }}">@{{ item.author.name }}</a></div><div v-if="index === 0" class=time>{{ item.time | formatDateTime }}</div></div></div><div v-if="index === 0" class=pic><a v-link="{ name: \'news-view\', params: { id: item.id }}" class=inset-shadow-m><img src='+i(8)+" v-bind:style=\"{ backgroundImage: 'url(' + item.pic + ')' }\"/></a></div></li></ul></div>"},450:function(e,t,i){var o,r;i(352),o=i(245),r=i(410),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}});