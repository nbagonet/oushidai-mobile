<template lang="jade">
.user-banner.animated(
  v-show="info.name"
  transition="fade"
)
  //- 背景图
  .banner(
    v-if="info.banner"
    v-bind:style="{ backgroundImage: 'url(' + info.banner + ')' }"
  )
  .banner(
    v-else
    v-bind:style="{ backgroundImage: 'url(http://www.oushidai.com/img/tmp/user-banner/2.jpg)' }"
  )
  //- 头像
  .avatar.avatar-xxxxl
    .pic
      img(
        src="../../assets/img/common/blank.png"
        v-bind:style="{ backgroundImage: 'url(' + info.avatar + ')' }"
      )
  //- 昵称
  .nick {{ info.name }}
  //- 身份
  .type
    //- 资讯达人
    .user-title(v-if="info.type === 'writer'")
      i.font-osd.icon-star.text-standard-blue
      span(v-if="info.level | strToNumber") {{ info.level }}
      em 资讯达人
    //- 媒体机构
    .user-title(v-if="info.type === 'mediaOrg'")
      i.font-osd.icon-star.text-standard-blue
      span(v-if="info.level | strToNumber") {{ info.level }}
      em 媒体机构
    //- 活动机构
    .user-title(v-if="info.type === 'eventOrg'")
      i.font-osd.icon-star.text-green
      span(v-if="info.level | strToNumber") {{ info.level }}
      em 活动机构
  //- 简介
  .intro {{ info.intro }}
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  initUserBanner,
  resetUserBanner
} from '../../vuex/actions/user-banner'

module.exports = {
  name: 'user-banner',
  props: ['type', 'userid'],
  vuex: {
    getters: {
      info: state => state.userBanner
    },
    actions: {
      initUserBanner,
      resetUserBanner
    }
  },
  // created: function () {
  //   // 重置
  //   this.resetUserBanner()
  // },
  // destroyed: function () {
  //   console.log('销毁user-banner组件')
  // },
  // ready: function () {
  //   // 初始化
  //   this.initUserBanner(this)
  // }
  ready: function () {
    // 重置
    this.resetUserBanner()
    // 初始化
    this.initUserBanner(this)
    // 监测
    this.$watch('userid', function (newVal, oldVal) {
      // 重置
      this.resetUserBanner()
      // 初始化
      this.initUserBanner(this)
    })
  }
}
</script>
