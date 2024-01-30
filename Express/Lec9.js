// ab agr 20 25 screens ma middleware lgana ho to kaya har screen ma route middle-ware likhna pary gy
// nai iska ek or solution ha 
// we use Express.router()


const express=require('express')
const Route_Level_Middleware= require('./Middleware')       // import middleware
const app=express()
const route=express.Router()                              // need this 

route.use(Route_Level_Middleware)                        // route use middleware condition

route.get('/home', (req,res)=>{                          // we use route instead of app  for apply middleware 
   res.send('You are Welcome Home Screen') 
})
route.get('/contact', (req,res)=>{
    res.send('You are Welcome contact Screen') 
 })
app.get('/about',(req,res)=>{
    res.send('You are Welcome in about') 
 })
 
 app.use('/',route);                               // app use  route concept
 
app.listen(5000)      