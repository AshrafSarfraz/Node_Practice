// how to access and Use Html File Created in other folder 
//  http://localhost:5000/home.html          use this to access html file

const express=require('express')
const path=require('path')

const App=express();
const dirpath=path.join(__dirname,'Html')
console.log(dirpath)

App.use(express.static(dirpath))

App.listen(5000)