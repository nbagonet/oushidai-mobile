<template lang="jade">
.page-activity-home
  //- topheader
  topheader(v-bind:config="componentConfig.topheader")
  //- 活动焦点图
  focus-thumb(v-bind:config='componentConfig.focusThumb')
  //- 活动列表
  activity-list(v-bind:config="componentConfig.activityList")
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
  initEventHome
} from '../../vuex/actions/activity-home'
import {
  scrollTopPos,
  scrollTo
} from '../../vuex/action'
module.exports = {
  name: 'activity-home',
  vuex: {
    getters: {
      stateSidemenu: state => state.sidemenu,
      componentConfig: state => state.activityHome
    },
    actions: {
      toggleSidemenu,
      setBreadcrumbs,
      initEventHome,
      scrollTopPos,
      scrollTo
    }
  },
  components: {
    // topheader
    'topheader': (resolve) => {
      require(['../topheader'], resolve)
    },
    // 焦点图
    'focus-thumb': (resolve) => {
      console.log('temp', resolve)
      require(['../focus-thumb'], resolve)
    },
    // 活动列表
    'activity-list': (resolve) => {
      require(['../activity-list'], resolve)
    }
  },
  route: {
    canReuse: false
  },
  created: function () {
    // 初始化
    this.initEventHome(this)
  },
  ready: function () {
    // 收起侧边栏菜单
    this.toggleSidemenu(false)

    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
    // 滚动到上次的位置
    console.log('1111', this.$store.state.activityHome.scroll)
    this.scrollTo(200)
  },
  beforeDestory: function () {
    console.log('222', this.scrollTopPos())
    this.$dispatch('SET_EVENT_HOME_SCROLL', this.scrollTopPos())
  }
}
</script>
