
// 弹框个人操作界面
<template>
    <div class="ownmanage">
        <!-- 个人照片信息 -->
        <div class="own">
            <img src="../../assets/img/1.jpg" id= "u-image" alt="">
            <h3 id= "u-nickname">{{ userInfo.usernickname}}</h3>
            <h5 id= "u-name">{{ userInfo.username}}</h5>
        </div>
        <!--个人中心 -->
        <div id = "own-center">
            <h3>个人中心</h3>
        </div>
         <!-- 问题反馈 -->
        <div id = "problem-reflect">
            <h3>问题反馈</h3>
        </div>
        <!-- 设置 -->
        <div id = "setting">
            <h3>设置面板</h3>
        </div>
    </div>

</template>


<script>
export default {
    props:{
        image:'userimage',
        usernickname:'usernickname',
        username:'username'
    },
    data(){
        return{
            userInfo:{
                // '../../assets/img/iu994.png'
                userimage:null,
                username:'111111',
                usernickname:'张三'
            }
        }
    }
    
}
</script>


<style scoped>
@import '../../assets/css/publicnavcss/ownmanage.css';

</style>