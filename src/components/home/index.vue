<template lang="jade">
.page-home

  //- 焦点图
  focus(v-bind:config="compoentConfig.focus")

  //- 资讯
  news(v-bind:config="compoentConfig.news")

  //- 活动
  activity(v-bind:config="compoentConfig.activity")
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
  init
} from '../../vuex/actions/home'

module.exports = {
  name: 'home',
  vuex: {
    getters: {
      stateSidemenu: state => state.sidemenu,
      compoentConfig: state => state.home
    },
    actions: {
      toggleSidemenu,
      setBreadcrumbs,
      init
    }
  },
  components: {
    // 焦点图
    'focus': (resolve) => {
      require(['../focus'], resolve)
    },
    // 资讯
    'news': (resolve) => {
      require(['../home-news'], resolve)
    },
    // 活动
    'activity': (resolve) => {
      require(['../home-activity'], resolve)
    }
  },
  created: function () {
    // 初始化
    this.init(this)
  },
  ready: function () {
    // 收起侧边栏菜单
    this.toggleSidemenu(false)

    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>
