<template lang="jade">
.register-form

  //- 工具栏
  .register-toolbar
    //- 返回按钮
    a.btn-back(
      v-on:click="back"
      v-if="$route.name !== 'register-union'"
    )
      i.font-osd.icon-chevronleft
    //- 登录入口
    a.btn-login(
      v-link="{ name: 'login' }"
      v-if="$route.name !== 'register-union'"
    ) 登录已有账号

  //- 表单
  validator(name="validationRegister")
    form(novalidate)
      //- 邮箱
      .form-control
        input(
          type="email"
          placeholder="邮箱地址"
          initial="off"
          detect-change="off"
          detect-blur="on"
          v-on:focus="toggleLockScroll"
          v-model="params.email"
          v-validate:email="['email']"
          v-bind:disabled="loading"
        )
        .error.animated(
          v-show="$validationRegister.email.email"
          transition="fade"
        )
          i.font-osd.icon-exclamationtriangle
          span {{ $validationRegister.email.email }}
      //- 昵称
      .form-control
        input(
          type="text"
          placeholder="昵称"
          v-bind:value="$route.query.nick"
          v-on:focus="toggleLockScroll"
          initial="off"
          detect-change="off"
          detect-blur="on"
          v-model="params.nickname"
          v-validate:nickname="['nickname']"
          v-bind:disabled="loading"
        )
        .error.animated(
          v-show="$validationRegister.nickname.nickname"
          transition="fade"
        )
          i.font-osd.icon-exclamationtriangle
          span {{ $validationRegister.nickname.nickname }}
      //- 密码
      .form-control
        input(
          type="password"
          placeholder="创建密码"
          v-on:focus="toggleLockScroll"
          initial="off"
          detect-change="off"
          detect-blur="on"
          v-model="params.password"
          v-validate:password="{ required: true, minlength: 6, maxlength: 16 }"
          v-bind:disabled="loading"
        )
        input(type="hidden" v-model="params['password-recheck']" v-bind:value="params.password")
        .error.animated(
          v-show="$validationRegister.password.required || $validationRegister.password.minlength || $validationRegister.password.maxlength"
          transition="fade"
        )
          i.font-osd.icon-exclamationtriangle
          span 密码为6-16位半角字符(由数字、字母、符号组成)
      //- 提交按钮
      .form-submit
        button(
          type="button"
          v-on:click="submit(this)"
          v-bind:disabled="!$validationRegister.valid || !params.email || !params.nickname || params.password.length < 6 || params.password.length > 16 || !params.agree || loading"
        ) 注册
      //- 服务协议
      .form-help
        input#register-agree(
          type="checkbox"
          checked
          v-model="params.agree"
        )
        label.checkbox(for="register-agree")
        label(for="register-agree")
          |我已阅读
          a(href="javascript:void(0)") 服务协议
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  setBreadcrumbs
} from '../../vuex/actions/topbar'
import {
  toggleLockScroll
} from '../../vuex/action'
import {
  submit,
  init
} from '../../vuex/actions/register-form'

module.exports = {
  name: 'register-form',
  vuex: {
    getters: {
      breadcrumbs: state => state.topbar.breadcrumbs,
      port: state => state.registerForm.port,
      params: state => state.registerForm.params,
      loading: state => state.loading
    },
    actions: {
      setBreadcrumbs,
      toggleLockScroll,
      submit,
      init
    }
  },
  methods: {
    back: function () {
      window.history.go(-1)
    }
  },
  route: {
    canReuse: false
  },
  ready: function () {
    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
    // 初始化
    this.init(this)
  }
}
</script>
