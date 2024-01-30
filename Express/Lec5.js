// Use Get Method 
// Remove Extension of html
// Make 404 page 
// Apply 404 Page


const express=require('express')
const path=require('path')

const App=express();
const dirpath=path.join(__dirname,'Html')

App.get('/About',(req,res)=>{
    res.sendFile(`${dirpath}/About.html`)
})
App.get('/Home',(req,res)=>{
    res.sendFile(`${dirpath}/Home.html`)
})
App.get('*',(req,res)=>{
    res.sendFile(`${dirpath}/nopage.html`)
})

App.listen(5000)