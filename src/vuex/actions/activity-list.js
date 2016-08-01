import {
  handleResponse,
  APIError
} from '../../api'
import $ from 'jquery'

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
  console.log('配置活动列表组件参数')
  // 接口地址
  state.activityList.port = component.config.port
  // 请求参数
  state.activityList.params = component.config.params
}

/**
 * 获取活动列表数据
 * @param  {[type]} {                       dispatch [description]
 * @param  {[type]} state}    [description]
 * @param  {[type]} component [description]
 * @return {[type]}           [description]
 */
const getEventData = ({
  dispatch,
  state
}, component) => {
  const _port = state.activityList.port
  const _params = state.activityList.params

  console.log('请求活动列表组件数据', _port, _params)

  // loading状态
  dispatch('IS_EVENT_LIST_LOADING', true)

  // 发起请求
  component.$http.get(_port, _params)
  .then(function (res) {
    handleResponse(
      res,
      function (data) {
        // loading状态
        dispatch('IS_EVENT_LIST_LOADING', false)
        // 设置活动列表数据
        dispatch('SET_EVENT_LIST', data.list)
        // console.log(data.list[0].cost.amount)
        // 设置请求参数中的页码
        dispatch('SET_EVENT_LIST_PAGE_NUMBER_PLUS')
        // 初始化滚动加载
        checkLoadArea({ dispatch, state }, component)
      },
      function (errmsg, errcode) {
        if (Number(errcode) === 1011) {
          // 获取数据出错或无数据
          dispatch('SET_EVENT_LIST_NODATA', true)
          dispatch('SET_EVENT_LIST_LOCKED', true)
        } else if (Number(errcode) === 1099) {
          // 数据达到或超过最大页数
          dispatch('SET_EVENT_LIST_LOCKED', true)
        } else {
          // 输出错误
          APIError(_port, errmsg)
        }
        // loading状态
        dispatch('IS_EVENT_LIST_LOADING', false)
      }
    )
  }, function (res) {
    // 弹出提示
    window.alert('活动数据获取失败，请稍后重试')
    // loading状态
    dispatch('IS_EVENT_LIST_LOADING', false)
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
  console.log('监测活动列表滚动加载')
  $(window)
  .off('scroll.getEventList')
  .on('scroll.getEventList', function (e) {
    const _windowHeight = $(window).height()
    const _scrollTop = $(window).scrollTop()
    const _listHeight = $(component.$el).height()
    const _areaHeight = _windowHeight / 100 * 20
    const _isLoading = state.activityList.isLoading
    const _isLocked = state.activityList.isLocked
    const _checkHeight = _windowHeight + _scrollTop + _areaHeight

    const _canLoad = !_isLoading && !_isLocked && _checkHeight >= _listHeight ? 1 : 0
    // console.log('滚动加载条件：', _isLoading, _isLocked, _checkHeight, _listHeight)

    if (_canLoad === 1) {
      getEventData({ dispatch, state }, component)
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
  console.log('停止监测活动列表滚动加载')
  $(window).off('scroll.getEventList')
}

/**
 * 活动列表单元激活
 * @param  {[type]} index [description]
 * @return {[type]}       [description]
 */
export const setEventItemActived = (index) => {
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
  getEventData({ dispatch, state }, component)
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
  dispatch('RESET_EVENT_LIST')
}
