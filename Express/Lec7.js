// route middle ware

const express=require('express')
const app=express()

const Route_Level_Middleware=(req,res,next)=>{
    if(!req.query.age){
        res.send('Age must be entered')
    }
    else  if(req.query.age<18){
        res.send('Age must be more than 18')
    }
    else{
        next();
    }}


app.get('/home',Route_Level_Middleware, (req,res)=>{
   res.send('You are Welcome Home Screen') 
})
app.get('/about',(req,res)=>{
    res.send('You are Welcome in about') 
 })
app.listen(5000)      