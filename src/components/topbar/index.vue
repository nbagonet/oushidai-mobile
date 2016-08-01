<template lang="jade">
header.topbar(
  v-bind:class="{ 'fixed': stateTopbar.fixed, 'relatived': !stateTopbar.fixed}"
  v-if="$route.breadcrumbs !== undefined"
)
  //- logo
  .logo
    a(v-link="{ name: 'home' }")
      img(src="../../assets/img/icon/logo-white.png")
  //- 面包屑
  ul.breadcrumbs
    li(v-for="item in breadcrumbs")
      i.font-osd.icon-chevronright
      a(
        v-if="item.name != ''"
        v-link="{ name: item.name, params: item.params }"
      ) {{ item.text }}
      span(v-if="item.name === '' && item.text != ''") {{ item.text }}
  //- 菜单按钮
  .btn-menu(
    v-if="stateTopbar.showSideMenuBtn"
    v-bind:class="{ active: stateSidemenu.show }"
  )
    a(v-on:click="toggleSidemenu")
      - for(var i=0;i<3;i++)
        span
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  toggleSidemenu
} from '../../vuex/actions/side-menu'
import {
  setBreadcrumbs
  // bindScroll
} from '../../vuex/actions/topbar'
import {
  checkInWeiXin
} from '../../vuex/action'

module.exports = {
  name: 'topbar',
  vuex: {
    getters: {
      stateTopbar: state => state.topbar,
      stateSidemenu: state => state.sidemenu,
      breadcrumbs: state => state.topbar.breadcrumbs
    },
    actions: {
      toggleSidemenu,
      setBreadcrumbs,
      checkInWeiXin
      // bindScroll
    }
  },
  created: function () {
    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
    // 检测是否在微信内
    this.checkInWeiXin()
  },
  ready: function () {
    // this.bindScroll()
  }
}
</script>
