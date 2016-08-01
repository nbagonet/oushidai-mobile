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

/**
 * 获取正文内容相关数据
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const getNewsContentData = ({
  dispatch,
  state
}, component) => {
  // 资讯id
  const _id = component.$route.params.id
  // 接口
  const _port = state.apis['news-content']
  // 请求参数
  const _params = {
    id: _id
  }

  // loading状态
  dispatch('GLOBAL_LOADING', true)

  // 清空作者信息
  dispatch('SET_NEWS_AUTHOR_INFO', '')
  // 清空相关资讯列表
  dispatch('SET_NEWS_VIEW_RELEATED_LIST_CONFIG', {
    type: state.newsView.releatedListConfig.type,
    number: state.newsView.releatedListConfig.number,
    list: []
  })

  // 发起请求
  component.$http.get(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // 设置资讯正文相关数据
        dispatch('SET_NEWS_CONTENT', data)
        // console.log(state.newsView.newsData)
        // 设置topheader配置信息
        dispatch('SET_TOPHEADER_CONFIG', {
          backLink: 'news',
          prev: {link: 'news-view', id: data.prevNews.id},
          next: {link: 'news-view', id: data.nextNews.id}
        })
        // loading状态
        dispatch('GLOBAL_LOADING', false)
        // 读取作者详细数据
        getAuthorInfo({ dispatch, state }, component)
        // 获取相关资讯数据
        getReleatedData({ dispatch, state }, component)
        // 配置底部工具栏
        dispatch('SET_NEWS_VIEW_BOTTOM_TOOLBAR_CONFIG', data)
        // 设置分享数据
        dispatch('SET_SHARE_INFO', {
          title: data.title,
          description: removeHTMLTag(data.content),
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
        dispatch('IS_NEWS_VIEW_ERROR', true)
      }
    )
  }, function (res) {
    // 弹出提示
    window.alert('资讯内容数据获取失败，请稍后重试')
    // loading状态
    dispatch('GLOBAL_LOADING', false)
    // 设置出错状态
    dispatch('IS_NEWS_VIEW_ERROR', true)
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
  // 接口
  const _port = state.apis['author-info']
  // 请求参数
  const _params = {
    userId: '',
    type: state.newsView.newsData.author.type,
    id: state.newsView.newsData.author.uid
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
        dispatch('SET_NEWS_AUTHOR_INFO', data)
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
    window.alert('作者详情数据获取失败，请稍后重试')
    // loading状态
    dispatch('GLOBAL_LOADING', false)
  })
}

/**
 * 获取相关资讯数据
 * @param  {[type]} {                        dispatch [description]
 * @param  {[type]} state}     [description]
 * @param  {[type]} components [description]
 * @return {[type]}            [description]
 */
const getReleatedData = ({
  dispatch,
  state
}, component) => {
  // 接口
  const _port = state.apis['news-related']
  // 请求参数
  const _params = {
    num: state.newsView.releatedListConfig.number,
    newsId: state.newsView.newsData.id
  }

  // loading状态
  dispatch('GLOBAL_LOADING', true)

  // 发起请求
  component.$http.get(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // 设置相关资讯列表配置
        dispatch('SET_NEWS_VIEW_RELEATED_LIST_CONFIG', {
          type: state.newsView.releatedListConfig.type,
          number: state.newsView.releatedListConfig.number,
          list: data.list
        })
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
    window.alert('相关资讯数据获取失败，请稍后重试')
    // loading状态
    dispatch('GLOBAL_LOADING', false)
  })
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
 * 初始化资讯正文页
 * @return {[type]} [description]
 */
export const initNewsView = ({
  dispatch,
  state
}, component) => {
  // 读取正文内容数据
  getNewsContentData({ dispatch, state }, component)
}

/**
 * 重置资讯正文数据
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const resetNewsView = ({
  dispatch,
  state
}, component) => {
  dispatch('RESET_NEWS_VIEW_STATE')
}
