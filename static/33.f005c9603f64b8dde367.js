webpackJsonp([33],{8:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQAAAAClSfIQAAAAAnRSTlMAAQGU/a4AAAANSURBVHgBY/h/AA8CAAdSEXcIxUkmAAAAAElFTkSuQmCC"},147:function(t,i,e){var a,o;e(329),a=e(222),o=e(387),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},162:function(t,i,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(i,"__esModule",{value:!0}),i.reset=i.init=i.setEventItemActived=i.stopCheckLoadArea=void 0;var o=e(24),n=e(25),s=a(n),c=function(t,i){var e=(t.dispatch,t.state);e.activityList.port=i.config.port,e.activityList.params=i.config.params},r=function(t,i){var e=t.dispatch,a=t.state,n=a.activityList.port,s=a.activityList.params;e("IS_EVENT_LIST_LOADING",!0),i.$http.get(n,s).then(function(t){(0,o.handleResponse)(t,function(t){e("IS_EVENT_LIST_LOADING",!1),e("SET_EVENT_LIST",t.list),e("SET_EVENT_LIST_PAGE_NUMBER_PLUS"),v({dispatch:e,state:a},i)},function(t,i){1011===Number(i)?(e("SET_EVENT_LIST_NODATA",!0),e("SET_EVENT_LIST_LOCKED",!0)):1099===Number(i)?e("SET_EVENT_LIST_LOCKED",!0):(0,o.APIError)(n,t),e("IS_EVENT_LIST_LOADING",!1)})},function(t){window.alert("活动数据获取失败，请稍后重试"),e("IS_EVENT_LIST_LOADING",!1)})},v=function(t,i){var e=t.dispatch,a=t.state;(0,s["default"])(window).off("scroll.getEventList").on("scroll.getEventList",function(t){var o=(0,s["default"])(window).height(),n=(0,s["default"])(window).scrollTop(),c=(0,s["default"])(i.$el).height(),v=o/100*20,l=a.activityList.isLoading,d=a.activityList.isLocked,m=o+n+v,u=!l&&!d&&m>=c?1:0;1===u&&r({dispatch:e,state:a},i)})};i.stopCheckLoadArea=function(){(0,s["default"])(window).off("scroll.getEventList")},i.setEventItemActived=function(t){(0,s["default"])(".news-item").removeClass("active"),(0,s["default"])(".news-item:eq("+t+")").addClass("active")},i.init=function(t,i){var e=t.dispatch,a=t.state;c({dispatch:e,state:a},i),r({dispatch:e,state:a},i)},i.reset=function(t,i){var e=t.dispatch;t.state;e("RESET_EVENT_LIST")}},222:function(t,i,e){"use strict";var a=e(10),o=e(162);t.exports={name:"activity-list",props:["config"],vuex:{getters:{list:function(t){return t.activityList.list},nodata:function(t){return t.activityList.isNoData},locked:function(t){return t.activityList.isLocked},loading:function(t){return t.activityList.isLoading},port:function(t){return t.activityList.port}},actions:{setBreadcrumbs:a.setBreadcrumbs,stopCheckLoadArea:o.stopCheckLoadArea,setEventItemActived:o.setEventItemActived,init:o.init,reset:o.reset}},components:{loading:function(t){e.e(0,function(i){var e=[i(28)];t.apply(null,e)}.bind(this))}},methods:{setActived:function(t){(0,o.setEventItemActived)(t.$index)}},route:{canReuse:!1},ready:function(){this.init(this),this.setBreadcrumbs(this.$route.breadcrumbs)},destroyed:function(){this.stopCheckLoadArea(),this.reset(this)}}},283:function(t,i,e){i=t.exports=e(6)(),i.push([t.id,".activity-list .activity-list-nodata{font-size:.4375rem;text-align:center;color:#8fa1a7;padding:.46875rem;margin:.3125rem}.activity-list .activity-item,.activity-list .activity-list-nodata{background-color:#fff;box-shadow:0 .015625rem .0625rem 0 rgba(0,0,0,.15)}.activity-list .activity-item{position:relative;margin-top:.234375rem;margin-bottom:.234375rem}.activity-list .activity-item .pic-box{position:relative;width:100%;height:4.6875rem}.activity-list .activity-item .pic-box .tags{z-index:100;position:absolute;top:.15625rem;left:.234375rem;opacity:.8}.activity-list .activity-item .pic-box .pic{position:relative;width:100%;height:100%}.activity-list .activity-item .pic-box .pic>a{display:block;background:url("+e(384)+") no-repeat 50% 50% #333;background-size:auto 1.5625rem;width:100%;height:100%}.activity-list .activity-item .pic-box .pic img{display:block;background-repeat:no-repeat;background-position:50% 50%;background-size:cover;width:100%;height:100%}.activity-list .activity-item .con-box{padding:.3125rem .625rem}.activity-list .activity-item .con-box .title{font-size:.46875rem;line-height:1.33333333}.activity-list .activity-item .con-box .title a{color:#444}.activity-list .activity-item .con-box .title a:active{color:#00e6e8}.activity-list .activity-item .con-box .attr{margin-top:.3125rem}.activity-list .activity-item .con-box .attr,.activity-list .activity-item .con-box .attr .author{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.activity-list .activity-item .con-box .attr .author{margin-right:auto}.activity-list .activity-item .con-box .attr .author .avatar{margin-right:.15625rem}.activity-list .activity-item .con-box .attr .author .name{font-size:.3125rem;line-height:1.7;color:#6c8189}.activity-list .activity-item .con-box .attr .author .name a{color:#6c8189}.activity-list .activity-item .con-box .attr .author .name a:active{color:#00e6e8}.activity-list .activity-item .con-box .attr .author .time{font-size:.25rem;color:#ccc}.count{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.count,.count a{color:#b2c3c9}.count a:active{color:#00e6e8}.count .font-osd,.count span{vertical-align:middle;display:inline-block}.count .font-osd{font-size:.4375rem}.count .font-osd+span,.count span+.font-osd{margin-left:.3em}",""])},329:function(t,i,e){var a=e(283);"string"==typeof a&&(a=[[t.id,a,""]]);e(7)(a,{});a.locals&&(t.exports=a.locals)},384:function(t,i,e){t.exports=e.p+"static/share_icon.5005804.png"},387:function(t,i,e){t.exports='<div class=activity-list><div v-if=nodata transition=fade class="activity-list-nodata animated"><p>暂无相关内容</p></div><div v-for="(index, item) in list" transition=fade class="activity-item animated"><div class=pic-box><div class=tags><a v-link="{name: \'activity-home\', query: { tagid: item.tags[0].id }}" data-id="{{ item.tags[0].id }}" class="tag white-nb"><span>{{ item.tags[0].tag }}</span></a></div><div class=pic><a v-link="{ name: \'activity-view\', params: { id: item.id }}" v-on:click=setActived(this) class=inset-shadow-l><img src='+e(8)+" v-bind:style=\"{ backgroundImage: 'url(' + item.pic + ')' }\"/></a></div><div class=activity-info><a v-link=\"{ name: 'activity-view', params: { id: item.id }}\" v-on:click=setActived(this)><ul class=activity-date><li v-if=item.event_info[0].start_time>{{{ item.event_info[0].start_time | coverDate }}}</li><li v-if=\"item.event_info[0].end_time &amp;&amp; item.event_info[0].start_time !== item.event_info[0].end_time\">{{{ item.event_info[0].end_time | coverDate }}}</li></ul><div class=activity-pandc><div v-bind:class=\"{ 'equally': item.event_info[0].cost.is_equally === 'true', 'others': item.event_info[0].cost.is_others === 'true', 'free': item.event_info[0].cost.amount === '0' || item.event_info[0].cost.amount === '0.00' }\" class=activity-price><span v-if=\"item.event_info[0].cost.is_equally === 'true'\">平摊费用</span><span v-if=\"item.event_info[0].cost.is_others === 'true'\">其他</span><span v-if=\"item.event_info[0].cost.amount === '0' || item.event_info[0].cost.amount === '0.00'\">免费</span><span v-if=\"item.event_info[0].cost.is_equally !== 'true' &amp;&amp; item.event_info[0].cost.is_others !== 'true' &amp;&amp; item.event_info[0].cost.amount !== '0' &amp;&amp; item.event_info[0].cost.amount !== '0.00'\"><strong>{{ item.event_info[0].cost.amount }}</strong><small>{{ item.event_info[0].cost.unit }}</small></span></div><div class=activity-city><i class=\"font-osd icon-lbsmark\"></i><span>{{ item.event_info[0].place }}</span></div></div></a></div></div><div class=con-box><div class=title><a v-link=\"{ name: 'activity-view', params: { id: item.id }}\" v-on:click=setActived(this)>{{ item.title }}</a></div><div class=attr><div class=author><a v-link=\"{ name: 'eventOrg', params: { id: item.author.uid }}\" v-if=\"item.author.avatar != ''\" class=\"avatar avatar-md\"><div class=pic><img src="+e(8)+' v-bind:style="{ backgroundImage: \'url(\' + item.author.avatar + \')\' }"/></div></a><div v-if="item.author.name != \'\'" class=info><div class=name><span><a v-link="{ name: \'eventOrg\', params: { id: item.author.uid }}">{{ item.author.name }}</a></span></div><div class=time>{{ item.time | formatDateTime }}</div></div></div><div class=count><div v-if="item.view.num | strToNumber" class=view-num><i class="font-osd icon-eye"></i><span>{{ item.view.num | formatNum }} </span></div></div></div></div></div><loading v-show=loading type=list></loading></div>'}});