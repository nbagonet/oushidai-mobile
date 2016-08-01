<template lang="jade">
.org-center-navbar.animated
  ul

    li(
      v-if="type.split('-')[0] === 'mediaOrg' || type.split('-')[0] === 'eventOrg'"
      v-bind:class="{ 'active': type.split('-')[1] === 'intro' }"
    )
      a(v-link="{ name: type.split('-')[0] + '-intro' }")
        .inner
          span 简介

    li(
      v-if="type.split('-')[0] === 'mediaOrg' || type.split('-')[0] === 'writer'"
      v-bind:class="{ 'active': type.split('-')[1] === 'article'  }"
    )
      a(v-link="{ name: type.split('-')[0] + '-article' }")
        .inner
          em(v-if="info.article | strToNumber") {{ info.article | formatNum }}
          span 文章

    li(
      v-if="type.split('-')[0] === 'eventOrg'"
      v-bind:class="{ 'active': type.split('-')[1] === 'event'  }"
    )
      a(v-link="{ name: type.split('-')[0] + '-event' }")
        .inner
          em(v-if="info.event | strToNumber") {{ info.event | formatNum }}
          span 活动

    li(
      v-if="type.split('-')[0] === 'writer'"
      v-bind:class="{ 'active': type.split('-')[1] === 'like'  }"
    )
      a(v-link="{ name: type.split('-')[0] + '-like' }")
        .inner
          em(v-if="info.liked | strToNumber") {{ info.liked | formatNum }}
          span 赞过

    li(
      v-if="type.split('-')[0] === 'writer'"
      v-bind:class="{ 'active': type.split('-')[1] === 'comments'  }"
    )
      a(v-link="{ name: type.split('-')[0] + '-comments' }")
        .inner
          em(v-if="info.comments | strToNumber") {{ info.comments | formatNum }}
          span 评论

    li(
      v-if="type.split('-')[0] === 'mediaOrg' || type.split('-')[0] === 'writer' || type.split('-')[0] === 'eventOrg'"
      v-bind:class="{ 'active': type.split('-')[1] === 'fans'  }"
    )
      a(v-link="{ name: type.split('-')[0] + '-fans' }")
        .inner
          em(v-if="info.fans | strToNumber") {{ info.fans | formatNum }}
          span 粉丝
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
module.exports = {
  name: 'org-center-navbar',
  props: ['type', 'info']
}
</script>
