const state = {
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
  viewList: [{
    show: true,
    name: '移动版',
    link: 'home',
    actived: true
  }, {
    show: false,
    name: '电脑版',
    link: 'home',
    actived: false
  }, {
    show: true,
    name: 'APP',
    url: 'www.baidu.com',
    actived: false
  }],
  btn: {
    feedback: true,
    qr: true,
    top: true
  },
  ad: {
    show: true,
    appLink: ''
  }
}

const mutations = {
  SET_BOTTOMBAR_APP_URL (state, url) {
    state.viewList[2].url = url
    state.ad.appLink = url
  },
  SET_BOTTOMBAR_APP_AD_SHOW (state, status) {
    state.ad.show = status
  }
}

export default {
  state,
  mutations
}
