import $ from 'jquery'
import {
  handleResponse
} from '../../api'
import { getStringLength } from '../../vuex/action.js'
export const submitFeedback = ({
  dispatch,
  state
}, component) => {
  let port = state.apis['feedback']
  let submitBtn = document.querySelector('.feedback .content .submit')
  let contactElm = document.querySelector('.feedback .content input.info')
  let feedbackInfoElm = document.querySelector('.feedback .content textarea')
  let errElm = document.querySelector('.error')
  submitBtn.addEventListener('click', function (e) {
    errElm.innerHTML = ''
    if (!state.feedback.btnLock) {
      dispatch('SET_FEEDBACK_BTN_LOCK', true)
      errElm.innerHTML = '正在提交'
      let feedbackInfo = feedbackInfoElm.value
      let feedbackContact = contactElm.value
      // 判断是否为空
      if (!$.trim(feedbackInfo)) {
        errElm.innerHTML = '内容不能为空'
        dispatch('SET_FEEDBACK_BTN_LOCK', false)
        return false
      }
      // 判断长度
      if (getStringLength(feedbackInfo) < 10) {
        errElm.innerHTML = '反馈内容不能少于10个字符'
        dispatch('SET_FEEDBACK_BTN_LOCK', false)
        return false
      }
      component.$http.post(port, {
        'contact': feedbackContact,
        'content': feedbackInfo,
        'type': 'phone'
      }).then(function (res) {
        handleResponse(res,
          function (data) {
            console.log(111)
            dispatch('SET_FEEDBACK_BTN_LOCK', false)
            component.$router.go({
              name: 'home'
            })
          }, function (m, e) {
            errElm.innerHTML = m
            dispatch('SET_FEEDBACK_BTN_LOCK', false)
          })
      })
    }
  })
}
