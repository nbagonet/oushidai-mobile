<template lang="jade">
.org-center-article
  //- 文章列表
  news-list(v-bind:config="compoentConfig.newsList")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init
} from '../../vuex/actions/org-center-article'

module.exports = {
  name: 'org-center-article',
  props: ['type', 'info'],
  vuex: {
    getters: {
      compoentConfig: state => state.orgCenterArticle
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
