<template lang="jade">
.start
  //- logo
  .logo

  .start-act
    //- 按钮
    .btn-group
      //- 登录
      a.btn(v-link="{ name: 'login' }") 登录
      //- 注册
      a.btn(v-link="{ name: 'register' }") 注册

    //- 联合登录
    .union-login
      .title
        span 其他方式登录
      ul.union-list
        //- 微信
        li(v-if="inWeiXin")
          a(href="http://oushinet.alltosun.net/open_platform/weixin")
            i.font-osd.icon-weixin
        //- QQ
        li
          a(href="http://oushinet.alltosun.net/open_platform/qq")
            i.font-osd.icon-qq
        //- 微博
        li
          a(href="http://oushinet.alltosun.net/open_platform/weibo")
            i.font-osd.icon-weibo

    //- 非登录入口
    .enter
      a(v-link="{ name: 'home' }")
        span 随便看看
        i.font-osd.icon-chevronright
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  checkInWeiXin
} from '../../vuex/action'

module.exports = {
  name: 'start',
  vuex: {
    getters: {
      inWeiXin: state => state.inWeiXin,
      isLogin: state => state.isLogin
    },
    actions: {
      checkInWeiXin
    }
  },
  ready: function () {
    // 判断是否在微信内
    this.checkInWeiXin()
    // 已登录用户跳过此页
    if (this.isLogin) {
      this.$router.go({ name: 'home' })
    }
  }
}
</script>
