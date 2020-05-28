<template>
    
    <div class="nav-right-swiper">
        <div>
            <swiper :options="swiperOption" ref="mySwiper" >
		    <!-- slides -->
		    <swiper-slide>
                <!-- 规定每个页的高度 -->
                <div class='every-page'>
                    <img class = "goods-img" src="../../assets/img/4.jpeg" alt="">
                </div>
            </swiper-slide>
		    <swiper-slide> <!-- 规定每个页的高度 -->
                <div class='every-page'>
                    <img class = "goods-img" src="../../assets/img/5.jpeg" alt="">
                    </div>
            </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>//
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		    <div class="swiper-scrollbar"   slot="sxcrollbar"></div>
		  </swiper>
        </div>
    </div>
</template>


<style  scoped>

@import '../../assets/css/homecss/maincss/rightswiper.css';
   

</style>
<script>
// 引入swiper轮播图
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.js'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    components:{

    },
    data(){
        return {
          swiperOption: { //更多的参数的配置看swiper4官网介绍：http://www.swiper.com.cn/api/navigation/210.html
          notNextTick: true,
          loop:true,
          autoplay: 3000,
          direction : 'horizontal', 
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          navigation: { //最新版本的需要这样配置，按钮才有效
            prevEl:'.swiper-button-prev',//上一张
            nextEl:'.swiper-button-next'//下一张
          },
          scrollbar:'.swiper-scrollbar',//滚动条
            mousewheelControl : true,
            observeParents:true
        }
        }
    }
}

</script>
