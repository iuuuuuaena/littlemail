// 这里是Header-Top组件，所有页面都有
<template>
     <div class="header screen-width">
        <div class="head clearfix">
            <!-- logo -->
            <div class="logo">
                <h1>
                    <a href="#" class="logo-a">
                        <!-- 回到home -->
                        <router-link to="/"></router-link>
                        <div class="info">
                            <img class="image-iu-info" src="@/assets/img/2.jpeg" alt="">
                        </div>
                        <img class="logo-picture" src="@/assets/img/3.jpg" alt="">
                    </a>
                </h1>
            </div>
            <!-- 大标题 -->
            <div class="main-name">
                <div class = "horizontal-center vertical-center">
                <a href="#"> <h1>迷糊商城</h1> </a>
               </div>
                 <div class="search">
                      <input type="text" id = 'search' v-if="isShow">
                    
                     <button id = "search-button" @click="show"><img src="../../assets/img/search.png" alt=""></button>
                    

                 </div>
                <div class="connectus">
                    <div class='icon1'>
                        <a href=""><router-link :to="{path:'/weather',query:{city:this.city}}"> 天气</router-link> </a><br>
                        <a href=""><router-link :to="{path:'/news',query:{name:'tom',age:'15'}}"> news </router-link></a><br>
                        <a href=""> <router-link to="/about">About</router-link> |</a>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
 /* 引入默认样式表 */
@import "../../assets/css/base.css";
/*  引入当前页面样式表  */
@import "../../assets/css/publicnavcss/headertop.css";

@import "../../assets/css/buttom.css";
</style>

<script>
export default {
    data(){
        return {
            city:"",
            isShow:false
        }
    },
    methods:{
        show(){
            this.isShow = !this.isShow
        }
    }
}
</script>