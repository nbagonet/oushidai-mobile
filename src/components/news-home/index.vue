<template lang="jade">
.page-news-home
  //- topheader
  topheader(v-bind:config="componentConfig.topheader")
  //- 焦点图
  focus-thumb(v-bind:config="componentConfig.focus")
  //- 资讯列表
  news-list(v-bind:config="componentConfig.newsList")
</template>
  
<style lang="less">
@import "./style.less";
</style>

<script>
import {
  toggleSidemenu
} from '../../vuex/actions/side-menu'
import {
  initNewsHome,
  resetNewsHome
} from '../../vuex/actions/news-home'
import {
  setBreadcrumbs
} from '../../vuex/actions/topbar'

module.exports = {
  name: 'news-home',
  vuex: {
    getters: {
      stateSidemenu: state => state.sidemenu,
      componentConfig: state => {
        // console.log(this.$route.params.category)
        return state.newsHome
      }
    },
    actions: {
      toggleSidemenu,
      initNewsHome,
      setBreadcrumbs,
      resetNewsHome
    }
  },
  components: {
    // topheader
    'topheader': (resolve) => {
      require(['../topheader'], resolve)
    },
    // 焦点图
    'focus-thumb': (resolve) => {
      require(['../focus-thumb'], resolve)
    },
    // 资讯列表
    'news-list': (resolve) => {
      require(['../news-list'], resolve)
    }
  },
  route: {
    canReuse: false
  },
  created: function () {
    // 初始化
    this.initNewsHome(this)
  },
  ready: function () {
    // 收起侧边栏菜单
    this.toggleSidemenu(false)

    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>
