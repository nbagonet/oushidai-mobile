<template lang="jade">
.user-info-block(v-bind:class="{ 'active': active }"): .inner
  //- 头像
  a.author-avatar(v-on:click="active = false" v-link="{ name: info.type, params: { id: uid }}")
    .avatar.avatar-xl: .pic: img(v-bind:src="info.avatar")
  //- 信息
  .author-info(v-on:click="active = false")
    //- 昵称和身份
    .nick
      a.name(v-link="{ name: info.type, params: { id: uid }}") {{ info.name | substr2 10 true }}
      .atype(v-if="info.type != 'user'")
        //- 资讯达人
        .user-title(v-if="info.type === 'writer'")
          i.font-osd.icon-star.text-standard-blue
          span(v-if="info.level != ''") {{ info.level }}
          em 资讯达人
        //- 媒体机构
        .user-title(v-if="info.type === 'mediaOrg'")
          i.font-osd.icon-star.text-standard-blue
          span(v-if="info.level != ''") {{ info.level }}
          em 媒体机构
        //- 活动机构
        .user-title(v-if="info.type === 'eventOrg'")
          i.font-osd.icon-star.text-green
          span(v-if="info.level != ''") {{ info.level }}
          em 活动机构
    //- 简介
    .intro(v-if="info.intro != ''") {{ info.intro | substr2 28 true }}
    //- 统计
    .count
      //- 粉丝数
      span 粉丝: {{ info.fans | formatNum }}
      //- 文章数
      span(v-if="info.type === 'writer' || info.type === 'mediaOrg'") 文章: {{ info.article | formatNum }}
      //- 活动数
      span(v-if="info.type === 'eventOrg'") 活动: {{ info.event | formatNum }}
  //- 操作按钮
  .act(v-bind:class="{ 'active': active }")
    .link
      a(v-link="{ name: info.type, params: { id: uid }}") 主页
    .btn(v-on:click="active = true")
      span
      span
      span
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
module.exports = {
  name: 'user-info-block',
  props: ['info', 'uid'],
  data: function () {
    return {
      active: false
    }
  },
  ready: function () {
    // console.log(this.info, this.uid)
  }
}
</script>
