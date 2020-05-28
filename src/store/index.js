// 1.引入包
import Vue from 'vue'
import Vuex from 'vuex'

// 2.安装插件
Vue.use(Vuex)
// 3.创建对象
const store = new Vuex.Store({
    // state:存放状态的
    state:{
        counter:0
    }

})

// 4.导出store独享，在main.js中引入
export default store