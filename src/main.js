// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
// import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
//自定义全局指令   当input有值插入时  自动获取焦点
Vue.directive('focus', function (el, bindings) {
  if (bindings.value) {
    // console.log(bindings.value, el);
    el.focus();
  }
});
/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
//   console.log(to, 1);
//   console.log(from, 2);
//   next();
// })
// router.beforeResolve((to, from, next) => {
//   console.log(to);
//   next();
// })
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
