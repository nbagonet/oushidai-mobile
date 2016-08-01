<template lang="jade">
.toolbar(
  v-bind:class="{ 'active': toolbar.pop, 'show': toolbar.show }"
)
  //- 遮罩层
  span.mask(v-on:click="popup('')")
  //- 更多操作选项按钮
  .btn-more(
    v-if="toolbar.more.show"
    v-bind:class="{ 'active': toolbar.pop === 'more' }"
  )
    a(
      v-bind:class="{ 'active': toolbar.pop === 'more' }"
      v-on:click="popup('more')"
    ): i.font-osd.icon-ellipsis
    //- 更多操作选项浮层
    .pop-more(
      v-show="toolbar.pop === 'more'"
    )
      .pop-more-list
        //- 资讯适用 begin
        ul(v-if="config.type === 'news'")
          li
            a(v-link="{ name: 'news-home' }")
              span 返回资讯列表
          li(v-if="config.prevNews.id")
            a(v-link="{ name: 'news-view', params: config.prevNews}")
              span 上一篇
          li(v-if="config.nextNews.id")
            a(v-link="{ name: 'news-view', params: config.nextNews}")
              span 下一篇
        //- 资讯适用 end
        //- 活动适用 begin
        ul(v-if="config.type === 'event'")
          li
            a(v-link="{ name: 'activity-home' }")
              span 返回活动列表
          li(v-if="config.prev.id")
            a(v-link="{ name: 'activity-view', params: config.prev}")
              span 上一篇
          li(v-if="config.next.id")
            a(v-link="{ name: 'activity-view', params: config.next}")
              span 下一篇
        //- 活动适用 end
      .pop-more-cancel
        a(v-on:click="popup('')") 取消
  //- 分享按钮
  .btn-share(
    v-if="toolbar.share.show"
    v-bind:class="{ 'active': toolbar.pop === 'share' || toolbar.pop === 'copy'}"
  )
    a(
      v-on:click="popup('share')"
      v-bind:class="{ 'active': toolbar.pop === 'share' || toolbar.pop === 'copy' }"
    ): i.font-osd.icon-sharesquareo
    //- 分享浮层
    .pop-share(v-bind:class="{ 'active': toolbar.WeiXinTips }" v-show="toolbar.pop==='share'")
      .pop-share-list
        .title 一键分享
        ul
          li
            a(v-on:click="shareToWeibo")
              i.font-osd.icon-weibo
            em 微博
          li
            a(v-on:click="shareToQZone")
              i.font-osd.icon-qzone
            em QQ空间
          li(v-if="inWeixin")
            a(v-on:click="toggleWeixinTips(true)")
              i.font-osd.icon-weixin
            em 微信
          li(v-if="inWeixin")
            a(v-on:click="toggleWeixinTips(true)")
              i.font-osd.icon-weixinfriendcircle
            em 微信朋友圈
          li(v-if="!inWeixin")
            a#copylink(v-on:click="copyAction()" data-clipboard-text="{{ $data.url }}")
              i.font-osd.icon-weixin
            em 微信
          li
            a(v-on:click="shareToFacebook")
              i.font-osd.icon-facebook
            em Facebook
          li
            a(v-on:click="shareToTwitter")
              i.font-osd.icon-twitter
            em Twitter
          li(v-if="!inWeixin")
            a(href="{{ 'mailto:请输入朋友的邮件地址?subject=' + config.title + '&body=' + url + '    ' + config.content | removeHTMLTag }}")
              i.font-osd.icon-mail
            em 邮件

      .pop-share-cancel
        a(v-on:click="popup('')") 取消

      //- 微信分享提示浮层
      .tips-share-weixin(
        v-show="toolbar.WeiXinTips"
        v-on:click="toggleWeixinTips(false)"
      )
      //- 微信朋友圈分享浮层
    .pop-copy(v-show="toolbar.pop === 'copy'")
      //- 复制提醒浮层
      .pop-copy-tips
        .title
          i.font-osd.icon-weixin
          div.info {{ toolbar.CopyInfo }}
        div.link 
          p {{ $data.url }}
      .pop-share-cancel
        a(v-on:click="popup('')") 关闭
    input#currentURL.none(value='{{ $data.url }}')
</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  popup,
  toggleWeixinTips,
  initToolbarStatus,
  copyAction
} from '../../vuex/actions/toolbar'
import {
  shareToWeibo,
  shareToQZone,
  shareToFacebook,
  shareToTwitter
} from '../../vuex/action'

module.exports = {
  name: 'toolbar',
  props: ['config'],
  data: () => {
    return {
      url: window.location.href
    }
  },
  vuex: {
    getters: {
      toolbar: state => state.toolbar,
      inWeixin: state => state.inWeiXin
    },
    actions: {
      popup,
      toggleWeixinTips,
      shareToWeibo,
      shareToQZone,
      shareToFacebook,
      shareToTwitter,
      initToolbarStatus,
      copyAction
    }
  },
  ready: function () {
    // ready时，关闭以弹出的浮层
    this.popup('')
    // 初始化状态监测
    this.initToolbarStatus(this)
  }
}
</script>
