<template>
    
    <div class = "log">
            <div id="login" class="animate form" v-if="isLogin">
			<!-- <form  action="localhost:8080/user/login" autocomplete="on" method="post" id ="login-form">  -->
				<h1>Log in</h1> 
				<p> 
					<label for="username" class="uname" data-icon="u" >U </label>
					<input id="username" name="username"  v-model = "loginInfo.username" required="required" type="text" placeholder="input your username"/>
				</p>
				<p> 
					<label for="password" class="youpasswd" data-icon="p"> P </label>
					<input id="password" name="password" v-model = "loginInfo.password" required="required" type="password" placeholder="input your password" /> 
				</p>
				<p class="keeplogin"> 
					<input type="checkbox" name="isloginkeeping" v-model= "loginInfo.isloginkeeping" id="loginkeeping" value="loginkeeping" /> 
					<label for="loginkeeping">Keep me logged in</label>
				</p>
				<p class="button-p"> 
					<!-- <input type="submit" value="Login" @click="submittologin"/>  -->
                    	<button  @click="submittologin" id = "loginbutton" >Sign in</button> 
				</p>
				<p class="change_link">
					Not a member yet ?
					<a href="#" class="to_register">Join us</a>
				</p>
			<!-- </form> -->
        </div>
            <div id="register" v-if="isLogup">
			<!-- <form  action="/user/register" autocomplete="on">  -->
				<h1> Sign up </h1> 
				<p> 
					<label for="useregisterrnamesignup" class="uname" data-icon="u">U:</label>
					<input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="set your username" />
				</p>
				<p> 
					<label for="emailsignup" class="youmail" data-icon="e" >E:</label>
					<input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="input your email"/> 
				</p>
				<p> 
					<label for="passwordsignup" class="youpasswd" data-icon="p">P:</label>
					<input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="set your email"/>
				</p>
				<p> 
					<label for="passwordsignup_confirm" class="youpasswd" data-icon="p">P:</label>
					<input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="input again"/>
				</p>
				<p > 
					<button  @click="submittoregister"  id = "registerbutton">Sign up</button> 
				</p>
				<p>  
					Already a member ?
					<a href="#" class="to_register"> Go and log in </a>
				</p>
			<!-- </form> -->
		</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'log',
    props:[],
    data(){
        return {
            isLogin:true,
            isLogup:null,
            // 登录数据
            loginInfo: {
                username:null,
                password:null,
                isloginkeeping:true,
            },
            // 注册诗句
            registerInfo: {
                usernamesignup:null,
                emailsignuo:null,
                passwordsignup:null,
                passwordagain:null,
            }
        }

    },
    methods:{
        // 登录提交
        submittologin(){
            // alert(this.loginInfo)
            console.log(this.loginInfo);
            let loginUrl = "http://localhost:8080/user/login"
            const a =  axios.post(loginUrl,this.loginInfo,{
                headers: {
                    'Content-Type': 'application/json',
                    //  'http-equiv':'Access-Control-Allow-Origin',
                    'Access-Control-Allow-Origin':'*',
                    useCredentails: true
                }
            }).then(function (response) {
                console.log(response);
            })
            console.log(a);
            // axios({
            //     url: loginUrl,
            //     method: 'post',
            //     data: this.loginUrl,
            //     transformRequest: [function (data) {
            //         // // Do whatever you want to transform the data
            //         // let ret = ''
            //         // for (let it in data) {
            //         // ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            //         // }
            //         return data;
            //     }],
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            //     }),then(function (response) {
            //         console.log(response);
            //     })
            
        },
        // 注册提交
        submittoregister(){
            console.log(this.logupInfo);
            let logupUrl = "http://localhost:8080/user/logup"
            const a=  axios.post(logupUrl,this.logupInfo,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'http-equiv':'Access-Control-Allow-Origin'
                }
            })
            console.log(a);

        },
        goLogup(){

        }
    },
    watch:{
        '$route':function(val){
            console.log("到log路由")
            // 判断如果是login就显示login
            if (this.$route.query.to === 'login'){
                this.isLogin = true;
                this.isLogup=false;
            }else{
                // 判断如果是logup就显示logup
                this.isLogin = false;
                this.isLogup=true;
            }
        },
        'loginInfo.username':function(){
            // alert("变了！")
        }
    }
    
}
</script>

<style scoped>
@import '../assets/css/logcss/login.css';
@import '../assets/css/logcss/register.css';

</style>