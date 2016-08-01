<template lang="jade">
.org-center-intro-activity.animated(
  v-if="intro"
  transition="fade"
)

  //- 简介信息
  .org-center-intro-activity-intro(v-if="intro.intro") {{{ intro.intro }}}

  //- 其他信息
  .org-center-intro-activity-others
    //- 营业时间
    dl(v-if="intro.business_hours")
      dt
        i.font-osd.icon-clock2
        span 营业时间:
      dd: span {{ intro.business_hours }}
    //- 电话
    dl(v-if="intro.tel")
      dt
        i.font-osd.icon-handset
        span 电话:
      dd: span {{ intro.tel }}
    //- 邮件
    dl(v-if="intro.email")
      dt
        i.font-osd.icon-mail
        span 邮件:
      dd: span: a(v-bind:href="'mailto:' + intro.email") {{ intro.email }}
    //- 微信
    dl(v-if="intro.weixin")
      dt
        i.font-osd.icon-weixin
        span 微信:
      dd: span {{ intro.weixin }}
    //- 网站
    dl(v-if="intro.site")
      dt
        i.font-osd.icon-website
        span 网站:
      dd: span: a(v-bind:href="intro.site" target="_blank") {{ intro.site }}
    //- 地区
    dl(v-if="intro.local.country")
      dt
        i.font-osd.icon-lbsmarko
        span 地区:
      dd
        em {{ intro.local.country }}
        em(v-if="intro.local.city") {{ intro.local.city }}
    //- 公交
    dl(v-if="intro.public_transportation.metor || intro.public_transportation.bus || intro.public_transportation.tramway || intro.public_transportation.rer || intro.public_transportation.other")
      dt
        i.font-osd.icon-bus
        span 公交:
      dd
        div(v-if="intro.public_transportation.metor")
          i.font-osd.icon-icometor
          span {{ intro.public_transportation.metor }}
        div(v-if="intro.public_transportation.bus")
          i.font-osd.icon-icobus
          span {{ intro.public_transportation.bus }}
        div(v-if="intro.public_transportation.tramway")
          i.font-osd.icon-icotramway
          span {{ intro.public_transportation.tramway }}
        div(v-if="intro.public_transportation.rer")
          i.font-osd.icon-icorer
          span {{ intro.public_transportation.rer }}
        div(v-if="intro.public_transportation.other")
          span {{ intro.public_transportation.other }}
    //- 地址
    dl(v-if="intro.address")
      dt
        i.font-osd.icon-lbsmarkmap
        span 地址:
      dd: span {{ intro.address }}, {{ intro.zip }}, {{ intro.local.city }}, {{ intro.local.country }}

  //- 地图
  .org-center-intro-activity-map(v-if="intro.address")
    iframe(
      v-bind:src="'https://www.google.com/maps/embed/v1/place?q=' + intro.address + ',' + intro.zip + ',' + intro.local.city + ',' + intro.local.country + '&key=AIzaSyCCuz-S_Xe0UyE7B_WQy9mIGj2qFkaJn1A'"
      allowfullscreen
      frameborder="0"
    )
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init,
  reset
} from '../../vuex/actions/org-center-intro-activity'

module.exports = {
  name: 'org-center-intro-activity',
  props: ['type', 'info'],
  vuex: {
    getters: {
      intro: state => state.orgCenterIntroActivity.intro.data
    },
    actions: {
      init,
      reset
    }
  },
  destroyed: function () {
    // 重置
    this.reset()
  },
  ready: function () {
    // 初始化
    this.init(this)
  }
}
</script>
