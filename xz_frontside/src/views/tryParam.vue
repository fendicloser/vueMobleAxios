<template>
    <div>{{tryParamData}}
        {{type}}
        <mt-button @click='sum'>sum</mt-button>
        <ul >
            <tryParamItem v-for='(elem,i) of tryParamData' :key='i' :data-content='elem' :is-deleted='isDeleted' ref='number' />
        </ul>
    </div>
</template>
<script>

import tryParamItem from '../components/tryParamItem'
export default {
    data(){
        return {
            n:123,
            tryParamData:'',
            type:'',
            isDeleted:true
        }
    },
    components:{
        tryParamItem
    },
    created(){
        var url='http://127.0.0.1:3000/user/tryParam'
        this.axios.get(url).then(result=>{
        console.log(result.data)
        this.tryParamData=result.data
        this.type=result.data['data1']
      })
    },
    methods:{
        sum(e){
            //console.log(this.$refs.number)
            var sum=0
            for(var i in this.$refs.number){
     
                if(!this.$refs.number[i].isDeleted){
                    sum=sum+this.$refs.number[i].number
                }
                
            }
            console.log(sum)
        },
        selectFunc(e){
            console.log(e.target.key)
           if(e.target.nodeName.toLowerCase()==='div'){
            this.isDeleted=!this.isDeleted
     
           }
        } 
    }
    
}
</script>
