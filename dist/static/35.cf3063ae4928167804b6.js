webpackJsonp([35],{8:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQAAAAClSfIQAAAAAnRSTlMAAQGU/a4AAAANSURBVHgBY/h/AA8CAAdSEXcIxUkmAAAAAElFTkSuQmCC"},154:function(e,i,t){var s,o;t(363),s=t(256),o=t(421),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},256:function(e,i){"use strict";e.exports={name:"releated-list",props:["config"],vuex:{getters:{isLoading:function(e){return e.newsView.isLoading}}}}},317:function(e,i,t){i=e.exports=t(6)(),i.push([e.id,".related-news-list{padding-top:.234375rem;padding-right:.3125rem;padding-left:.3125rem}.related-news-list .news-item{background-color:#fff;box-shadow:0 .015625rem .0625rem 0 rgba(0,0,0,.15);margin-top:.234375rem;margin-bottom:.234375rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.related-news-list .pic-box{position:relative;-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none;width:2.34375rem;height:1.875rem}.related-news-list .pic{position:relative;background-color:#8fa1a7;width:100%;height:100%}.related-news-list .pic>a,.related-news-list .pic img{display:block;width:100%;height:100%}.related-news-list .pic img{background-repeat:no-repeat;background-position:50% 50%;background-size:cover}.related-news-list .con-box{overflow:hidden;height:1.875rem;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:.3125rem}.related-news-list .title{font-size:.40625rem;line-height:.625rem;height:1.25rem;word-wrap:break-word;word-break:break-all;color:#464646;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.related-news-list .title a{color:#464646}.related-news-list .title a:active{color:#00e6e8}",""])},363:function(e,i,t){var s=t(317);"string"==typeof s&&(s=[[e.id,s,""]]);t(7)(s,{});s.locals&&(e.exports=s.locals)},421:function(e,i,t){e.exports='<div v-show=!isLoading class=releated-list><div v-if="config.type === \'news\'" class=related-news-list><div v-for="(index, item) in config.list" transition=fade class="news-item animated"><div class=pic-box><div class=pic><a v-link="{ name: \'news-view\', params: { id: item.id }}" class=inset-shadow-m><img src='+t(8)+" v-bind:style=\"{ backgroundImage: 'url(' + item.pic + ')' }\"/></a></div></div><div class=con-box><div class=title><a v-link=\"{ name: 'news-view', params: { id: item.id }}\">{{ item.title }}</a></div></div></div></div></div>"}});