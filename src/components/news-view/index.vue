<template lang="jade">
.news-view

  //- topheader
  topheader(
    v-if="!isError"
    v-bind:config="topheaderConfig"
  )

  //- 错误提示
  .error(v-if="isError && !isLoading")
    p
      |读取资讯数据失败或指定的资讯数据不存在
      br
      |请
      a(href="javascript:history.back()") 返回
      |并重试

  //- 正文内容区
  .content.animated(
    v-if="!isError && !isLoading"
  )
    //- 封面区
    .cover
      //- 标签
      .tags
        a.tag.white-nb(
          href="#"
          v-for="tag in newsData.tags"
          data-id="{{ tag.id }}"
        )
          span {{ tag.tag }}
      //- 封面图片
      .pic.inset-shadow-l
        img(v-bind:src="newsData.cover")
    //- 标题栏
    .title-bar
      //- 发布者头像
      .author-avatar
        a.avatar.avatar-md(v-link="{ name: newsData.author.type, params: { id: newsData.author.uid }}")
          img(v-bind:src="newsData.author.avatar")
      //- 标题
      h1 {{{ newsData.title }}}
    //- 附加内容
    .title-attr
      //- 作者昵称
      .author
        a(v-link="{ name: newsData.author.type, params: { id: newsData.author.uid }}") @{{ newsData.author.name }}
      //- 发布时间
      .time {{ newsData.time | formatDateTime }}
      //- 浏览数
      .count-pv(v-if="newsData.view.num | strToNumber")
        i.font-osd.icon-eye
        span {{ newsData.view.num | formatNum }}
      //- 点赞数
      .count-like(v-if="newsData.like.num | strToNumber")
        i.font-osd.icon-like
        span {{ newsData.like.num | formatNum }}
      //- 评论数
      .count-comments(v-if="newsData.comment.num | strToNumber")
        i.font-osd.icon-messagebox
        span {{ newsData.comment.num | formatNum }}
    //- 正文内容
    .article
      .inner.typo {{{ newsData.content | optimizeContent }}}

    //- 作者信息
    .author-info-block
      user-info-block(
        v-bind:info="authorInfo"
        v-bind:uid="newsData.author.uid"
        v-show="authorInfo"
      )

  //- 相关列表
  .releated-list-block
    releated-list(
      v-bind:config="releatedListConfig"
      v-show="releatedListConfig.list"
    )

  //- 底部工具栏
  toolbar(v-bind:config="bottomToolbarConfig")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  setBreadcrumbs
} from '../../vuex/actions/topbar'
import {
  initNewsView,
  resetNewsView
} from '../../vuex/actions/news-view'

module.exports = {
  name: 'news-view',
  vuex: {
    getters: {
      topheaderConfig: state => state.newsView.topheaderConfig,
      bottomToolbarConfig: state => state.newsView.bottomToolbarConfig,
      releatedListConfig: state => state.newsView.releatedListConfig,
      isError: state => state.newsView.isError,
      isLoading: state => state.loading,
      newsData: state => state.newsView.newsData,
      breadcrumbs: state => state.topbar.breadcrumbs,
      authorInfo: state => state.newsView.authorInfo
    },
    actions: {
      setBreadcrumbs,
      initNewsView,
      resetNewsView
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
    // 用户信息块
    'user-info-block': (resolve) => {
      require(['../user-info-block'], resolve)
    },
    // 相关列表
    'releated-list': (resolve) => {
      require(['../related-list'], resolve)
    },
    // 工具栏
    'toolbar': (resolve) => {
      require(['../toolbar'], resolve)
    }
  },
  route: {
    canReuse: false
  },
  ready: function () {
    // 重置
    this.resetNewsView()
    // 初始化
    this.initNewsView(this)
    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>
