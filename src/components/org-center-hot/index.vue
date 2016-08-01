<template lang="jade">
.org-center-hot.animated(
  v-if="list.length"
  transition="fade"
)
  //- 标题栏
  .title-bar
    i.font-osd.icon-fire
    strong TA的热文
  //- 列表
  ul.list
    li(v-for="(index, item) in list")
      .num
        em {{ index + 1 }}
      .title(v-bind:class="{ 'hasPic': index === 0 }")
        .inner
          .text
            a(v-link="{ name: 'news-view', params: { id: item.id }}") {{ item.title }}
          .author(v-if="index === 0")
            a(v-link="{ name: item.author.type, params: { id: item.author.uid }}") @{{ item.author.name }}
          .time(v-if="index === 0") {{ item.time | formatDateTime }}
      .pic(v-if="index === 0")
        a.inset-shadow-m(v-link="{ name: 'news-view', params: { id: item.id }}")
          img(
            src="../../assets/img/common/blank.png"
            v-bind:style="{ backgroundImage: 'url(' + item.pic + ')' }"
          )
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init,
  resetData
} from '../../vuex/actions/org-center-hot'

module.exports = {
  name: 'org-center-hot',
  props: ['info', 'type'],
  vuex: {
    getters: {
      list: state => state.orgCenterHot.list
    },
    actions: {
      init,
      resetData
    }
  },
  created: function () {
    // 重置
    this.resetData()
  },
  ready: function () {
    // 初始化
    this.init(this)
  }
}
</script>
