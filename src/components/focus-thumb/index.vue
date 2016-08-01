<template lang="jade">
.focus(v-if="show")
  //- 焦点图
  .swiper-container.slider-focus.animated(
    v-if="list.length"
    transition="fade"
  )
    //- 焦点图主体
    .swiper-wrapper.slider-focus-wrapper
      .swiper-slide.slider-focus-slide(v-for="(index, item) in list")
        //- 图片
        .image
          a.inset-shadow-l(
            v-if="item.type === 'news'"
            v-link="{ name: 'news-view', params: { id: item.id }}"
          )
            img.swiper-lazy(
              src="../../assets/img/common/blank.png"
              data-background="{{ item.pic }}"
            )
          a.inset-shadow-l(
            v-if="item.type === 'event'"
            v-link="{ name: 'activity-view', params: { id: item.id }}"
          )
            img.swiper-lazy(
              src="../../assets/img/common/blank.png"
              data-background="{{ item.pic }}"
            )
          //- 活动信息
          //- .activity-info(v-if="item.event_info && item.event_info.length")
          //-   a(v-link="{ name: 'activity-view', params: { id: item.id }}")
          //-     //- 起止时间
          //-     ul.activity-date
          //-       li(v-if="item.event_info[0].start_time") {{{ item.event_info[0].start_time | coverDate }}}
          //-       li(v-if="item.event_info[0].end_time && item.event_info[0].start_time !== item.event_info[0].end_time") {{{ item.event_info[0].end_time | coverDate }}}
          //-     //- 费用 和 城市
          //-     .activity-pandc
          //-       //- 费用
          //-       .activity-price(v-bind:class="{ 'equally': item.event_info[0].cost.is_equally === 'true', 'others': item.event_info[0].cost.is_others === 'true', 'free': item.event_info[0].cost.amount === '0' || item.event_info[0].cost.amount === '0.00' }")
          //-         span(v-if="item.event_info[0].cost.is_equally === 'true'") 平摊费用
          //-         span(v-if="item.event_info[0].cost.is_others === 'true'") 其他
          //-         span(v-if="item.event_info[0].cost.amount === '0' || item.event_info[0].cost.amount === '0.00'") 免费
          //-         span(v-if="item.event_info[0].cost.is_equally !== 'true' && item.event_info[0].cost.is_others !== 'true' && item.event_info[0].cost.amount !== '0' && item.event_info[0].cost.amount !== '0.00'")
          //-           strong {{ item.event_info[0].cost.amount }}
          //-           small {{ item.event_info[0].cost.unit }}
          //-       //- 城市
          //-       .activity-city
          //-         i.font-osd.icon-lbsmark
          //-         span {{ item.event_info[0].place }}
        //- 标签
        .tags
          //- a.tag.white-nb(
          //-   href="#"
          //-   v-for="tag in item.tags"
          //-   data-id="{{ tag.id }}"
          //- )
          //-   span {{ tag.tag }}
          a.tag.white-nb(v-if="item.type =='news'" v-for="tag in item.tags" v-link="{name: 'news-home', query: { tagid: tag.id }}")
            span {{ tag.tag }}
          a.tag.white-nb(v-if="item.type =='event'" v-for="tag in item.tags" v-link="{name: 'activity-home', query: { tagid: tag.id }}")
            span {{ tag.tag }}

        //- 内容区
        .con
          //- //- 发布者头像
          //- .author-avatar
          //-   a.avatar.avatar-md(
          //-     v-if="item.author.type"
          //-     v-link="{ name: item.author.type, params: { id: item.author.uid }}"
          //-   )
          //-     .pic
          //-       img.swiper-lazy(
          //-         src="../../assets/img/common/blank.png"
          //-         data-src="{{ item.author.avatar }}"
          //-       )
          //-   .avatar.avatar-md(v-else)
          //-     .pic
          //-       img.swiper-lazy(
          //-         src="../../assets/img/common/blank.png"
          //-         data-src="{{ item.author.avatar }}"
          //-       )
          //- 标题等
          .content-box
            //- 价格及位置
            .info(v-if="item.type === 'event'")
              span.price {{ item.event_info[0].cost.amount }}{{ item.event_info[0].cost.unit }}
              span.location
                i.font-osd.icon-lbsmark
                span {{ item.event_info[0].place }}

            //- 标题
            .title
              a(
                v-if="item.type === 'news'"
                v-link="{ name: 'news-view', params: { id: item.id }}"
              ) {{ item.title }}
              a(
                v-if="item.type === 'event'"
                v-link="{ name: 'activity-view', params: { id: item.id }}"
              ) {{ item.title }}
            //- 附加信息
            .attr
              //- 发布者头像
              .author-avatar
                a.avatar.avatar-md(
                  v-if="item.author.type"
                  v-link="{ name: item.author.type, params: { id: item.author.uid }}"
                )
                  .pic
                    img.swiper-lazy(
                      src="../../assets/img/common/blank.png"
                      data-src="{{ item.author.avatar }}"
                    )
                .avatar.avatar-md(v-else)
                  .pic
                    img.swiper-lazy(
                      src="../../assets/img/common/blank.png"
                      data-src="{{ item.author.avatar }}"
                    )
              //- 子属性栏 将发布在昵称和日期放在一起
              .sub-attr
                //- 发布者昵称
                .name
                  a(
                    v-if="item.author.type"
                    v-link="{ name: item.author.type, params: { id: item.author.uid }}"
                  ) @{{ item.author.name }}
                  span(v-else) @{{ item.author.name }}
                //- 发布时间
                .time {{ item.time | formatDateTime }}
              //- 各种统计
              .count
                //- .comments-num
                //-   i.font-osd.icon-messagebox
                //-   span {{ item.comment.num | formatNum }}
                //- .like-num(v-if="item.type === 'news'")
                //-   i.font-osd.icon-like
                //-   span {{ item.like.num | formatNum }}
                .view-num
                  i.font-osd.icon-eye
                  span {{ item.view.num | formatNum }}

    //- 分页器
    .swiper-pagination.slider-focus-pagination
  //- 焦点图2 用作分页器
  .swiper-container.slider-thumb.animated(
    v-if="list.length"
    transition="fade" v-bind:class="{ 'slider-date-thumb': list[0].type==='event' }"
  )
    .swiper-wrapper.slider-focus-wrapper
      .swiper-slide.slider-focus-slide.swiper-lazy(v-if="list[0].type === 'news'" v-for="(index, item) in list" data-background="{{ item.pic }}")
      .swiper-slide.slider-focus-slide(v-if="list[0].type === 'event'" v-for="(index, item) in list")
        .img.swiper-lazy(data-background="{{ item.pic }}")
        .time
          .mon {{ item.event_info[0].start_time | getMonth}}月
          .day {{ item.event_info[0].start_time | getDay}}
    .swiper-button-prev.swiper-button-white
    .swiper-button-next.swiper-button-white
  //- 筛选页显示
  a.filterBtn(v-if="stateFilter" v-link="{ name: stateFilterLink }")
    i.font-osd.icon-funnel

</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  getFocusData
} from '../../vuex/actions/focus-thumb'

module.exports = {
  name: 'focus-thumb',
  props: ['config'],
  vuex: {
    getters: {
      show: state => state.focusThumb.show,
      list: state => state.focusThumb.list,
      stateFilter: state => {
        console.log('是否显示Filter按钮', state.focusThumb.showFilter)
        return state.focusThumb.showFilter
      },
      stateFilterLink: state => state.focusThumb.filterLink
    },
    actions: {
      getFocusData
    }
  },
  created: function () {
    this.getFocusData(this, '.slider-focus', '.slider-thumb')
  }
}
</script>
