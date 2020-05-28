<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="left-nav">
      <left-nav-com></left-nav-com>
  </div>
    <div class="right-nav">
      <right-swiper-com></right-swiper-com>
    </div>
    <div class="center-title">
        最新上新
    </div>
    <div class ="view">
      <other-view-com></other-view-com>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// 引入左侧的商品导航
import LeftNavCom from '@/components/home/LeftNavCom.vue'
// 引入右侧的轮播图
import RightSwiperCom from '@/components/home/RightSwiperCom.vue'
// 引入下面的其他视图
import OtherViewCom from '@/components/home/OtherViewCom.vue'
export default {
  name: 'HomeView',
  components: {
    LeftNavCom,RightSwiperCom,OtherViewCom
  }
}
</script>

<style  scoped>
   @import '../assets/css/homecss/maincss/maincontent.css';
</style>
