<template lang="jade">
.news-list

  //- 无数据提示
  .news-list-nodata.animated(
    v-if="nodata"
    transition="fade"
  )
    p 暂无相关内容

  //- 资讯列表单元
  .news-item.animated(
    v-for="(index, item) in list"
    transition="fade"
    v-bind:class="{ 'comment-item': item.contentId }"
  )
    //- 图片区
    //- 评论列表不显示图片
    .pic-box(
      v-if="!item.contentId"
    )
      //- 标签
      .tags
        //- a.tag.white-nb(
        //-   href="javascript:void(0)"
        //-   data-id="{{ item.tags[0].id }}"
        //- )
        //-   span {{ item.tags[0].tag }}
        a.tag.white-nb(
          v-link="{name: 'news-home', query: { tagid: item.tags[0].id }}"
          data-id="{{ item.tags[0].id }}"
        )
          span {{ item.tags[0].tag }}
      //- 图片
      .pic: a.inset-shadow-l(
        v-link="{ name: 'news-view', params: { id: item.id }}"
        v-on:click="setActived(this)"
      )
        img(
          src="../../assets/img/common/blank.png"
          v-bind:style="{ backgroundImage: 'url(' + item.pic + ')' }"
        )
      //- 点击遮罩层
      .click-cover
        i.font-osd.icon-eye
        span {{ item.view.num | formatNum }}
    //- 内容区
    .con-box
      //- 标题
      .title
        //- 资讯版
        span(v-if="item.contentId")
          a(
            v-if="item.type === 'news' || item.type ==='information'"
            v-link="{ name: 'news-view', params: { id: item.contentId }}"
            v-on:click="setActived(this)"
          ) {{ item.title }}
        span(v-else)
          a(
            v-if="item.type === 'news' || item.type ==='information'"
            v-link="{ name: 'news-view', params: { id: item.id }}"
            v-on:click="setActived(this)"
          ) {{ item.title }}
        //- 活动版
        span(v-if="item.contentId")
          a(
            v-if="item.type === 'event' || item.type === 'activity'"
            v-link="{ name: 'activity-view', params: { id: item.contentId }}"
            v-on:click="setActived(this)"
          ) {{ item.title }}
        span(v-else)
          a(
            v-if="item.type === 'event' || item.type === 'activity'"
            v-link="{ name: 'activity-view', params: { id: item.id }}"
            v-on:click="setActived(this)"
          ) {{ item.title }}
      //- 评论内容
      .comment-info(
        v-if="item.contentId"
      ) {{ item.info }}
      //- 信息
      .attr(v-if="!item.contentId")
        .author
          a.avatar.avatar-md(
            v-link="{ name: item.author.type, params: { id: item.author.uid }}"
            v-if="!item.contentId"
          )
            .pic
              img(
                src="../../assets/img/common/blank.png"
                v-bind:style="{ backgroundImage: 'url(' + item.author.avatar + ')' }"
              )
          a.avatar.avatar-md(
            v-if="item.contentId"
          )
            .pic
              img(
                src="../../assets/img/common/blank.png"
                v-bind:style="{ backgroundImage: 'url(' + item.author.avatar + ')' }"
              )
          .info(v-if="item.author.name != ''")
            .name
              span
                //- a(v-link="{ name: item.author.type, params: { id: item.author.uid }}") {{ item.author.name }}
                |{{ item.author.name || item.author.nickname }}
            .time {{ item.time | formatDateTime }}
        .count
          .comments-num(v-if="config.showCommentsNum && item.comment.num | strToNumber")
            i.font-osd.icon-messagebox
            span {{ item.comment.num | formatNum }}
          .like-num(v-if="config.showLikedNum && item.like.num | strToNumber")
            i.font-osd.icon-like
            span {{ item.like.num | formatNum }}
          .like-num(v-if="config.showViewNum && item.view.num | strToNumber")
            i.font-osd.icon-eye
            span {{ item.view.num | formatNum }}
  //- loading
  loading(
    v-show="loading"
    type="list"
  )
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init,
  setNewsItemActived,
  reset,
  stopCheckLoadArea
} from '../../vuex/actions/news-list'
import {
  setBreadcrumbs
} from '../../vuex/actions/topbar'

module.exports = {
  name: 'news-list',
  props: ['config'],
  vuex: {
    getters: {
      list: state => state.newsList.list,
      nodata: state => state.newsList.isNoData,
      locked: state => state.newsList.isLocked,
      loading: state => state.newsList.isLoading,
      port: state => state.newsList.port,
      first: state => state.newsList.first
    },
    actions: {
      init,
      setNewsItemActived,
      setBreadcrumbs,
      reset,
      stopCheckLoadArea
    }
  },
  components: {
    // loading组件
    'loading': (resolve) => {
      require(['../loading'], resolve)
    }
  },
  methods: {
    setActived: function (obj) {
      setNewsItemActived(obj.$index)
    }
  },
  ready: function () {
    // 初始化
    this.init(this)
    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  },
  destroyed: function () {
    console.log('销毁资讯列表组件')
    // 停止监测滚动
    this.stopCheckLoadArea()
    // 重置组件状态
    this.reset(this)
  }
}
</script>
