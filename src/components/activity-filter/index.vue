<template lang="jade">
.activity-filter

  //- topheader
  topheader(
    v-bind:config="topheaderConfig"
  )
  
  //- filter
  filter(v-bind:config="filterConfig")
  
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  setBreadcrumbs
} from '../../vuex/actions/topbar'
import {
  initActivityFilter
} from '../../vuex/actions/activity-filter'

module.exports = {
  name: 'activity-filter',
  vuex: {
    getters: {
      topheaderConfig: state => state.activityFilter.topheaderConfig,
      filterConfig: state => state.activityFilter.filterConfig,
      isLoading: state => state.activityFilter.loading,
      breadcrumbs: state => state.topbar.breadcrumbs
    },
    actions: {
      setBreadcrumbs,
      initActivityFilter
    }
  },
  components: {
    // topheader
    'topheader': (resolve) => {
      require(['../topheader'], resolve)
    },
    // loading组件
    'loading': (resolve) => {
      require(['../loading'], resolve)
    },
    // 过滤
    'filter': (resolve) => {
      require(['../filter'], resolve)
    }
  },
  created: function () {
    this.initActivityFilter(this)
  },
  ready: function () {
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>