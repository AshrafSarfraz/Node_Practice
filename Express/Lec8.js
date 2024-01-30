// how to use route middle ware that are created in other folder
// route middle ware
// if middleware file istoo high so it is good to make seperate


const express=require('express')
const Route_Level_Middleware= require('./Middleware')    // import middleware
const app=express()


app.get('/home',Route_Level_Middleware, (req,res)=>{
   res.send('You are Welcome Home Screen') 
})
app.get('/contact',Route_Level_Middleware, (req,res)=>{
    res.send('You are Welcome contact Screen') 
 })
app.get('/about',(req,res)=>{
    res.send('You are Welcome in about') 
 })
app.listen(5000)      