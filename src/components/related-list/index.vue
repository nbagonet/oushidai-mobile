<template lang="jade">
.releated-list(v-show="!isLoading")

  //- 相关资讯
  .related-news-list(v-if="config.type === 'news'")
    .news-item.animated(
      v-for="(index, item) in config.list"
      transition="fade"
    )
      //- 图片区
      .pic-box
        //- 图片
        .pic: a.inset-shadow-m(v-link="{ name: 'news-view', params: { id: item.id }}")
          img(
            src="../../assets/img/common/blank.png"
            v-bind:style="{ backgroundImage: 'url(' + item.pic + ')' }"
          )
      //- 内容区
      .con-box
        //- 标题
        .title
          a(v-link="{ name: 'news-view', params: { id: item.id }}") {{ item.title }}
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
module.exports = {
  name: 'releated-list',
  props: ['config'],
  vuex: {
    getters: {
      isLoading: state => state.newsView.isLoading
    }
  }
}
</script>
