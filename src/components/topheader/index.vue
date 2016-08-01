<template lang="jade">
div(v-if="config.show")
  //- 正文页版 begin
  .topheader(
    v-if="$route.name === 'news-view' || $route.name === 'activity-view'"
  )
    //- 返回按钮
    //- .back(v-if="config.backLink")
    //-   a(v-link="{ name: config.backLink }")
    //-     i.font-osd.icon-times
    //-     span 返回
    .back(v-if="config.backLink")
      a(href="javascript:void(0)" v-on:click="back")
        i.font-osd.icon-times
        span 返回
    //- 上一篇
    .prev.animated(
      v-if="config.prev.link && config.prev.id"
      transition="fade"
    )
      a(v-link="{ name: config.prev.link, params: { id: config.prev.id }}")
        i.font-osd.icon-chevronleft
        span 上一篇
    //- 下一篇
    .next.animated(
      v-if="config.next.link && config.next.id"
      transition="fade"
    )
      a(v-link="{ name: config.next.link, params: { id: config.next.id }}")
        span 下一篇
        i.font-osd.icon-chevronright
  //- 正文页版 end

  //- 筛选页 begin
  .topheader(
    v-if="$route.name === 'news-filter' || $route.name === 'activity-filter' || $route.name=== 'advice'"
  )
    //- 返回按钮
    .back
      a(v-on:click="back")
        i.font-osd.icon-times
        span 返回
    .title(v-if="config.title")
      span {{ config.title }}
  //- 筛选页 end
  
  //- 筛选结果页
  .topheader(
  v-if="$route.name === 'news-home' || $route.name === 'activity-home'"
  )
    //- 返回按钮
    .back
      a(v-on:click="back")
        i.font-osd.icon-times
        span 返回
    .title(v-if="config.title")
      span {{ config.title }}
    .btn-filter(v-if="config.filterLink")
      a(v-link="{ name: config.filterLink }")
        span 重新筛选
        i.font-osd.icon-funnel

  //- 机构主页版 begin
  .ocenter-toolbar(
    v-if="info && (info.type === 'mediaOrg' || info.type === 'writer')"
  )
    //- 返回按钮
    .btn-back
      a(v-on:click="back")
        i.font-osd.icon-chevronleft
    //- Todo:更多操作按钮
  //- 机构主页版 end
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
module.exports = {
  name: 'topheader',
  props: ['config', 'info', 'type'],
  methods: {
    back: function () {
      window.history.go(-1)
    }
  }
}
</script>
