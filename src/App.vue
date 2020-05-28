<template>
  <div id="app">

    <!-- 导航栏 -->
    <div id="nav">
   
  
    <main-nav></main-nav>

    <header-top> </header-top>
       <!-- <router-link :to="'/news/'+userID"> news </router-link> | -->

    </div>
    
  
    <!-- main栏 --> 
    <div class= 'main'>

      <router-view/>

    </div>

    <div class="foot">

      <foot-com></foot-com>
      
    </div>
 
  
    
  </div>
</template>


<script>

// 引入导航组件
import MainNav from './components/public/MainNavCom.vue'
// 引入头部标识组件
import HeaderTop from './components/public/HeaderTop.vue'
// 引入foot组件
import FootCom from './components/public/FootCom.vue'
export default {
  data(){
    return{
      city:""
    }
  },
  methods:{
    goHome:function(event){
      this.$router.push({
        path:"about"
      })
    },
    goNews(){
      this.$router.push({
        path:'/news',
        query:{name:'tom',age:'15'}})
    },
    search(){
        this.$router.push({
          path:'/weather',
          query:{city:this.city}
        })
    }
  },
  // 兼听路由改变
  watch:{
    '$route':function(val){
        console.log("活跃路由地址更改")
    }
  },
  components:{
    // 导航组件
      MainNav,HeaderTop,FootCom
  }
}
</script>
<style>
/* // 引入清空初始样式css */
@import  './assets/css/reset.css';
/* // 引入main样式css */
@import  './assets/css/publicmaincss/main.css';
/* // 引入foot样式css */
@import  './assets/css/publicfootcss/foot.css';
/* 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* #nav {
  padding: 30px;
} 

#nav a {
   font-weight: bold;
  color: #2c3e50; 
} */

#nav a.router-link-exact-active {
  color: #42b983;
} */

.w{
  width:1226px;
}

.left{
  background-color: rgb(185, 119, 119);
  width:30vw;
}
</style>
