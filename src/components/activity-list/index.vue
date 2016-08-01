<template lang="jade">
.activity-list

  //- 无数据提示
  .activity-list-nodata.animated(
    v-if="nodata"
    transition="fade"
  )
    p 暂无相关内容

  //- 活动列表单元
  .activity-item.animated(
    v-for="(index, item) in list"
    transition="fade"
  )
    //- 图片区
    .pic-box
      //- 标签
      .tags
        //- a.tag.white-nb(
        //-   href="javascript:void(0)"
        //-   data-id="{{ item.tags[0].id }}"
        //- )
        //-   span {{ item.tags[0].tag }}
        a.tag.white-nb(
          v-link="{name: 'activity-home', query: { tagid: item.tags[0].id }}"
          data-id="{{ item.tags[0].id }}"
        )
          span {{ item.tags[0].tag }}
      //- 图片
      .pic: a.inset-shadow-l(
        v-link="{ name: 'activity-view', params: { id: item.id }}"
        v-on:click="setActived(this)"
      )
        img(
          src="../../assets/img/common/blank.png"
          v-bind:style="{ backgroundImage: 'url(' + item.pic + ')' }"
        )
      //- 活动信息
      .activity-info: a(v-link="{ name: 'activity-view', params: { id: item.id }}" v-on:click="setActived(this)")
        //- 起止时间
        ul.activity-date
          li(v-if="item.event_info[0].start_time") {{{ item.event_info[0].start_time | coverDate }}}
          li(v-if="item.event_info[0].end_time && item.event_info[0].start_time !== item.event_info[0].end_time") {{{ item.event_info[0].end_time | coverDate }}}
        //- 费用 和 城市
        .activity-pandc
          //- 费用
          .activity-price(v-bind:class="{ 'equally': item.event_info[0].cost.is_equally === 'true', 'others': item.event_info[0].cost.is_others === 'true', 'free': item.event_info[0].cost.amount === '0' || item.event_info[0].cost.amount === '0.00' }")
            span(v-if="item.event_info[0].cost.is_equally === 'true'") 平摊费用
            span(v-if="item.event_info[0].cost.is_others === 'true'") 其他
            span(v-if="item.event_info[0].cost.amount === '0' || item.event_info[0].cost.amount === '0.00'") 免费
            span(v-if="item.event_info[0].cost.is_equally !== 'true' && item.event_info[0].cost.is_others !== 'true' && item.event_info[0].cost.amount !== '0' && item.event_info[0].cost.amount !== '0.00'")
              strong {{ item.event_info[0].cost.amount }}
              small {{ item.event_info[0].cost.unit }}
          //- 城市
          .activity-city
            i.font-osd.icon-lbsmark
            span {{ item.event_info[0].place }}
    //- 内容区
    .con-box
      //- 标题
      .title: a(
        v-link="{ name: 'activity-view', params: { id: item.id }}"
        v-on:click="setActived(this)"
      ) {{ item.title }}
      //- 信息
      .attr
        .author
          a.avatar.avatar-md(
            v-link="{ name: 'eventOrg', params: { id: item.author.uid }}"
            v-if="item.author.avatar != ''"
          )
            .pic
              img(
                src="../../assets/img/common/blank.png"
                v-bind:style="{ backgroundImage: 'url(' + item.author.avatar + ')' }"
              )
          .info(v-if="item.author.name != ''")
            .name
              span
                a(v-link="{ name: 'eventOrg', params: { id: item.author.uid }}") {{ item.author.name }}
                //- |{{ item.author.name }}
            .time {{ item.time | formatDateTime }}
        .count
          //- .watch-num(v-if="item.watch.num | strToNumber")
          //-   i.font-osd.icon-heart
          //-   span {{ item.watch.num | formatNum }}
          .view-num(v-if="item.view.num | strToNumber")
            i.font-osd.icon-eye
            span {{ item.view.num | formatNum }}  
  //- loading
  loading(
    v-show="loading"
    type="list"
  )
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  setBreadcrumbs
} from '../../vuex/actions/topbar'
import {
  stopCheckLoadArea,
  setEventItemActived,
  init,
  reset
} from '../../vuex/actions/activity-list'

module.exports = {
  name: 'activity-list',
  props: ['config'],
  vuex: {
    getters: {
      list: state => state.activityList.list,
      nodata: state => state.activityList.isNoData,
      locked: state => state.activityList.isLocked,
      loading: state => state.activityList.isLoading,
      port: state => state.activityList.port
    },
    actions: {
      setBreadcrumbs,
      stopCheckLoadArea,
      setEventItemActived,
      init,
      reset
    }
  },
  components: {
    // loading组件
    'loading': (resolve) => {
      require(['../loading'], resolve)
    }
  },
  methods: {
    setActived: function (obj) {
      setEventItemActived(obj.$index)
    }
  },
  route: {
    canReuse: false
  },
  ready: function () {
    // 初始化
    this.init(this)

    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  },
  destroyed: function () {
    console.log('销毁活动列表组件')
    // 停止监测滚动
    this.stopCheckLoadArea()
    // 重置组件状态
    this.reset(this)
  }
}
</script>
