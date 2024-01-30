const express=require('express')
const App=express();

App.get('',(req,res)=>{                    
res.send('this is running'); 
})

App.get('/home',(req,res)=>{                     // home is screen name 
    res.send('this is Home');                   // localhost:5000/home
    })

App.listen(5000)