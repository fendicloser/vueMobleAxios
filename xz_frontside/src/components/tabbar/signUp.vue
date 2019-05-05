<template>
    <div>
        用户注册
        <form action="#">
            用户名
            <input type="text" v-model="name"/><br>
            密码
            <input type="password" v-model='pwd'><br>
            <input type="button" @click='signUp' value='signUp'>
        </form>
    </div>
</template>
<script>
import { URLSearchParams } from 'url';
import qs from 'qs'
export default {
    data(){
        return {
            name:'',
            pwd:'',
            dataPost:{
                name:'',
                pwd:''
            }
        }
    },
    methods:{
        signUp(){
            var url='http://127.0.0.1:3000/user/signUp'
            console.log(qs.stringify(this.dataPost))
            this.axios.post(url,qs.stringify(this.dataPost)).then(result=>{
                console.log(result)
            })
        }
    },
    watch:{
        name(){
            this.dataPost.name=this.name
        },
        pwd(){
            this.dataPost.pwd=this.name
        }
    }
    
}
</script>
