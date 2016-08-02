<template lang="jade">
.home-activity(v-if="list.length")

  //- 标题栏
  .title-bar
    h2(v-link="{ name: 'activity' }")
      i.font-osd.icon-userrun
      strong 最新
      span 活动
    .btn-control
      a.home-activity-arrLeft(href="javascript:void(0)")
        i.font-osd.icon-chevronleft
      a.home-activity-arrRight(href="javascript:void(0)")
        i.font-osd.icon-chevronright
    .more: a(v-link="{ name: 'activity' }") 更多

  //- 列表
  .swiper-container.slider-home-activity.animated(
    v-if="list.length"
    transition="fade"
  )
    .swiper-wrapper.slider-home-activity-wrapper
      .swiper-slide.slider-home-activity-slide(v-for="(num, page) in [[ list[0], list[1], list[2], list[3], list[4] ], [ list[5], list[6], list[7], list[8], list[9] ]]")
        ul.home-activity-list
          li(v-for="(index, item) in page")
            //- 图片
            .pic(v-if="index === 0")
              a.inset-shadow-m(v-link="{ name: 'activity-view', params: { id: item.id }}")
                img.swiper-lazy(
                  src="../../assets/img/common/blank.png"
                  data-background="{{ item.pic }}"
                )
              //- 活动信息
              .home-activity-info
                .home-activity-info-time {{{ item.event_info[0].start_time | coverDate }}}
                .home-activity-info-city: span {{ item.event_info[0].place }}
            //- 信息
            .info
              .title
                .title-time(v-if="index !== 0") {{{ item.event_info[0].start_time | coverDate }}}
                a(v-link="{ name: 'activity-view', params: { id: item.id }}") {{ item.title }}
              .attr
                //- 作者
                .author(v-if="index === 0")
                  a.avatar.avatar-md(v-link="{ name: 'eventOrg', params: { id: item.author.uid }}")
                    .pic
                      img.swiper-lazy(src="../../assets/img/common/blank.png" data-src="{{ item.author.avatar }}")
                  .name-time
                    a.name(v-link="{ name: 'eventOrg', params: { id: item.author.uid }}") {{ item.author.name }}
                    //- a.name(href="javascript:void(0)") {{ item.author.name }}
                    .time {{ item.time | formatDateTime }}
                .author(v-else)
                  .name-time.home-activity-name-time
                    .home-activity-info-city
                      i.font-osd.icon-lbsmark
                      em {{ item.event_info[0].place }}
                    a(v-link="{ name: 'eventOrg', params: { id: item.author.uid }}") @{{ item.author.name }}
                    span &nbsp;·&nbsp;{{ item.time | formatDateTime }}
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init,
  reset
} from '../../vuex/actions/home-activity'

module.exports = {
  name: 'home-activity',
  props: ['config'],
  vuex: {
    getters: {
      list: state => state.homeActivity.list,
      nodata: state => state.homeActivity.isNoData,
      loading: state => state.loading,
      port: state => state.homeActivity.port
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
    // console.log('销毁网站首页活动列表组件')
    // 重置组件状态
    this.reset(this)
  }
}
</script>
