<template lang="jade">
#app
  //- 侧边栏菜单
  side-menu

  .page(v-bind:class="{ 'lockScroll': lockScroll || stateSidemenu.show }")
    //- 顶栏
    topbar

    //- 路由容器
    .view
      router-view(
        transition="appslide"
        transition-mode="in-out"
      )
    bottombar
  //- 全局loading
  loading(
    v-show="loading"
    type="global"
  )
</template>

<style lang="less">
@import '../less/conf.less';
@import '../less/base.less';
@import '../less/font.less';
@import "./style.less";
</style>

<script>
import store from '../vuex/store'
import setApp from '../vuex/action'

module.exports = {
  name: 'entrance',
  store,
  vuex: {
    getters: {
      lockScroll: state => state.lockScroll,
      stateSidemenu: state => state.sidemenu,
      loading: state => state.loading,
      state: state => state,
      bottombar: state => state.bottombar
    },
    actions: {
      setApp
    }
  },
  components: {
    // 顶栏
    'topbar': (resolve) => {
      require(['../components/topbar'], resolve)
    },
    // 底栏
    'bottombar': (resolve) => {
      require(['../components/bottombar'], resolve)
    },
    // 侧边菜单
    'side-menu': (resolve) => {
      require(['../components/side-menu'], resolve)
    },
    // loading
    'loading': (resolve) => {
      require(['../components/loading'], resolve)
    }
  },
  created: function () {
    console.log('entrance', this.setApp)
  },
  ready: function () {
    // this.setApp(this)
    // console.log('ready', this)
  }
}
</script>
