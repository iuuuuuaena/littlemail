<template>
    

    <div class="weather-list">

        <h1>城市 {{city}}</h1>
        <h1>天气 {{weather}}</h1>
        <h1>温度 {{wendu}}</h1>

        <ol>
            <li v-for="(item,index) in lifestyle" :key = 'index'>
                {{item.brf}} -- {{item.txt}}
            </li>
        </ol>
        <router-link to='/news' ></router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            city:null,
            weather:null,
            wendu:null,
            lifestyle:null
        }
    },
   
    async beforeMount(){
        console.log("232"+this.$route.query.city)
      
        let key = '8d645a63ce47476fbdaa91ccba88ba60'
        let httpUrlNow = `https://free-api.heweather.net/s6/weather/now?location=${this.$route.query.city}&key=${key}`
        
        let res = await axios.get(httpUrlNow)

        this.city = res.data.HeWeather6[0].basic.admin_area
        this.weather = res.data.HeWeather6[0].now.cond_txt
        this.wendu = res.data.HeWeather6[0].now.fl
     
        let httpUrl = `https://free-api.heweather.net/s6/weather/lifestyle?location=${this.$route.query.city}&key=${key}`

        let me = await axios.get(httpUrl)

        console.log(me.data.HeWeather6[0])  
        this.lifestyle = me.data.HeWeather6[0].lifestyle

    },
    methods:{
    
        
    },
    // mounted(){

    //          console.log(this)
    // },
    
    
}
</script>