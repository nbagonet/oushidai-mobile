// initial state
const state = {
  // 是否显示
  show: false,
  // 是否显示登录注册入口
  showLogin: false,
  // 分类菜单数据
  categoryList: [{
    show: true,
    icon: 'home',
    name: '首页',
    link: 'home'
  }, {
    show: true,
    icon: 'readbook',
    name: '资讯',
    link: 'news'
  }, {
    show: true,
    icon: 'userrun',
    name: '活动',
    link: 'activity'
  }, {
    show: false,
    icon: 'question',
    name: '知道',
    link: 'home'
  }, {
    show: false,
    icon: 'service',
    name: '服务',
    link: 'home'
  }],
  // 帮助信息列表数据
  helpList: [{
    show: true,
    name: '关于我们',
    link: 'aboutus'
  }, {
    show: true,
    name: '联系我们',
    link: 'contactus'
  }, {
    show: true,
    name: '广告业务',
    link: 'advertisement'
  }, {
    show: true,
    name: '商务合作',
    link: 'business'
  }, {
    show: true,
    name: '版权声明',
    link: 'copyright'
  }],
  // 底边栏列表
  bottomBar: [{
    show: false,
    icon: 'weixin',
    link: 'home'
  }, {
    show: true,
    icon: 'weibo',
    link: 'http://www.weibo.com/francezone'
  }, {
    show: false,
    icon: 'rss',
    link: 'home'
  }, {
    show: true,
    icon: 'mobile',
    link: 'home'
  }]
}

// mutations
const mutations = {
  /**
   * 切换显示状态
   * @param {[type]} state  [description]
   * @param {[type]} status [description]
   */
  TOGGLE_SIDEMENU (state, status) {
    state.show = status
  },
  SET_APP_LINK (state, link) {
    // console.log('设置app下载链接')
    state.bottomBar[3].link = link
  }
}

export default {
  state,
  mutations
}
