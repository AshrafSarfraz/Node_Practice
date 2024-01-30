// How to use Html in Express Js

const express=require('express')
const App=express();

App.get('',(req,res)=>{
res.send(`   
<h1>this is running</h1>
<input type=text placeholder='Name'>
<button>Click me</button>
<a href=/about>Go to about</a> 
<a href=/Array>Go to Array Screen</a>   
  `);
})

App.get('/about',(req,res)=>{
    res.send(`
     this is about 
     <a href='/'>Go Back</a>` );
    })

    App.get('/Array',(req,res)=>{
        res.send(
       [
        { name:'Ashraf', Age:20 },
        {name:'Sarfraz', Age:28},
       ]);
        })

App.listen(5000)