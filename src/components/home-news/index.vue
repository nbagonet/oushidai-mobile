<template lang="jade">
.home-news(v-if="list.length")

  //- 标题栏
  .title-bar
    h2(v-link="{ name: 'news' }")
      i.font-osd.icon-readbook
      strong 最新
      span 资讯
    .btn-control
      a.home-news-arrLeft(href="javascript:void(0)")
        i.font-osd.icon-chevronleft
      a.home-news-arrRight(href="javascript:void(0)")
        i.font-osd.icon-chevronright
    .more: a(v-link="{ name: 'news' }") 更多

  //- 列表
  .swiper-container.slider-home-news.animated(
    v-if="list.length"
    transition="fade"
  )
    .swiper-wrapper.slider-home-news-wrapper
      .swiper-slide.slider-home-news-slide(v-for="(num, page) in [[ list[0], list[1], list[2], list[3], list[4] ], [ list[5], list[6], list[7], list[8], list[9] ]]")
        ul.home-news-list
          li(
            v-for="(index, item) in page"
          )
            //- 图片
            .pic(v-if="index === 0")
              a.inset-shadow-m(v-link="{ name: 'news-view', params: { id: item.id }}")
                img.swiper-lazy(
                  src="../../assets/img/common/blank.png"
                  data-background="{{ item.pic }}"
                )
            //- 信息
            .info
              .title: a(v-link="{ name: 'news-view', params: { id: item.id }}") {{ item.title }}
              .attr
                //- 作者
                .author(v-if="index === 0")
                  a.avatar.avatar-md(v-link="{ name: item.author.type, params: { id: item.author.uid }}")
                    .pic
                      img.swiper-lazy(src="../../assets/img/common/blank.png" data-src="{{ item.author.avatar }}")
                  .name-time
                    a.name(v-link="{ name: item.author.type, params: { id: item.author.uid }}") {{ item.author.name }}
                    .time {{ item.time | formatDateTime }}
                .author(v-else)
                  .name-time
                    a(v-link="{ name: item.author.type, params: { id: item.author.uid }}")
                      |@{{ item.author.name }}
                    span &nbsp;·&nbsp;{{ item.time | formatDateTime }}
                //- 点赞数
                .like(v-if="item.like.num")
                  i.font-osd.icon-like
                  span {{ item.like.num | formatNum }}
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init,
  reset
} from '../../vuex/actions/home-news'

module.exports = {
  name: 'home-news',
  props: ['config'],
  vuex: {
    getters: {
      list: state => state.homeNews.list,
      nodata: state => state.homeNews.isNoData,
      loading: state => state.loading,
      port: state => state.homeNews.port
    },
    actions: {
      init,
      reset
    }
  },
  ready: function () {
    // 初始化
    this.init(this)
  },
  destroyed: function () {
    console.log('销毁网站首页资讯列表组件')
    // 重置组件状态
    this.reset(this)
  }
}
</script>
