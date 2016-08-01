<template lang="jade">
.feedback

  topheader(
    v-if="!isError"
    v-bind:config="topheaderConfig"
  )
  form.content
    input.info(type="text" placeholder="您的邮箱/电话")
    textarea(placeholder="我要吐槽")
    .error 
    input.submit(type="submit" value="提交")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import { submitFeedback } from '../../vuex/actions/feedback.js'

module.exports = {
  name: 'feedback',
  vuex: {
    getters: {
      topheaderConfig: state => {
        console.log('111', state.feedback.topheaderConfig)
        return state.feedback.topheaderConfig
      }
    },
    actions: {
      submitFeedback
    }
  },
  components: {
    'topheader': (resolve) => {
      require(['../topheader'], resolve)
    }
  },
  ready: function () {
    this.submitFeedback(this)
  }
}
</script>
