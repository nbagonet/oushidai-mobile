import {
  handleResponse,
  APIError
} from '../../api'
import {
  removeHTMLTag
} from '../../vuex/action'
import {
  setWeixinShare
} from '../../vuex/action'
import $ from 'jquery'

/**
 * 获取正文内容相关数据
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const getActivityContentData = ({
  dispatch,
  state
}, component) => {
  // 活动id
  const _id = component.$route.params.id
  // 接口
  const _port = state.apis['activity-content']
  // 请求参数
  const _params = {
    id: _id
  }

  // loading状态
  dispatch('GLOBAL_LOADING', true)

  // 清空作者信息
  dispatch('SET_EVENT_AUTHOR_INFO', '')
  // 清空相关资讯列表
  dispatch('SET_EVENT_VIEW_RELEATED_LIST_CONFIG', {
    type: state.activityView.releatedListConfig.type,
    number: state.activityView.releatedListConfig.number,
    list: []
  })

  // 发起请求
  component.$http.get(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // 设置活动正文相关数据
        dispatch('SET_EVENT_CONTENT', data)
        // console.log(state.activityView.activityData.data.description)
        // 设置topheader配置信息
        dispatch('SET_TOPHEADER_CONFIG', {
          backLink: 'activity',
          prev: {link: 'activity-view', id: data.prev.id},
          next: {link: 'activity-view', id: data.next.id}
        })
        // loading状态
        dispatch('GLOBAL_LOADING', false)
        // 读取作者详细数据
        getAuthorInfo({ dispatch, state }, component)
        // 获取相关资讯数据
        getReleatedData({ dispatch, state }, component)
        // 配置底部工具栏
        dispatch('SET_EVENT_VIEW_BOTTOM_TOOLBAR_CONFIG', data)
        // 设置分享数据
        dispatch('SET_SHARE_INFO', {
          title: data.title,
          description: removeHTMLTag(data.description),
          image: data.cover,
          tags: function () {
            let _tags = []
            for (var i = 0; i < data.tags.length; i++) {
              _tags.push(data.tags[i])
            }
            return _tags
          }
        })
        setShareConf({ dispatch, state })
      },
      function (errmsg, errcode) {
        // 输出错误
        APIError(_port, errmsg)
        // loading状态
        dispatch('GLOBAL_LOADING', false)
        // 设置出错状态
        dispatch('IS_EVENT_VIEW_ERROR', true)
      }
    )
  }, function (res) {
    // 弹出提示
    window.alert('资讯内容数据获取失败，请稍后重试')
    // loading状态
    dispatch('GLOBAL_LOADING', false)
    // 设置出错状态
    dispatch('IS_EVENT_VIEW_ERROR', true)
  })
}

/**
 * 获取用户详细信息
 * @param  {[type]} {                        dispatch [description]
 * @param  {[type]} state}     [description]
 * @param  {[type]} components [description]
 * @return {[type]}            [description]
 */
const getAuthorInfo = ({
  dispatch,
  state
}, component) => {
  // console.log(state.activityView.activityData)
  // 接口
  const _port = state.apis['activity-org-info']
  // 请求参数
  const _params = {
    userId: '',
    type: state.activityView.activityData.data.author.type,
    id: state.activityView.activityData.data.author.uid
  }

  // loading状态
  dispatch('GLOBAL_LOADING', true)

  // 发起请求
  component.$http.get(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // 用户信息数据
        dispatch('SET_EVENT_AUTHOR_INFO', data)
        // loading状态
        dispatch('GLOBAL_LOADING', false)
      },
      function (errmsg, errcode) {
        // 输出错误
        APIError(_port, errmsg)
        // loading状态
        dispatch('GLOBAL_LOADING', false)
      }
    )
  }, function (res) {
    // 弹出提示
    window.alert('活动发布者详情数据获取失败，请稍后重试')
    // loading状态
    dispatch('GLOBAL_LOADING', false)
  })
}

/**
 * 获取相关活动数据
 * @param  {[type]} {                        dispatch [description]
 * @param  {[type]} state}     [description]
 * @param  {[type]} components [description]
 * @return {[type]}            [description]
 */
const getReleatedData = ({
  dispatch,
  state
}, component) => {
  // // 接口
  // const _port = state.apis['news-related']
  // // 请求参数
  // const _params = {
  //   num: state.newsView.releatedListConfig.number,
  //   newsId: state.newsView.newsData.id
  // }
  //
  // // loading状态
  // dispatch('GLOBAL_LOADING', true)
  //
  // // 发起请求
  // component.$http.get(_port, _params)
  // .then(function (res) {
  //   handleResponse(
  //     res,
  //     function (data) {
  //       // 设置相关资讯列表配置
  //       dispatch('SET_NEWS_VIEW_RELEATED_LIST_CONFIG', {
  //         type: state.newsView.releatedListConfig.type,
  //         number: state.newsView.releatedListConfig.number,
  //         list: data.list
  //       })
  //       // loading状态
  //       dispatch('GLOBAL_LOADING', false)
  //     },
  //     function (errmsg, errcode) {
  //       // 输出错误
  //       APIError(_port, errmsg)
  //       // loading状态
  //       dispatch('GLOBAL_LOADING', false)
  //     }
  //   )
  // }, function (res) {
  //   // 弹出提示
  //   window.alert('相关资讯数据获取失败，请稍后重试')
  //   // loading状态
  //   dispatch('GLOBAL_LOADING', false)
  // })
}

/**
 * 配置分享信息
 * @param  {[type]} {     dispatch      [description]
 * @param  {[type]} state }             [description]
 * @return {[type]}       [description]
 */
export const setShareConf = ({ dispatch, state }) => {
  // 初始化微信分享配置
  setWeixinShare({ dispatch, state })
}

/**
 * 初始化活动正文页
 * @return {[type]} [description]
 */
export const initActivityView = ({
  dispatch,
  state
}, component) => {
  // 读取正文内容数据
  getActivityContentData({ dispatch, state }, component)
}

/**
 * 重置活动正文数据
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const resetActivityView = ({
  dispatch,
  state
}, component) => {
  dispatch('RESET_EVENT_VIEW_STATE')
}

/**
 * 设置说明内容激活的标签
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} index  [description]
 * @return {[type]}        [description]
 */
export const setActivityInfoContent = ({
  dispatch,
  state
}, index) => {
  dispatch('SET_ACTIVITY_INFO_CONTENT', index)
  // console.log($('.info-content').offset().top)
  $(window).scrollTop($('.info-content').offset().top)
}

/**
 * 展开/收起主内容项
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} index  [description]
 * @return {[type]}        [description]
 */
export const setExpandItem = ({
  dispatch,
  state
}, index) => {
  if (state.activityView.expandItem === index) {
    dispatch('SET_EXPAND_ITEM', -1)
  } else {
    dispatch('SET_EXPAND_ITEM', index)
  }
}

/**
 * 配置地图
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @param  {[type]} src    [description]
 * @return {[type]}        [description]
 */
export const setActivityMap = ({
  dispatch,
  state
}, src) => {
  dispatch('SET_ACTIVITY_MAP', src)
}
