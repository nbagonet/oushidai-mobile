export let RouterConf = {}
export let RouterRedirect = {}

// 起始页
RouterConf['/start'] = {
  name: 'start',
  title: '欧时代',
  component: (resolve) => {
    require(['../components/start'], resolve)
  }
}
// 首页
RouterConf['/home'] = {
  name: 'home',
  title: '欧时代',
  component: (resolve) => {
    require(['../components/home'], resolve)
  },
  // 面包屑
  breadcrumbs: []
}
// 资讯
RouterConf['/news'] = {
  name: 'news',
  title: '资讯',
  component: (resolve) => {
    require(['../components/news'], resolve)
  },
  subRoutes: {
    // 资讯首页
    '/': {
      name: 'news-home',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/news-home'], resolve)
      },
      breadcrumbs: [{
        name: 'news-home',
        text: '资讯',
        params: {}
      }]
    },
    // 资讯正文
    '/:id': {
      name: 'news-view',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/news-view'], resolve)
      },
      breadcrumbs: [{
        name: 'news',
        text: '资讯',
        params: {}
      }]
    },
    // 资讯筛选页面
    '/news-filter': {
      name: 'news-filter',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/news-filter'], resolve)
      },
      breadcrumbs: [{
        name: 'news',
        text: '资讯',
        params: {}
      }, {
        name: 'news-filter',
        text: '筛选',
        parames: {}
      }]
    }
  }
}
// 媒体机构
RouterConf['/media-org/:id'] = {
  name: 'mediaOrg',
  title: '欧时代',
  component: (resolve) => {
    require(['../components/org-center'], resolve)
  },
  breadcrumbs: [{
    name: 'mediaOrg',
    text: '媒体机构',
    params: {}
  }],
  subRoutes: {
    // 简介
    '/intro': {
      name: 'mediaOrg-intro',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-intro'], resolve)
      },
      breadcrumbs: [{
        name: 'mediaOrg',
        text: '媒体机构',
        params: {}
      }]
    },
    // 文章
    '/article': {
      name: 'mediaOrg-article',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-article'], resolve)
      },
      breadcrumbs: [{
        name: 'mediaOrg',
        text: '媒体机构',
        params: {}
      }]
    },
    // 粉丝
    '/fans': {
      name: 'mediaOrg-fans',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-fans'], resolve)
      },
      breadcrumbs: [{
        name: 'mediaOrg',
        text: '媒体机构',
        params: {}
      }]
    }
  }
}
// 资讯达人
RouterConf['/writer/:id'] = {
  name: 'writer',
  title: '欧时代',
  component: (resolve) => {
    require(['../components/org-center'], resolve)
  },
  breadcrumbs: [{
    name: 'writer',
    text: '资讯达人',
    params: {}
  }],
  subRoutes: {
    // 文章
    '/article': {
      name: 'writer-article',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-article'], resolve)
      },
      breadcrumbs: [{
        name: 'writer',
        text: '资讯达人',
        params: {}
      }]
    },
    // 粉丝
    '/fans': {
      name: 'writer-fans',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-fans'], resolve)
      },
      breadcrumbs: [{
        name: 'writer',
        text: '资讯达人',
        params: {}
      }]
    },
    // 赞过
    '/like': {
      name: 'writer-like',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-like'], resolve)
      },
      breadcrumbs: [{
        name: 'writer',
        text: '资讯达人',
        params: {}
      }]
    },
    // 评论
    '/comments': {
      name: 'writer-comments',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-comments'], resolve)
      },
      breadcrumbs: [{
        name: 'writer',
        text: '资讯达人',
        params: {}
      }]
    }
  }
}
// 个人中心
RouterConf['/user-center/:id'] = {
  name: 'user-center',
  component: (resolve) => {
    require(['../components/user-center'], resolve)
  },
  subRoutes: {
    // 个人中心首页
    '/': {
      name: 'user-center-home',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/user-center-home'], resolve)
      },
      breadcrumbs: []
    }
  }
}
// 活动机构
RouterConf['/event-org/:id'] = {
  name: 'eventOrg',
  title: '欧时代',
  component: (resolve) => {
    require(['../components/org-center'], resolve)
  },
  breadcrumbs: [{
    name: 'eventOrg',
    text: '活动机构',
    params: {}
  }],
  subRoutes: {
    // 简介
    '/intro': {
      name: 'eventOrg-intro',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-intro'], resolve)
      },
      breadcrumbs: [{
        name: 'eventOrg',
        text: '活动机构',
        params: {}
      }]
    },
    // 活动
    '/activity': {
      name: 'eventOrg-event',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-activity'], resolve)
      },
      breadcrumbs: [{
        name: 'eventOrg',
        text: '活动机构',
        params: {}
      }]
    },
    // 粉丝
    '/fans': {
      name: 'eventOrg-fans',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/org-center-fans'], resolve)
      },
      breadcrumbs: [{
        name: 'eventOrg',
        text: '活动机构',
        params: {}
      }]
    }
  }
}
// 注册
RouterConf['/register'] = {
  name: 'register',
  title: '注册',
  component: (resolve) => {
    require(['../components/register'], resolve)
  },
  subRoutes: {
    // 邮件注册
    '/email': {
      name: 'register-email',
      title: '邮件注册',
      component: (resolve) => {
        require(['../components/register-form'], resolve)
      },
      breadcrumbs: [{
        name: '',
        text: '注册',
        params: {}
      }]
    },
    // 联合登录
    '/union': {
      name: 'register-union',
      title: '补充资料',
      component: (resolve) => {
        require(['../components/register-form'], resolve)
      },
      breadcrumbs: [{
        name: '',
        text: '补充资料',
        params: {}
      }]
    },
    // 注册成功
    '/success': {
      name: 'register-success',
      title: '注册成功',
      component: (resolve) => {
        require(['../components/register-result'], resolve)
      },
      breadcrumbs: [{
        name: '',
        text: '注册成功',
        params: {}
      }]
    }
  }
}
// 登录
RouterConf['/login'] = {
  name: 'login',
  component: (resolve) => {
    require(['../components/login'], resolve)
  },
  breadcrumbs: [{
    name: '',
    text: '登录',
    params: {}
  }]
}
// 活动
RouterConf['/activity'] = {
  name: 'activity',
  title: '欧时代',
  component: (resolve) => {
    require(['../components/activity'], resolve)
  },
  subRoutes: {
    // 活动首页
    '/': {
      name: 'activity-home',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/activity-home'], resolve)
      },
      breadcrumbs: [{
        name: 'activity-home',
        text: '活动',
        params: {}
      }]
    },
    // 活动正文
    '/:id': {
      name: 'activity-view',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/activity-view'], resolve)
      },
      breadcrumbs: [{
        name: 'activity',
        text: '活动',
        params: {}
      }]
    },
    // 活动筛选页面
    '/activity-filter': {
      name: 'activity-filter',
      title: '欧时代',
      component: (resolve) => {
        require(['../components/activity-filter'], resolve)
      },
      breadcrumbs: [{
        name: 'activity',
        text: '活动',
        params: {}
      }, {
        name: 'activity-filter',
        text: '筛选',
        parames: {}
      }]
    }
  }
}
// 关于我们
RouterConf['/aboutus'] = {
  name: 'aboutus',
  component: (resolve) => {
    require(['../components/corporation'], resolve)
  },
  breadcrumbs: [{
    name: '',
    text: '关于我们',
    params: {}
  }]
}
// 联系我们
RouterConf['/contactus'] = {
  name: 'contactus',
  component: (resolve) => {
    require(['../components/corporation'], resolve)
  },
  breadcrumbs: [{
    name: '',
    text: '联系我们',
    params: {}
  }]
}
// 广告业务
RouterConf['/advertisement'] = {
  name: 'advertisement',
  component: (resolve) => {
    require(['../components/corporation'], resolve)
  },
  breadcrumbs: [{
    name: '',
    text: '广告业务',
    params: {}
  }]
}
// 商务合作
RouterConf['/business'] = {
  name: 'business',
  component: (resolve) => {
    require(['../components/corporation'], resolve)
  },
  breadcrumbs: [{
    name: '',
    text: '商务合作',
    params: {}
  }]
}
// 版权声明
RouterConf['/copyright'] = {
  name: 'copyright',
  component: (resolve) => {
    require(['../components/corporation'], resolve)
  },
  breadcrumbs: [{
    name: '',
    text: '版权声明',
    params: {}
  }]
}
// 吐槽建议
RouterConf['/feedback'] = {
  name: 'feedback',
  component: (resolve) => {
    require(['../components/feedback'], resolve)
  },
  breadcrumbs: [{
    name: '',
    text: '吐槽建议',
    params: {}
  }]
}
// =========

// 重定向规则
RouterRedirect = {
  // 404 => 起始页
  '*': '/home',
  // 媒体机构首页 => 媒体机构简介
  '/media-org/:id': '/media-org/:id/intro',
  // 资讯达人首页 => 资讯达人文章
  '/writer/:id': '/writer/:id/article',
  // 活动机构首页 => 活动机构简介
  '/event-org/:id': '/event-org/:id/intro',
  // 注册 => 邮件注册
  '/register/': '/register/email'
}
