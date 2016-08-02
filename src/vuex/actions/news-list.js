import {
  handleResponse,
  APIError
} from '../../api'
// import $ from 'jquery'

const $ = window.$

/**
 * 配置
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const setConfig = ({
  dispatch,
  state
}, component) => {
  console.log('配置资讯列表组件参数')
  // 接口地址
  state.newsList.port = component.config.port
  // 请求参数
  state.newsList.params = component.config.params
  // 是否显示评论数
  state.newsList.showCommentsNum = component.config.showCommentsNum
  // 是否显示点赞数
  state.newsList.showLikedNum = component.config.showLikedNum
}

/**
 * 获取资讯列表数据
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const getNewsData = ({
  dispatch,
  state
}, component) => {
  const _port = state.newsList.port
  const _params = state.newsList.params
  console.log('请求资讯列表组件数据', _port, _params)

  // loading状态
  dispatch('IS_NEWS_LIST_LOADING', true)

  // 发起请求
  component.$http.get(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // loading状态
        dispatch('IS_NEWS_LIST_LOADING', false)
        // 设置资讯列表数据
        dispatch('SET_NEWS_LIST', data.list)
        // 设置请求参数中的页码
        dispatch('SET_NEWS_LIST_PAGE_NUMBER_PLUS')
        // 初始化滚动加载
        checkLoadArea({ dispatch, state }, component)
      },
      function (errmsg, errcode) {
        if (Number(errcode) === 1011) {
          // 获取数据出错或无数据
          dispatch('SET_NEWS_LIST_NODATA', true)
          dispatch('SET_NEWS_LIST_LOCKED', true)
        } else if (Number(errcode) === 1099) {
          // 数据达到或超过最大页数
          dispatch('SET_NEWS_LIST_LOCKED', true)
        } else {
          // 输出错误
          APIError(_port, errmsg)
        }
        // loading状态
        dispatch('IS_NEWS_LIST_LOADING', false)
      }
    )
  }, function (res) {
    // 弹出提示
    window.alert('资讯数据获取失败，请稍后重试')
    // loading状态
    dispatch('IS_NEWS_LIST_LOADING', false)
  })
}

/**
 * 滚动加载
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const checkLoadArea = ({
  dispatch,
  state
}, component) => {
  // console.log('监测滚动加载')
  $(window)
  .off('scroll.getNewsList')
  .on('scroll.getNewsList', function (e) {
    const _windowHeight = $(window).height()
    const _scrollTop = $(window).scrollTop()
    const _listHeight = $(component.$el).height()
    const _areaHeight = _windowHeight / 100 * 20
    const _isLoading = state.newsList.isLoading
    const _isLocked = state.newsList.isLocked
    const _checkHeight = _windowHeight + _scrollTop + _areaHeight

    const _canLoad = !_isLoading && !_isLocked && _checkHeight >= _listHeight ? 1 : 0
    // console.log('滚动加载条件：', _isLoading, _isLocked, _checkHeight, _listHeight)

    if (_canLoad === 1) {
      getNewsData({ dispatch, state }, component)
    }
  })
}

/**
 * 停止监测滚动加载
 * @param  {[type]} {                    dispatch [description]
 * @param  {[type]} state} [description]
 * @return {[type]}        [description]
 */
export const stopCheckLoadArea = () => {
  // console.log('停止监测滚动加载')
  $(window).off('scroll.getNewsList')
}

/**
 * 资讯列表单元激活
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
export const setNewsItemActived = (index) => {
  $('.news-item').removeClass('active')
  $('.news-item:eq(' + index + ')').addClass('active')
}

/**
 * 初始化
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const init = ({
  dispatch,
  state
}, component) => {
  // 配置
  setConfig({ dispatch, state }, component)
  // 请求数据
  getNewsData({ dispatch, state }, component)
}

/**
 * 重置
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
export const reset = ({
  dispatch,
  state
}, component) => {
  dispatch('RESET_NEWS_LIST')
}
