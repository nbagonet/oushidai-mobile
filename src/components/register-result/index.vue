<template lang="jade">
.register-result

  //- TODO: 注册成功
  .register-success(
    v-if="$route.name === 'register-success'"
  )
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
module.exports = {
  name: 'register-result'
}
</script>
