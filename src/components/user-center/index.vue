<template lang="jade">
.user-center
  //- 路由容器
  router-view
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  toggleSidemenu
} from '../../vuex/actions/side-menu'
module.exports = {
  name: 'user-center',
  vuex: {
    getters: {
      stateSidemenu: state => state.sidemenu
    },
    actions: {
      toggleSidemenu
    }
  },
  ready: function () {
    this.toggleSidemenu(false)
  }
}
</script>
