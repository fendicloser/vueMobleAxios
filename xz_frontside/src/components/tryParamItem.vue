<template>
    <li >
        <div @click="selectFunc" v-bind:class="{delete:isDeleted}"><mt-button @click='subadd' type="primary">-</mt-button>{{data}}____{{number}}<mt-button @click='add' type="danger">+</mt-button></div></li>
</template>
<script>
export default {
    name:'tryParamItem',
    props:{
        dataContent:'',
        isDeletedPorps:false,
    },
    data(){
        return {
            data:this.dataContent,
            number:0,
            isDeleted:this.isDeletedPorps

        }
    },
    methods:{
        selectFunc(e){
            this.isDeleted=!this.isDeleted

        },
        
        add(e){
            this.number=this.number+1
            e.stopPropagation();
        },
        subadd(e){
            e.stopPropagation();
            if(this.number!=0){
                this.number=this.number-1
                
            }
        }
    }
}
</script>
<style  scoped>
    .delete{
        background-color:rebeccapurple
    }

</style>

