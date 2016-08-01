<template lang="jade">
.register
  router-view(
    transition="appslide"
    transition-mode="in-out"
  )
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  setBreadcrumbs
} from '../../vuex/actions/topbar'
import {
  toggleSidemenu
} from '../../vuex/actions/side-menu'
module.exports = {
  name: 'register',
  vuex: {
    getters: {
      stateSidemenu: state => state.sidemenu,
      breadcrumbs: state => state.topbar.breadcrumbs
    },
    actions: {
      toggleSidemenu,
      setBreadcrumbs
    }
  },
  ready: function () {
    // 关闭侧边栏菜单
    this.toggleSidemenu(false)
    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>
