<template lang="jade">
.user-list
  //- 无数据状态
  .user-list-nodata.animated(
    v-if="nodata"
    transition="fade"
  )
    p 暂无相关内容

  //- 用户列表
  .user-list(v-if="!nodata")
    .user-item.animated(
      v-bind:class="{ 'active': activedIndex === index }"
      v-for="(index, item) in list"
      transition="fade"
    )
      .inner
        //- 头像
        .user-pic(v-on:click="toggleActivedItem(-1)")
          .avatar.avatar-lg
            .pic
              img(
                src="../../assets/img/common/blank.png"
                v-bind:style="{ backgroundImage: 'url(' + item.info.avatar + ')' }"
              )
        //- 信息
        .user-info(v-on:click="toggleActivedItem(-1)")
          .name {{ item.info.name }}
          .intro {{ item.info.intro | substr2 28 true }}
          .others
            .followed 关注: {{ item.info.follow | formatNum }}
            .fans 粉丝: {{ item.info.fans | formatNum }}
        //- 操作
        .user-act(v-if="item.info.type[0]['name'] != 'user'")
          .btn(v-on:click="toggleActivedItem(index)")
            span
            span
            span
          .link
            a(v-link="{ name: item.info.type[0]['name'], params: { id: item.info.uid }}") 主页
  //- loading
  loading(
    v-show="loading"
    v-bind:type="list"
  )
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  init,
  reset,
  toggleActivedItem,
  stopCheckLoadArea
} from '../../vuex/actions/user-list'

module.exports = {
  name: 'user-list',
  props: ['type', 'info', 'config'],
  vuex: {
    getters: {
      list: state => state.userList.list,
      nodata: state => state.userList.isNoData,
      locked: state => state.userList.isLocked,
      loading: state => state.userList.isLoading,
      activedIndex: state => state.userList.activeIndex
    },
    actions: {
      init,
      reset,
      toggleActivedItem,
      stopCheckLoadArea
    }
  },
  components: {
    // loading组件
    'loading': (resolve) => {
      require(['../loading'], resolve)
    }
  },
  ready: function () {
    // 初始化
    this.init(this)
  },
  destroyed: function () {
    console.log('销毁用户列表组件')
    // 停止监测滚动
    this.stopCheckLoadArea()
    // 重置组件状态
    this.reset(this)
  }
}
</script>
