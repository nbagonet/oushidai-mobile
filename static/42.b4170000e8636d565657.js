webpackJsonp([42],{8:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQAAAAClSfIQAAAAAnRSTlMAAQGU/a4AAAANSURBVHgBY/h/AA8CAAdSEXcIxUkmAAAAAElFTkSuQmCC"},183:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.init=i.resetData=void 0;var r=t(24),a=function(e,i){var t=e.dispatch,a=e.state,s=a.apis["mediaOrg-similar"],o={type:i.type,id:i.$route.params.id};t("GLOBAL_LOADING",!0),i.$http.get(s,o).then(function(e){(0,r.handleResponse)(e,function(e){t("SET_LIST",e.list),t("GLOBAL_LOADING",!1)},function(e,i){(0,r.APIError)(s,e),t("GLOBAL_LOADING",!1)})},function(e){window.alert("相似机构/资讯达人数据获取失败，请稍后重试"),t("GLOBAL_LOADING",!1)})};i.resetData=function(e){var i=e.dispatch;e.state;i("SET_LIST",[])},i.init=function(e,i){var t=e.dispatch,r=e.state;a({dispatch:t,state:r},i)}},250:function(e,i,t){"use strict";var r=t(183);e.exports={name:"org-center-similar",props:["info","type"],vuex:{getters:{list:function(e){return e.orgCenterSimilar.list}},actions:{init:r.init,resetData:r.resetData}},created:function(){this.resetData()},ready:function(){this.init(this)}}},311:function(e,i,t){i=e.exports=t(6)(),i.push([e.id,".org-center-similar{font-size:.375rem;position:relative;color:#516167;background-color:#fff;margin-bottom:.390625rem;padding:.46875rem .46875rem .15625rem;box-shadow:0 .046875rem .046875rem rgba(0,0,0,.15)}.org-center-similar:after{overflow:hidden;content:'';width:100%;height:.078125rem;background-image:-webkit-linear-gradient(left,#59dcc4,#00bff2);background-image:linear-gradient(90deg,#59dcc4,#00bff2);background-repeat:repeat-x;position:absolute;right:0;bottom:0;left:0}.org-center-similar .title-bar{margin-bottom:.15625rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.org-center-similar .title-bar i,.org-center-similar .title-bar strong{font-weight:400}.org-center-similar .title-bar i{font-size:.5625rem;margin-right:.15625rem}.org-center-similar .title-bar strong{font-size:.5rem}.org-center-similar .list{word-wrap:break-word;word-break:break-all;padding-top:.15625rem}.org-center-similar .list li{position:relative;width:100%;border-bottom:1px solid #ecf2f3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding-top:.390625rem;padding-bottom:.390625rem}.org-center-similar .list li:last-child{border-bottom:0}.org-center-similar .user-pic{-webkit-box-flex:0;-ms-flex:none;flex:none;margin-right:.390625rem}.org-center-similar .user-info{-webkit-box-flex:1;-ms-flex:1;flex:1}.org-center-similar .user-info i,.org-center-similar .user-info span{vertical-align:middle;display:inline-block}.org-center-similar .user-info i+span,.org-center-similar .user-info span+i{margin-left:.5em}.org-center-similar .user-info em{font-style:normal}.org-center-similar .user-info span>em{margin-right:.5em}.org-center-similar .name,.org-center-similar .others,.org-center-similar .tags{font-size:.3125rem;line-height:1.8;color:#aaa}.org-center-similar .name{font-size:.375rem;color:#464646}.org-center-similar .name i{font-size:.3125rem;margin-left:.078125rem}.org-center-similar .name a{color:#464646}.org-center-similar .name a:active{color:#00e6e8}.org-center-similar .others:after,.org-center-similar .others:before{display:table;content:\"\"}.org-center-similar .others:after{clear:both}.org-center-similar .others .article,.org-center-similar .others .local{float:left;margin-right:1em}.org-center-similar .others .fans{float:right}",""])},357:function(e,i,t){var r=t(311);"string"==typeof r&&(r=[[e.id,r,""]]);t(7)(r,{});r.locals&&(e.exports=r.locals)},415:function(e,i,t){e.exports='<div v-if=list.length transition=fade class=org-center-similar><div class=title-bar><i class="font-osd icon-starfat"></i><strong>相似媒体机构</strong></div><ul class=list><li v-for="(index, item) in list"><div class=user-pic><a v-link="{ name: item.type, params: { id: item.uid }}" class="avatar avatar-md"><div class=pic><img src='+t(8)+' v-bind:style="{ backgroundImage: \'url(\' + item.avatar + \')\' }"/></div></a></div><div class=user-info><div class=name><a v-link="{ name: item.type, params: { id: item.uid }}"><span>{{ item.name }}</span><i class="font-osd icon-star text-standard-blue"></i></a></div><div v-if=item.tags.length class=tags><i class="font-osd icon-tagleft"></i><span v-for="tag in item.tags"><em>{{ tag.tag }}</em></span></div><div class=others><div v-if="item.local != \'\'" class=local><i class="font-osd icon-lbsmark"></i><span>{{ item.local }}</span></div><div v-if="item.article | strToNumber" class=article><i class="font-osd icon-readbook"></i><span>{{ item.article | formatNum }}</span></div><div v-if="item.fans | strToNumber" class=fans><span>{{ item.fans | formatNum }} 粉丝</span></div></div></div></li></ul></div>'},454:function(e,i,t){var r,a;t(357),r=t(250),a=t(415),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),a&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=a)}});