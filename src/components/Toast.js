import Toast from './Toast.vue'
import Vue from 'vue'

console.log(Toast);
const ToastConstructor = Vue.extend(Toast)

const ShowToast = function (text,duration) {
  console.log(text,duration);
  // toastDom是toast组件实例，ToastConstructor是toast组件的构造函数，类似new Vue
  const toastDom = new ToastConstructor({
    el:document.createElement('div'),
    data() {
      return {
        text:text,
        isShow:true
      }
    },
  })

  document.body.appendChild(toastDom.$el)

  setTimeout(() => {
    toastDom.isShow = false
    document.body.removeChild(toastDom.$el)
  },duration);
}

function toastRegistry () {
  Vue.prototype.$toast = ShowToast
}

export default toastRegistry