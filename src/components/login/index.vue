<template lang="jade">
.login
  |登录
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  toggleSidemenu
} from '../../vuex/actions/side-menu'
module.exports = {
  name: 'login',
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
