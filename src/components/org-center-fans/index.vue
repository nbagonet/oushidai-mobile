<template lang="jade">
.org-center-fans
  //- 粉丝列表
  org-center-fans-list(
    v-bind:type="type"
    v-bind:info="info"
    v-bind:config="compoentConfig"
  )
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init
} from '../../vuex/actions/org-center-fans'

module.exports = {
  name: 'org-center-fans',
  props: ['type', 'info'],
  components: {
    'org-center-fans-list': (resolve) => {
      require(['../user-list'], resolve)
    }
  },
  vuex: {
    getters: {
      compoentConfig: state => state.orgCenterFans
    },
    actions: {
      init
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
