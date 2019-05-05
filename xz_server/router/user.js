var express=require('express')
var bodyPaser=require('body-parser')

var userRouter=express.Router()
var pool=require('../pool')

userRouter.use(bodyPaser.urlencoded({extended:false}))
userRouter.post('/signUp',(req,res)=>{
    console.log(req.body.name)
    res.send(req.body)
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