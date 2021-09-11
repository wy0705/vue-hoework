import Vue from 'vue'
// var vue = require('vue');
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
