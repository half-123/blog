import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './router.js'
import moment from 'moment'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(moment)

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD';
  return moment(value).format(formatString);
});

const router = new VueRouter({
  routes: Routes,
  mode:"hash"
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
