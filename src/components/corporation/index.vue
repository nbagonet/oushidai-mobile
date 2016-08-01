<template lang="jade">
.corporation

  //- 标题栏
  .corporation-header
    //- 返回按钮
    .back
      a(href="javascript:void(0)" v-on:click="back")
        i.font-osd.icon-times
        span 返回
      //- a(v-link="{ name: 'home' }")
    //- 标题
    .title
      strong(v-if="$route.name === 'aboutus'") 关于我们
      strong(v-if="$route.name === 'contactus'") 联系我们
      strong(v-if="$route.name === 'advertisement'") 广告业务
      strong(v-if="$route.name === 'business'") 商务合作
      strong(v-if="$route.name === 'copyright'") 版权声明

  //- 关于我们
  .corporation-content(v-if="$route.name === 'aboutus'")
    p "欧时代"平台是欧洲综合媒体集团欧洲时报社旗下的中文资讯与社区服务平台，前身是欧洲时报生活资讯频道(法纵网-2010年)，2016年"法纵网"全新改版升级为"欧时代"，新的平台将通过更完善的全媒体信息发布渠道(网站，手机移动客户端，微博，微信等等)，为全球华人提供内容丰富的各类欧洲本地生活资讯信息，以及更新颖有趣的社区互动体验。
    p "欧时代"平台最大的特点是，它不仅仅是一个信息发布平台，而且是一个大型社交和服务平台，每一名注册用户(或商家)，都可以在"欧时代"平台上营建自己专属的社交(或营销)圈，在获得实用生活信息服务的同时，还能开拓自己的人际资源(商业资源)，我们欢迎所有的有识之士加入"欧时代"中文社区服务平台，使我们广大旅欧华人，在海外也一样可以享受到最好的互联网生活服务体验。
    p "欧时代"平台主要有四大板块: 资讯，活动，知道和服务，精心设计的欧时代手机移动客户端APP，将为广大网友提供多种互动功能，使大家在获取实用资讯的同时，还能感受到社区互动的乐趣。
    p "欧时代"平台秉承不断进取，服务华人的理念，希望为关注欧洲的全球华人，尤其是欧洲本地旅欧华人，提供优质的资讯服务。欢迎加入欧时代社区，关注欧时代的发展。


  //- 联系我们
  .corporation-content(v-if="$route.name === 'contactus'")
    //- 地图
    iframe#maps(
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.229125008197!2d2.341477670645164!3d48.81568958080333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6710aab4bfc21%3A0xbfaf793d3e7abb1a!2zNDggUnVlIEJlbm_DrnQgTWFsb24sIDk0MjUwIEdlbnRpbGx5LCDms5Xlm70!5e0!3m2!1szh-CN!2sjp!4v1451375795632'
      frameborder='0'
      style='border:0'
    )
    p
      strong 地址：
      | 48-50 Rue Benoît Malon, 94250 Gentilly, France
      br
      strong 电话：
      | +33 (0)1 78 90 65062
      br
      strong 传真：
      | +33 (0)1 78 90 65069
      br
      strong 邮件：
      | multimedia@oushinet.com

  //- 广告业务
  .corporation-content(v-if="$route.name === 'advertisement'")
    h4 业务描述
    p
      | 欧时代是《欧洲时报》旗下生活服务资讯平台，与欧洲以及国内外媒体建立了广泛的合作资源，欧时代平台通过建立在欧洲华人圈高效的信息传播渠道，以及开展各种形式的线上及线下运营活动等，为广告客户提供更有效、更全面、更贴心的互联网推广体验及服务，为企业及合作伙伴带来更为丰厚的回报。
    p
      | 欧时代致力于通过广泛的市场及品牌合作，现寻求有相同意向的企业、社会团体及个人，针对中法、中欧经贸市场及文化往来进行洽谈与合作；同时，我们也致力于寻求拥有众多用户的广告渠道商，与我们开展广告互为代理的业务，强强联合、以最优性价比争取联合招商。
    h4 业务范围
    ul
      li 微信公众号广告刊登
      li 网站广告刊登
      li 手机客户端广告刊登
      li 商业活动策划
    h4 广告发布平台
    ul
      li
        strong 网站：
        | 欧时代网站，欧洲时报网
      li
        strong 微信公众号：
        | "欧洲时报内参"微信，"想法"微信(法国)，"英伦圈"(英国)，道德经(德国)，意烩(意大利)，维城(中东欧)
      li
        strong 微博：
        | 欧时代微博，英伦圈微博，想法微博
      li
        strong APP：
        | 欧时代APP
    h4 服务步骤
    ul
      li 第一步：和我们建立联系，提出您的推广预期；
      li 第二步：我们的专业团队，会根据您的推广目标和预算制定宣传方案；
      li 第三步：确定合同细节，开始合作。
    br
    div
      strong 联系人：
      | 柴女士
      br
      strong Email：
      | multimedia@oushinet.com
      br
      strong 电话：
      | 0033(0)1 78 90 65 63/62

  //- 商务合作
  .corporation-content(v-if="$route.name === 'business'")
    h4 商务合作
    p
      | 欧时代的商务合作，是通过挖掘中国及欧洲媒体活动的商业价值，增强自我造血功能，通过和异业合作伙伴优势资源互换，来获得有力的运营推广支持。通常，是将《欧洲时报》强势的媒体平台资源，主要包括欧时代各平台、《欧洲时报》法国总部的纸媒、欧洲时报网、视频新闻采编播、微博微信、欧洲时报文化中心，以及欧洲其他国家分社包括英国、德国、意大利、中东欧等的本地纸媒及微博微信平台，来置换合作伙伴的线上、线下资源，主要包括现金和实物的活动赞助、媒介宣传资源互换、客户资料共享及联合市场推广活动等。
    p 迄今为止，《欧洲时报》已在媒体出版、商务合作、文化交流等领域有了很多成功的合作经验，有力的促进了合作伙伴的市场开拓及品牌影响力。
    h4 企业战略合作
    p
      | 欧时代寻求对全球各地区、各语种有丰富运营经验的海外互联网、自媒体及有商业推广需求的商户、机构，共同开拓海外华人市场。欧时代愿意与不同行业的优秀品牌进行合作，通过资源互换的方式，整合双方的优势，达到共赢的目的。
    div
      strong 联系人：
      | 袁先生
      br
      strong Email：
      | multimedia@oushinet.com
      br
      strong 电话：
      | 0033(0)1 78 90 65 62/63
    h4 运营商务合作
    p
      | 欧时代致力于同优秀的中法经济、文化项目及商业品牌进行深度合作，建立与各优势媒体平台的合作关系，共同吸引受众群体、推广平台或品牌，或联合开拓运营模式；同时，也帮助并扶持小型商家、协会、团队等完成中法商贸、文化往来的发展和壮大，欢迎合作方及商家以“机构入驻”的方式将品牌信息及机构活动展示在欧时代各平台，借助欧时代强大的技术支持及互动模式，直接与用户及其他合作方零距离接触。现寻求有相同意向的机构、平台及个人进行洽谈与合作。
    div
      strong 联系人：
      | 柴女士
      br
      strong Email：
      | multimedia@oushinet.com
      br
      strong 电话：
      | 0033(0)1 78 90 65 63/62

  //- 版权声明
  .corporation-content(v-if="$route.name === 'copyright'")
    p 欧时代平台（http://www.oushidai.com，以下称"本网站"）
    p
      | 凡本网站标注“原创”的所有作品，版权均属于欧时代，未经本网授权不得转载、摘编或利用其它方式使用上述作品。已经本网授权使用作品的，应在授权范围内使用，并注明"来源：欧时代"。违反上述声明者，本网将追究其相关法律责任。
    p 凡本网标注“来源：XXX（非欧时代网）”的作品，均转载自其它媒体，转载目的在于传递更多信息，并不代表本网赞同其观点和对其真实性负责。
    p 对于不当转载或引用本网内容而引起的民事纷争、行政处理或其他损失，本网不承担责任。
    p 如您（单位或个人）认为本网站某部分内容有侵权嫌疑，敬请立即通知我们，并提供真实、有效的书面证明，我们将在核实后采取有效措施制止侵权行为的发生并做出妥善处理。

</template>

<style lang="less">
@import "./style.less";
</style>

<script>
import {
  setBreadcrumbs
} from '../../vuex/actions/topbar'

module.exports = {
  name: 'corporation',
  vuex: {
    getters: {
      stateTopbar: state => state.topbar,
      breadcrumbs: state => state.topbar.breadcrumbs
    },
    actions: {
      setBreadcrumbs
    }
  },
  route: {
    canReuse: false
  },
  methods: {
    back: function () {
      window.history.go(-1)
    }
  },
  created: function () {
    // 配置面包屑
    this.setBreadcrumbs(this.$route.breadcrumbs)
  }
}
</script>
