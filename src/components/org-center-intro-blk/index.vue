<template lang="jade">
.org-center-intro-blk.animated(
  v-show="orgIntro.intro"
  transition="fade"
)
  //- 二维码
  .qr(v-if="orgIntro.qr != ''")
    img(
      src="../../assets/img/common/blank.png"
      v-bind:style="{ backgroundImage: 'url(' + orgIntro.qr + ')' }"
    )
  //- 简介信息
  .text(v-if="orgIntro.intro != ''") {{{ orgIntro.intro }}}
  //- 联系信息
  ul.contact(v-if="orgIntro.weixin != '' || orgIntro.email != ''")
    li.weixin(v-if="orgIntro.weixin != ''")
      i.font-osd.icon-weixin
      strong 微信:
      span {{ orgIntro.weixin }}
    li.email(v-if="orgIntro.email != ''")
      i.font-osd.icon-mail
      strong 邮箱:
      span {{ orgIntro.email }}
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  resetOrgIntro,
  initOrgIntro
} from '../../vuex/actions/org-center-intro-blk'

module.exports = {
  name: 'org-center-intro-blk',
  props: ['info', 'type'],
  vuex: {
    getters: {
      orgIntro: state => state.orgCenterIntroBlk
    },
    actions: {
      resetOrgIntro,
      initOrgIntro
    }
  },
  created: function () {
    // 重置
    this.resetOrgIntro()
  },
  ready: function () {
    // 初始化
    this.initOrgIntro(this)
  }
}
</script>
