import Vue from 'vue'
import Vuex from 'vuex'
// import Store from 'store'

Vue.use(Vuex)

// 接口前缀
const portOnlinePath = ''

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  // 是否在微信内
  inWeiXin: false,
  // 当前选中的国家，默认为eu
  local: 'eu',
  // 登录状态
  isLogin: false,
  // 用户信息
  // userInfo: {
  //   uid: '12345',
  //   nick: '王硕V',
  //   avatar: 'http://www.oushidai.com/static/upload/2016/01/29/big_20160129154313000000_1_17664_10.jpg'
  // },
  userInfo: {
    uid: '',
    nick: '',
    avatar: ''
  },
  app: '',
  // 全局loading
  loading: false,
  // 页面锁定状态（不允许滚动）
  lockScroll: false,
  // 分享数据
  shareInfo: {
    title: '',
    description: '',
    tags: [],
    image: '',
    default_image: 'http://oushinet.alltosun.net/static/m/img/icon/share_icon.png',
    link: '',
    default_link: window.location.href
  },
  // 接口
  apis: {
    // 反馈接口
    'feedback': portOnlinePath + '/feedback/ajax',
    // 网站首页焦点图数据接口
    'home-focus': portOnlinePath + '/home/ajax/get_recommend_list',
    // 资讯首页焦点图数据接口
    'news-focus': portOnlinePath + '/information/ajax/get_recommend_list',
    // 资讯列表接口
    'news-list': portOnlinePath + '/information/ajax/get_list',
    // 资讯正文内容接口
    'news-content': portOnlinePath + '/information/ajax/get_content',
    // 资讯筛选接口
    'news-filter': portOnlinePath + '/information/ajax/get_filter',
    // 点赞接口
    'like': portOnlinePath + '/praise/ajax',
    // 作者个人信息接口
    'author-info': portOnlinePath + '/information/ajax/get_author_info',
    // 相关资讯接口
    'news-related': portOnlinePath + '/information/ajax/get_related_list',
    // 媒体机构简介信息
    'mediaOrg-intro': portOnlinePath + '/media_org/ajax/get_media_org_intro',
    // 媒体机构热门文章接口
    'mediaOrg-hot': portOnlinePath + '/media_org/ajax/get_media_org_hot',
    // 相似媒体机构列表接口
    'mediaOrg-similar': portOnlinePath + '/media_org/ajax/get_media_org_similar',
    // 某个用户赞过的内容
    'liked-list': portOnlinePath + '/praise/ajax/get_userpage_praise_list',
    // 某个用户评论过的内容
    'comments-list': portOnlinePath + '/comment/ajax/get_userpage_comment_list',
    // 某个用户的粉丝数据
    'fans-list': portOnlinePath + '/follow/ajax/get_userpage_fans_list',
    // 注册
    'register': portOnlinePath + '/user/ajax/register_mail',
    // 活动焦点图
    'activity-focus': portOnlinePath + '/activity/ajax/recommend_list',
    // 活动列表
    'activity-list': portOnlinePath + '/activity/ajax/activity_list',
    // 活动详情
    'activity-content': portOnlinePath + '/activity/ajax/activity_content',
    // 活动机构简介信息
    'activity-intro': portOnlinePath + '/activity_org/ajax/get_activity_org_intro',
    // 活动机构信息接口
    'activity-org-info': portOnlinePath + '/activity/ajax/get_author_info',
    // 活动筛选接口
    'activity-filter': portOnlinePath + '/activity/ajax/get_filter',
    // app下载接口
    'app-download': portOnlinePath + '/app/ajax/link'
  }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by middlewares
// for debugging purposes.
const mutations = {
  // 是否在微信内
  IN_WEIXIN (state, status) {
    state.inWeiXin = status
  },
  // 全局loading
  GLOBAL_LOADING (state, status) {
    state.loading = status
  },
  // 锁定/解锁页面滚动
  TOGGLE_LOCK_SCROLL (state, status) {
    state.lockScroll = status
  },
  // 设置当前选中的国家
  SET_LOCAL (state, local) {
    state.local = local
  },
  SET_APP_LINK (state, url) {
    state.app = url
  },
  // 配置分享内容
  SET_SHARE_INFO (state, data) {
    // for (let key in data) {
    //   state.shareInfo[key] = data[key]
    // }
    for (let key in state.shareInfo) {
      if (data[key]) {
        state.shareInfo[key] = data[key]
      } else {
        if (key.indexOf('default_') === -1) {
          state.shareInfo[key] = ''
        } else {
          if (!data[key.replace('default_', '')]) {
            state.shareInfo[key.replace('default_', '')] = state.shareInfo[key]
          }
        }
      }
    }
  }
}

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).
//
// You can also provide middlewares, which is just an array of
// objects containing some hooks to be called at initialization
// and after each mutation.
import topbar from './modules/topbar'
import bottombar from './modules/bottombar'
import sidemenu from './modules/side-menu'
import focus from './modules/focus'
import focusThumb from './modules/focus-thumb'
import focusDate from './modules/focus-date'
import newsList from './modules/news-list'
import newsHome from './modules/news-home'
import newsView from './modules/news-view'
import newsFilter from './modules/news-filter'
import filter from './modules/filter'
import toolbar from './modules/toolbar'
import userBanner from './modules/user-banner'
import orgCenterIntroBlk from './modules/org-center-intro-blk'
import orgCenterHot from './modules/org-center-hot'
import orgCenterSimilar from './modules/org-center-similar'
import orgCenterArticle from './modules/org-center-article'
import orgCenterFans from './modules/org-center-fans'
import userList from './modules/user-list'
import orgCenterLike from './modules/org-center-like'
import orgCenterComments from './modules/org-center-comments'
import registerForm from './modules/register-form'
import activityList from './modules/activity-list'
import activityHome from './modules/activity-home'
import activityView from './modules/activity-view'
import activityFilter from './modules/activity-filter'
import home from './modules/home'
import homeNews from './modules/home-news'
import homeActivity from './modules/home-activity'
import orgCenterIntroActivity from './modules/org-center-intro-activity'
import orgCenterActivity from './modules/org-center-activity'
import feedback from './modules/feedback'
export default new Vuex.Store({
  modules: {
    topbar,
    bottombar,
    sidemenu,
    focus,
    focusThumb,
    focusDate,
    newsList,
    newsHome,
    newsView,
    newsFilter,
    filter,
    toolbar,
    userBanner,
    orgCenterIntroBlk,
    orgCenterHot,
    orgCenterSimilar,
    orgCenterArticle,
    orgCenterFans,
    userList,
    orgCenterLike,
    orgCenterComments,
    registerForm,
    activityList,
    activityHome,
    activityView,
    activityFilter,
    home,
    homeNews,
    homeActivity,
    orgCenterIntroActivity,
    orgCenterActivity,
    feedback
  },
  state,
  mutations
})
