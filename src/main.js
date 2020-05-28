import Vue from 'vue'
import App from './App.vue'
import router from './router'
import swip from 'swiper/css/swiper.css' //需要在单独把这个css引入 import
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper' //引入这个npm包 
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)//全局使用ElementUI



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
