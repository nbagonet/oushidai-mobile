<template lang="jade">
.org-center-similar(
  v-if="list.length"
  transition="fade"
)
  //- 标题栏
  .title-bar
    i.font-osd.icon-starfat
    strong 相似媒体机构
  //- 列表
  ul.list
    li(v-for="(index, item) in list")
      //- 头像
      .user-pic
        a.avatar.avatar-md(v-link="{ name: item.type, params: { id: item.uid }}")
          .pic
            img(
              src="../../assets/img/common/blank.png"
              v-bind:style="{ backgroundImage: 'url(' + item.avatar + ')' }"
            )
      //- 信息
      .user-info
        .name
          a(v-link="{ name: item.type, params: { id: item.uid }}")
            span {{ item.name }}
            i.font-osd.icon-star.text-standard-blue
        .tags(v-if="item.tags.length")
          i.font-osd.icon-tagleft
          span(v-for="tag in item.tags")
            em {{ tag.tag }}
        .others
          .local(v-if="item.local != ''")
            i.font-osd.icon-lbsmark
            span {{ item.local }}
          .article(v-if="item.article | strToNumber")
            i.font-osd.icon-readbook
            span {{ item.article | formatNum }}
          .fans(v-if="item.fans | strToNumber")
            span {{ item.fans | formatNum }} 粉丝
      //- TODO：关注按钮
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init,
  resetData
} from '../../vuex/actions/org-center-similar'

module.exports = {
  name: 'org-center-similar',
  props: ['info', 'type'],
  vuex: {
    getters: {
      list: state => state.orgCenterSimilar.list
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
