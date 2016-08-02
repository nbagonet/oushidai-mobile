<template lang="jade">
.side-menu(v-bind:class="{ 'show': stateSidemenu.show }")
  //- 遮罩
  .mask(v-on:click="toggleSidemenu(false)")
  //- 主体
  .side-menu-body
    //- TODO: 搜索
    //- 菜单
    ul.category-list
      li(
        v-for="item in stateSidemenu.categoryList"
        v-if="item.show"
      )
        a(
          v-link="{ name: item.link, params: item.params }"
          v-on:click="toggleSidemenu(false)"
        )
          dl
            dt
              i.font-osd(
                class="icon-{{ item.icon }}"
                v-if="item.icon"
              )
            dd
              strong {{ item.name }}
              i.font-osd.icon-chevronright
      //- 选择国家
      //- li
      //-   a(v-link="{ name: 'home' }")
      //-     dl
      //-       dt
      //-         i.font-osd.icon-lbsmark
      //-       dd
      //-         strong 选择国家：{{ local | coverLocationName }}
      //-         i.font-osd.icon-chevronright
      //- 登录注册入口
      li(v-if="!isLogin && stateSidemenu.showLogin")
        a(
          v-link="{ name: 'login' }"
          v-on:click="toggleSidemenu(false)"
        )
          dl
            dt
              .avatar.avatar-md.avatar-highlight
                .pic
                  img(src="http://www.oushidai.com/img/common/avatar.png")
            dd
              strong 登录/注册
              i.font-osd.icon-chevronright
      //- 个人中心入口
      li(v-if="isLogin && stateSidemenu.showLogin")
        a(
          v-link="{ name: 'user-center', params: { userId: userInfo.uid } }"
          v-on:click="toggleSidemenu(false)"
        )
          dl
            dt
              .avatar.avatar-md.avatar-highlight
                .pic
                  img(
                    v-if="userInfo.avatar"
                    v-bind:src="userInfo.avatar"
                  )
                  img(
                    v-else
                    src="http://www.oushidai.com/img/common/avatar.png"
                  )
            dd
              strong {{ userInfo.nick }}
              i.font-osd.icon-chevronright
    //- 帮助信息
    ul.help-list
      li(
        v-for="item in stateSidemenu.helpList"
        v-if="item.show"
      )
        a(
          v-link="{ name: item.link, params: item.params }"
          v-on:click="toggleSidemenu(false)"
        ) {{ item.name }}
    //- 底边栏
    ul.bottom-bar
      li(
        v-for="item in stateSidemenu.bottomBar"
        v-if="item.show"
      )
        //- a(
        //-   v-if="item.icon == 'mobile'"
        //-   v-on:click="downloadApp()"
        //- )
        //-   i.font-osd(class="icon-{{ item.icon }}")
        a(
          href="{{ item.link }}"
          v-on:click="toggleSidemenu(false)"
        )
          i.font-osd(class="icon-{{ item.icon }}")
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  toggleSidemenu,
  downloadApp
  // lock
} from '../../vuex/actions/side-menu'

module.exports = {
  name: 'side-menu',
  vuex: {
    getters: {
      local: state => state.local,
      stateSidemenu: state => state.sidemenu,
      // stateSidemenu: function (state) {
      //   console.log(state)
      //   return state.sidemenu
      // },
      isLogin: state => state.isLogin,
      userInfo: state => state.userInfo
    },
    actions: {
      toggleSidemenu,
      downloadApp
    }
  },
  created: function () {
    // console.log('sidemenu', this)
    this.downloadApp(this)
  },
  ready: function () {
    // this.lock()
  }
}
</script>
