<template lang="jade">
.activity-view

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
    v-if="!isError && !isLoading && activityData"
  )
    //- 封面区
    .cover
      //- 标签
      .tags
        a.tag.white-nb(
          href="javascript:void(0)"
          v-for="tag in activityData.tags"
          data-id="tag.id"
        )
          span {{ tag.tag }}
      //- 封面图片
      .pic.inset-shadow-l
        img(v-bind:src="activityData.cover")
      //- 活动信息
      .activity-info
        //- 起止时间
        ul.activity-date
          li(v-if="activityData.info[0].time.start") {{{ activityData.info[0].time.start | coverDate }}}
          li(v-if="activityData.info[0].time.end && activityData.info[0].time.start.split(' ')[0] !== activityData.info[0].time.end.split(' ')[0]") {{{ activityData.info[0].time.end | coverDate }}}
        //- 费用 和 城市
        .activity-pandc
          //- 费用
          .activity-price(v-bind:class="{ 'equally': activityData.info[0].price_type === 'aa', 'others': activityData.info[0].price_type === 'other', 'free': activityData.info[0].price === '' && activityData.info[0].price_type !== 'aa' && activityData.info[0].price_type !== 'other' }")
            span(v-if="activityData.info[0].price_type === 'aa'") 平摊费用
            span(v-if="activityData.info[0].price_type === 'other'") 其他
            span(v-if="activityData.info[0].price === '' && activityData.info[0].price_type !== 'aa' && activityData.info[0].price_type !== 'other'") 免费
            span(v-if="activityData.info[0].price_type !== 'aa' && activityData.info[0].price_type !== 'other' && activityData.info[0].price !== ''")
              strong {{ activityData.info[0].price }}
              small €
          //- 城市
          .activity-city
            i.font-osd.icon-lbsmark
            span {{ activityData.info[0].city }}
    //- 标题栏
    .title-bar
      //- 发布者头像
      .author-avatar
        a.avatar.avatar-md(v-link="{ name: activityData.author.type, params: { id: activityData.author.uid }}")
          img(v-bind:src="activityData.author.avatar")
        //- a.avatar.avatar-md
        //-   img(v-bind:src="activityData.author.avatar")
      //- 标题
      h1 {{{ activityData.title }}}
    //- 附加内容
    .title-attr
      //- 作者昵称
      .author
        a(v-link="{ name: activityData.author.type, params: { id: activityData.author.uid }}") @{{ activityData.author.name }}
        //- |@{{ activityData.author.name }}
      //- 发布时间
      .time {{ activityData.pub_time | formatDateTime }}
      //- 点赞数
      //- .count-like(v-if="activityData.like.num | strToNumber")
      //-   i.font-osd.icon-like
      //-   span {{ activityData.like.num | formatNum }}
      //- 评论数
      //- .count-comments(v-if="activityData.comment.num | strToNumber")
      //-   i.font-osd.icon-messagebox
      //-   span {{ activityData.comment.num | formatNum }}
    //- 主要内容
    .main-content
      //- 主办方
      .main-item-1(v-if="activityData.author.name")
        span
          i.font-osd.icon-usersuit
        strong
          div {{ activityData.author.name }}
        //- em
        //-   i.font-osd.icon-chevronright
      //- 活动时间
      .main-item-1(
        v-if="activityData.info[0].time.start && activityData.info[0].time.end"
        v-bind:class="{ 'expand': expandItem === 1 }"
      )
        span
          i.font-osd.icon-clock
        strong(v-on:click="setExpandItem(1)")
          div {{ activityData.info[0].time.start }} 至 {{ activityData.info[0].time.end }}
        em(v-on:click="setExpandItem(1)")
          i.font-osd.icon-chevronright
      //- 地址
      .main-item-1(v-if="activityData.info[0].addr || activityData.info[0].city || activityData.info[0].zip || activityData.info[0].country")
        span
          i.font-osd.icon-lbsmark
        strong
          div
            a(href="https://www.google.com/maps/place/{{ activityData.info[0].addr }},{{ activityData.info[0].city }},{{ activityData.info[0].zip }},{{ activityData.info[0].country }}" target="_blank") {{ activityData.info[0].addr }}, {{ activityData.info[0].city }}, {{ activityData.info[0].zip }}, {{ activityData.info[0].country }}
        em
          a(href="https://www.google.com/maps/place/{{ activityData.info[0].addr }},{{ activityData.info[0].city }},{{ activityData.info[0].zip }},{{ activityData.info[0].country }}" target="_blank")
            i.font-osd.icon-chevronright
      //- 费用
      .main-item-1
        span
          i.font-osd.icon-ticket
        strong
          div(v-if="!activityData.info[0].price") 免费
          div(v-if="activityData.info[0].price | strToNumber") {{ activityData.info[0].price }}€
          i.font-osd.text-green.icon-infocircle(v-if="activityData.price_info")
        em(
          v-if="activityData.price_info"
          v-on:click="setActivityInfoContent(1)"
        )
          i.font-osd.icon-chevronright
      //- 名额
      .main-item-1
        span
          i.font-osd.icon-chair
        strong
          div(v-if="activityData.info[0].number.max === '0' || activityData.info[0].number.max === 0") 不限
          div(v-if="activityData.info[0].number.max | strToNumber") {{ activityData.info[0].number.max }}人
        span(
          v-on:click="setActivityInfoContent(2)"
        )
          i.font-osd.icon-infocircle
        strong(
          v-on:click="setActivityInfoContent(2)"
        )
          div 咨询
        em(
          v-on:click="setActivityInfoContent(2)"
        )
          i.font-osd.icon-chevronright
      //- 参与列表
      .main-item-1(v-bind:class="{ 'expand': expandItem === 2 }")
        span
          i.font-osd.icon-hand
        strong
          div(v-if="!activityData.sign_list") 暂无
          div.avatar-list(
            v-if="activityData.sign_list"
            v-on:click="setExpandItem(2)"
          )
            .avatar.avatar-md(v-for="item in activityData.sign_list")
              img(v-bind:src="item.avatar")
        em(
          v-if="activityData.sign_list.length > 6"
          v-on:click="setExpandItem(2)"
        )
          i.font-osd.icon-chevronright
  //- 说明内容
  .info-content(v-if="!isError && !isLoading && activityData")
    //- 标签
    ul.info-tab
      li(
        v-if="activityData.description"
        v-bind:class="{ 'active': activeInfoContent === 0 }"
        v-on:click="setActivityInfoContent(0)"
      )
        span 详细描述
      li(
        v-bind:class="{ 'active': activeInfoContent === 1 }"
        v-on:click="setActivityInfoContent(1)"
      )
        span 费用说明
      li(
        v-bind:class="{ 'active': activeInfoContent === 2 }"
        v-on:click="setActivityInfoContent(2)"
      )
        span 联系方式
      li(
        v-if="activityData.disclaimer"
        v-bind:class="{ 'active': activeInfoContent === 3 }"
        v-on:click="setActivityInfoContent(3)"
      )
        span 免责声明
    //- 详细描述
    .info-con(
      v-if="activityData.description"
      v-show="activeInfoContent === 0"
    ) 
      div {{{ activityData.description }}}
      #detail-tail
        .detail-info
          .title 费用说明
          .detail {{{ activityData.price_info }}}
        .detail-info
          .title 联系方式
          ul.detail
            li(v-if="activityData.contact.tel")
              strong 电话:
              span {{ activityData.contact.tel }}
            li(v-if="activityData.contact.email")
              strong 邮箱:
              span {{ activityData.contact.email }}
            li(v-if="activityData.contact.site")
              strong 网址:
              span: a(href="{{ activityData.contact.site }}") {{ activityData.contact.site }}
    //- 费用说明
    .info-con(
      v-show="activeInfoContent === 1"
    ) {{{ activityData.price_info }}}
    //- 联系方式
    .info-con(
      v-show="activeInfoContent === 2"
    )
      ul
        li(v-if="activityData.contact.tel")
          strong 电话:
          span {{ activityData.contact.tel }}
        li(v-if="activityData.contact.email")
          strong 邮箱:
          span {{ activityData.contact.email }}
        li(v-if="activityData.contact.site")
          strong 网址:
          span: a(href="{{ activityData.contact.site }}") {{ activityData.contact.site }}
    //- 详细描述
    .info-con(
      v-if="activityData.disclaimer"
      v-show="activeInfoContent === 3"
    )
      p
        | 1.欧时代是一个开放平台，用户或机构将文章或照片等资料上传到互联网上，有可能会 被其他组织或个人复制、转载、擅改或做其他非法用途，用户必须充分意识此类风险的存在。作为网络服务的提供者，我们对用户在任何信息发布、个人主页或其他互动 区域提供的任何陈述、声明或内容均不承担责任。您明确同意使用欧时代平台所存在的风险或产生的一切后果将完全由您自身承担，我们对上述风险或后果不 承担任何责任。
      p
        | 2.您违反本服务条款、违反道德或法律的，侵犯他人权利的，我们不承担任何责任。同时，我们对任何第三方通过有欧时代平台发送服务或包含在服务中的任何内容不承担责任。
      p
        | 3.用户在欧时代平台发布的活动和内容侵犯他人知识产权和其他合法权益时，布凡有权立即删除，并保留移交司法机关处理的权利。
      p
        | 4.对您、其他用户或任何第三方发布、存储或上传的任何内容或由该等内容导致的任何损失或损害，我们不承担责任。
      p
        | 5.对任何第三方通过欧时代平台可能对您造成的任何错误、中伤、诽谤、诬蔑、不作为、谬误、淫秽、色情或亵渎，我们不承担责任。
      p
        | 6. 欧时代有权认为，所有使用欧时代发起活动的用户，均已仔细看过本条款并完全同意。

  //- 作者信息
  .author-info-block(v-if="activityData")
    user-info-block(
      v-bind:info="authorInfo"
      v-bind:uid="activityData.author.uid"
      v-show="authorInfo"
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
  initActivityView,
  resetActivityView,
  setActivityInfoContent,
  setExpandItem
} from '../../vuex/actions/activity-view'
import {
  getStringLength
} from '../../vuex/action'

module.exports = {
  name: 'activity-view',
  vuex: {
    getters: {
      topheaderConfig: state => state.activityView.topheaderConfig,
      bottomToolbarConfig: state => state.activityView.bottomToolbarConfig,
      releatedListConfig: state => state.activityView.releatedListConfig,
      isError: state => state.activityView.isError,
      isLoading: state => state.loading,
      activityData: state => state.activityView.activityData.data,
      breadcrumbs: state => state.topbar.breadcrumbs,
      authorInfo: state => state.activityView.authorInfo,
      activeInfoContent: state => state.activityView.activeInfoContent,
      expandItem: state => state.activityView.expandItem
    },
    actions: {
      setBreadcrumbs,
      initActivityView,
      resetActivityView,
      getStringLength,
      setActivityInfoContent,
      setExpandItem
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
    this.resetActivityView()
    // 初始化
    this.initActivityView(this)
    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>
