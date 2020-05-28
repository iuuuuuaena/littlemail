// 这个组件是 总导航条组件 ，全部通用
<template>
    <div class="top-bar-wrapper">
 
        <div class="top-bar screen-width clearfix">
          
            <!-- 左侧导航条 -->
            <ul class="service">
                <li><a href=""> <router-link to="/">迷糊商城</router-link> </a></li>
                <li>|</li>
                <li><a href=""> <router-link to="/news">搜索商品</router-link> </a></li>
                <li>|</li>
                <li><a href=""> <router-link to="/publishgoods">发布商品</router-link></a></li>
                <!-- <li>|</li> -->
                <!-- <li><a href=""> 我的文章</a></li>
                <li>|</li>
               
                <li><a href=""> 我的作业</a></li> -->
            </ul>
            <!-- 最右侧的 -->
            <ul class="point ">
                <li class="point-me">
                    <a href="#">
                        <span class="fas fa-hand-pointer">
                        </span><router-link to="/personal"> Me </router-link></a>

                    <div class="car-info">
                        <!-- 这里是个人的操作 -->
                        <!-- 未登录显示这个 -->
                        <div class="before-view" v-show="!isLogin">
                            <p>未登录</p>
                        </div>
                        <!-- 已经登录显示这个 -->
                        <div class = "after-view" v-show="isLogin">
                            <own-manage-com :userimage = "userInfo.userimage" :usernickname= "userInfo.usernickname" :username= 'userInfo.username'></own-manage-com>
                        </div>
                    </div>
                </li>

            </ul>
            <!-- 右侧的导航 -->
            <ul class="user-info">
                <!-- 这里使用传入对象，query中的to是表示去登录还是注册 -->
                <li><router-link :to="{path:'/log',query:{to:todo[0]}}"> 登录</router-link></li>
                <li>|</li>
                <li><router-link :to="{path:'/log',query:{to:todo[1]}}"> 注册</router-link></li>
                <li>|</li>
                <li class="li-picture">
                    <a href="" class="app">我的购物车
                        <!-- 添加弹出层 -->
                        <div class="qrcode">
                            <!-- <img src="../asset/img/iu990.png" alt="无法显示"> -->
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>


<script > 
import OwnManageCom from '@/components/public/OwnManageCom.vue'


export default {
    props:['portInfo'],
    data(){
        return {
            todo:['login','logup'],
            // 判断是否登录？
            isLogin: true,
            // 导航条要显示的几个属性
            userInfo:{
                username:null,
                usernickname:null,
                userimage:null
            }
        }
    },
    components:{
        OwnManageCom
    },
    methods:{

    }

}
</script>

<style scoped>
 /* 引入默认样式表 */
@import "../../assets/css/base.css";
/*  引入当前页面样式表  */
@import "../../assets/css/publicnavcss/mainnav.css";

@import "../../assets/css/buttom.css";

</style>