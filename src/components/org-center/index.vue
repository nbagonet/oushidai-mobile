<template lang="jade">
.org-center

  //- topheader
  topheader(
    v-bind:type="$route.name.split('-')[0]"
    v-bind:info="userInfo"
  )

  //- 用户banner
  user-banner(
    v-bind:type="$route.name.split('-')[0]"
    v-bind:userid="$route.params.id"
  )

  //- 导航
  org-center-navbar(
    v-bind:type="$route.name"
    v-bind:info="userInfo"
  )

  //- 路由容器
  router-view(
    v-bind:type="$route.name.split('-')[0]"
    v-bind:info="userInfo"
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
import {
  resetUserBanner
} from '../../vuex/actions/user-banner'

module.exports = {
  name: 'org-center',
  vuex: {
    getters: {
      stateSidemenu: state => state.sidemenu,
      loading: state => state.loading,
      userInfo: state => state.userBanner
    },
    actions: {
      toggleSidemenu,
      setBreadcrumbs,
      resetUserBanner
    }
  },
  components: {
    // topheader
    'topheader': (resolve) => {
      require(['../topheader'], resolve)
    },
    // 用户banner组件
    'user-banner': (resolve) => {
      require(['../user-banner'], resolve)
    },
    // 导航
    'org-center-navbar': (resolve) => {
      require(['../org-center-navbar'], resolve)
    }
  },
  route: {
    activate: function (transition) {
      if (!this.loading) {
        transition.next()
      }
    }
  },
  ready: function () {
    this.toggleSidemenu(false)
    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>
