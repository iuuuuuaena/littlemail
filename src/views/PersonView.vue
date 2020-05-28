<template>
    <div class="personl-div">
        <!-- <div class="left-manage">
            <person-manage-com></person-manage-com>
        </div> -->
        <!-- <div class="right-content">
             个人信息修改 -->
            <!-- <person-content-com></person-content-com>
            问题反馈 -->
            <!-- <question-reflect-com></question-reflect-com>
             购物管理 -->
            <!-- <shopping-cart-manage-com></shopping-cart-manage-com>
        </div> -->

 <el-container>
      <!-- <el-header>Header</el-header> -->
      <el-container>
        <el-aside width="200px">
            <left-nav-menu></left-nav-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    </div>
</template>


<script>
// 引入左边的控制栏和右边的各个视口控件
import PersonContentCom from '../components/person/PersonContentCom.vue'
import PersonManageCom from '../components/person/PersonManageCom.vue'
import QuestionReflectCom from '../components/person/QuestionReflectCom.vue'
import ShoppingCartManageCom from '../components/person/ShoppingCartManageCom.vue'


// 导入elementui
// @的意思是：在build/webpack.base.conf.js中有如下代码, alias就是起别名，@符号就是代表src路径， 所以@/components/NavMenu就是src/components/NavMenu。 这样webpack就知道如何引入文件了。这样做的好处是不必到处去写src了。
import LeftNavMenu from "@/components/person/elementUI/LeftNavMenu.vue"

export default {
    components:{
        // PersonContentCom,PersonManageCom,QuestionReflectCom,ShoppingCartManageCom
        LeftNavMenu
    }
}
</script>

<style  scoped>
@import '../assets/css/personcss/person.css';

</style>
