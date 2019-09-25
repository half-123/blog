import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './router.js'
import moment from 'moment'
import session from 'vue-session'
import mavonEditor from 'mavon-editor'
import store from  './store.js'
import 'mavon-editor/dist/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(mavonEditor)

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(moment)
Vue.use(session)
Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD';
  return moment(value).format(formatString);
});





const router = new VueRouter({
  routes: Routes,
  mode:"hash"
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.login) {// 判断vuex中state.login是否为true
      console.log("okkkk");
      next();

    }
    else {
      next({
        path: '/',
        // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
