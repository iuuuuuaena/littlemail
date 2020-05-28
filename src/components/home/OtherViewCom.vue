// otherview的组件
<template>
    <div class="other">
        <div class="other-left">
            
            <other-son-com></other-son-com>
        </div>
        <div class="other-right">

            <other-son-com></other-son-com>
        </div>
        <div class="other-center">

            <other-son-com></other-son-com>
        </div>


        
    </div>

</template>


<style scoped>
@import '../../assets/css/homecss/maincss/other.css';

</style>

<script>
// 引入other的子组件，用于显示最近上架的物品
import OtherSonCom from './otherview/OtherSonCom.vue'
export default {
    components:{
        OtherSonCom
    }
    
}
</script>