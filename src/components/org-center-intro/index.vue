<template lang="jade">
.org-center-intro.animated(
  transition="fade"
)

  //- 媒体机构用 begin
  //- 介绍
  org-center-intro-blk(
    v-if="type === 'mediaOrg'"
    v-bind:info="info"
    v-bind:type="type"
  )

  //- 热文
  org-center-hot(
    v-if="type === 'mediaOrg'"
    v-bind:info="info"
    v-bind:type="type"
  )

  //- 相似的
  org-center-similar(
    v-if="type === 'mediaOrg'"
    v-bind:info="info"
    v-bind:type="type"
  )
  //- 媒体机构用 end

  //- 活动机构用 begin
  org-center-intro-activity(
    v-if="type === 'eventOrg'"
    v-bind:info="info"
    v-bind:type="type"
  )
  //- 活动机构用 end

</template>

<style lang="less">
@import "./style.less";
</style>

<script>
module.exports = {
  name: 'org-center-intro',
  props: ['info', 'type'],
  components: {
    // 媒体机构 begin
    // 介绍
    'org-center-intro-blk': (resolve) => {
      require(['../org-center-intro-blk'], resolve)
    },
    // 热文
    'org-center-hot': (resolve) => {
      require(['../org-center-hot'], resolve)
    },
    // 相似的
    'org-center-similar': (resolve) => {
      require(['../org-center-similar'], resolve)
    },
    // 媒体机构 end
    // 活动机构 begin
    'org-center-intro-activity': (resolve) => {
      require(['../org-center-intro-activity'], resolve)
    }
    // 活动机构 end
  },
  ready: function () {
    console.log(this.info)
  }
}
</script>
