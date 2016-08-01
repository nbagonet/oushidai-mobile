<template lang="jade">
.loading-component.animated(
  transition="fade"
)

  //- 列表loading
  .loading-list.animated(
    v-show="type === 'list'"
    transition="fade"
  )
    .inner
      i.font-osd.icon-loading2
      span 加载中...

  //- 全局loading
  .loading-global.animated(
    v-show="type === 'global'"
    transition="fade"
  )
    .inner
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
module.exports = {
  name: 'loading',
  props: ['type'],
  ready: function () {
    // console.log(this)
  }
}
</script>
