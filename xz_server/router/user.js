var express=require('express')
var bodyPaser=require('body-parser')

var userRouter=express.Router()
var pool=require('../pool')

userRouter.use(bodyPaser.urlencoded({extended:false}))
userRouter.post('/signUp',(req,res)=>{
    console.log(req.body.name)
    res.send(req.body)
})

var data={
    data1:{id:1,name:'1'},
    data2:{id:2,name:'2'},
    data3:{id:3,name:'3'},
    data4:{id:4,name:'4'},
    data5:{id:5,name:'5'},
    data6:{id:6,name:'6'},
    data7:{id:7,name:'7'},
    data8:{id:8,name:'8'},
    data9:{id:9,name:'9'},
    data10:{id:10,name:'10'},
    data11:{id:11,name:'11'},
    data12:{id:12,name:'12'},
    data13:{id:13,name:'13'},
}
userRouter.get('/tryParam',(req,res)=>{
    res.json(data)
})

userRouter.get('/login',(req,res)=>{
    var name=req.query.name;
    var pwd=req.query.pwd;
    var sql='select name from xz_login where name=? and pwd=?'
    pool.query(sql,[name,pwd],(err,result)=>{
        if (err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:'incorrect username and password'})
        }else{
            res.send({code:1,msg:'login success'})
        }
    }) 
})
module.exports=userRouter