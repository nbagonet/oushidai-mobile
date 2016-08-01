<template lang="jade">
.filter
  .filter-select
    .filter-select-loc.filter-select-item(v-if="thisconfig.loc")
      i.font-osd.icon-lbsmark.select-icon
      select(v-model="selectedLoc")
        option(v-for="(index, item) in thisconfig.loc" v-bind:value="item") {{ item }}
        //- option 巴黎
      i.font-osd.icon-chevrondown.select-down
    .filter-select-act.filter-select-item(v-if="thisconfig.act")
      i.font-osd.icon-userrun.select-icon
      select(v-model="selectedAct")
        option(v-for="item in thisconfig.act" v-bind:value="item.value") {{ item.text }}
      i.font-osd.icon-chevrondown.select-down
  .filter-category(v-if="thisconfig.categories")
    .category-info 
      span.left
      span.info 分类
      span.right
    .category-list
      .category-item(v-for="item in thisconfig.categories")
        //- a(v-link="item.link") {{ item.name }}
        a(v-link="{ name: item.name, query: { category: item.category, loc: selectedLoc, act: selectedAct }}") {{ item.title }}
  .filter-tags(v-if="thisconfig.tags")
    .tag-info
      span.left
      span.info 热门标签
      span.right
    .tag-list
      .tag-item(v-for="item in thisconfig.tags")
        //- a(v-link="config.url?tagid=item.id" class="tag white-nb" data-id="item.id") 
          span {{ item.name }}
        a(v-link="{ name: item.name, query: { tagid: item.id }}" class="tag white-nb" data-id="item.id") 
          span {{ item.title }}
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  initFilter
} from '../../vuex/actions/filter'

module.exports = {
  name: 'filter',
  props: ['config'],
  data: {
    // 设置默认选项
    selectedAct: 'all',
    selectedLoc: '巴黎'
  },
  vuex: {
    getters: {
      thisconfig: state => {
        // console.log('获取filter配置用于渲染', state.filter)
        // return state.newsFilter.filterConfig
        return state.filter
      }
    },
    actions: {
      initFilter
    }
  },
  created: function () {
    this.initFilter(this)
  },
  beforeCompile: function () {
    // console.log(vuex.getters.config)
  }
}

</script>