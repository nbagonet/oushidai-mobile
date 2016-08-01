<template lang="jade">
  .bottombar
    ul.help-list.bottombar-item
      li(
        v-for="item in config.helpList"
        v-if="item.show"
      )
        a(
          v-link="{ name: item.link, params: item.params }"
        ) {{ item.name }}
    .oushidai.bottombar-item © 欧时代
    ul.view-list.bottombar-item
      li(
        v-for="item in config.viewList"
        v-if="item.show"
        v-bind:class="{ 'actived': item.actived }"
      )
        a(
          v-link="{ name: item.link }"
          v-if="item.link"
        ) {{ item.name }}
        a(
          href="{{ item.url }}"
          v-if="item.url"
        ) {{ item.name }}
    ul.func-list.bottombar-item
      li.advice(v-if="config.btn.feedback")
        a(v-link="{ name: 'feedback' }") 吐槽<br>建议
      li.qr.text-large(v-if='config.btn.qr')
        a: i.font-osd.icon-qr
      li.top.text-large(v-if='config.btn.top')
        a(href='#'): i.font-osd.icon-chevronup
    .weixin-group-qr.none: .inner
        img(src="../../assets/img/common/qr-xiangfa.png")
    .app-img(v-show='config.ad.show')
      a(href='{{ config.ad.appLink }}')
        img(src="../../assets/img/app-download.png")
      //- .ad-icon: img(src="../../assets/img/icon/share_icon.png")
      //- .ad-icon
      //- .ad-info
      //-   .ad-info-top 欧时代 APP
      //-   .add-info-butt 分享最精彩
      //- .ad-download 点击下载
      .close
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  bindClose,
  setAppLink,
  bindGoTop,
  bindQR
} from '../../vuex/actions/bottombar'
// console.log(bindClose)
module.exports = {
  name: 'bottombar',
  // props: ['stateAll'],
  vuex: {
    getters: {
      config: state => state.bottombar,
      isLogin: state => state.isLogin
      // app: state => state.app
    },
    actions: {
      bindClose,
      setAppLink,
      bindGoTop,
      bindQR
    }
  },
  created: function () {
    this.setAppLink(this)
  },
  ready: function () {
    this.bindClose()
    this.bindGoTop()
    this.bindQR()
  }
}
</script>
