<template lang="jade">
.org-center-activity
  //- 活动列表
  activity-list(v-bind:config="compoentConfig.activityList")
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
} from '../../vuex/actions/org-center-activity'

module.exports = {
  name: 'org-center-activity',
  props: ['type', 'info'],
  vuex: {
    getters: {
      stateSidemenu: state => state.sidemenu,
      compoentConfig: state => state.orgCenterActivity
    },
    actions: {
      toggleSidemenu,
      setBreadcrumbs,
      init
    }
  },
  components: {
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
