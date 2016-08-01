<template lang="jade">
.news-filter

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
  initNewsFilter
} from '../../vuex/actions/news-filter'

module.exports = {
  name: 'news-filter',
  vuex: {
    getters: {
      topheaderConfig: state => {
        console.log('state', state)
        return state.newsFilter.topheaderConfig
      },
      filterConfig: state => {
        console.log('filterConfig', state.newsFilter.filterConfig)
        return state.newsFilter.filterConfig
      },
      isLoading: state => state.newsFilter.loading,
      breadcrumbs: state => state.topbar.breadcrumbs
    },
    actions: {
      setBreadcrumbs,
      initNewsFilter
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
    this.initNewsFilter()
  },
  ready: function () {
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>