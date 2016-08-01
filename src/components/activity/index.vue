<template lang="jade">
.page-activity
  //- 路由容器
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
  toggleSidemenu
} from '../../vuex/actions/side-menu'
import {
  setBreadcrumbs
} from '../../vuex/actions/topbar'

module.exports = {
  name: 'activity',
  vuex: {
    getters: {
      stateSidemenu: state => state.sidemenu,
      loading: state => state.loading
    },
    actions: {
      toggleSidemenu,
      setBreadcrumbs
    }
  },
  // route: {
  //   activate: function (transition) {
  //     if (!this.loading) {
  //       transition.next()
  //     }
  //   }
  // },
  ready: function () {
    this.toggleSidemenu(false)

    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>
