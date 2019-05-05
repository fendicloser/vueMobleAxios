<template>
    <div class="app-login"> 空组件{{n}}
        <form action='#'>
            {{waring}}
            用户名<br/>
            <input type="text" placeholder="please input username" v-model="name"/><br>

            密码<br/>
            <input type='password' placeholder="please input password" v-model="pwd"/><br>
            <input type='button' @click="btnLogin"   value="Login" />
        </form>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            n:'1111',
            name:'',
            pwd:'',
            waring:''
        }
    },
    methods:{
        btnLogin(){
            //用户名数字字母下划线
            //密码 数字
            var nameReg=new RegExp('[0-9A-Za-z]{3,8}')
            var pwdReg=new RegExp('\\d{3,8}')
            if(!nameReg.test(this.name)){
                this.waring='username incorrect'
                Toast('username incorrect')
                return
            }
            if(!pwdReg.test(this.pwd)){
                this.waring='pwd incorrect'
                Toast('pwd incorrect')
                return
            }
            var url='http://127.0.0.1:3000'
            //http://localhost:3000/user/login?name=longfu&pwd=123
            url=url+'/user/login?name='+this.name+'&pwd='+this.pwd
            
            this.axios.get(url).then(result=>{
                console.log(result)
            })
        }
    }
    
}
</script>

