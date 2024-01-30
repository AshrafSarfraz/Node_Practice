// application middle ware

const express=require('express')
const app=express()

const App_Level_Middleware=(req,res,next)=>{
    if(!req.query.age){
        res.send('Age must be entered')
    }
    else  if(req.query.age<18){
        res.send('Age must be more than 18')
    }
    else{
        next();
    }}

app.use(App_Level_Middleware)

app.get('',(req,res)=>{
   res.send('Application Middle ware') 
})
app.listen(5000)      