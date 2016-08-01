<template lang="jade">
.org-center-like
  //- 文章列表
  news-list(v-bind:config="compoentConfig")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init
} from '../../vuex/actions/org-center-like'

module.exports = {
  name: 'org-center-like',
  props: ['type', 'info'],
  vuex: {
    getters: {
      compoentConfig: state => state.orgCenterLike
    },
    actions: {
      init
    }
  },
  components: {
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
    this.init(this)
  }
}
</script>
