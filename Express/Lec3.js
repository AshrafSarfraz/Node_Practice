//How to get Browser Data

const express=require('express')
const App=express();

App.get('',(req,res)=>{
res.send( `   
${req.query.name}
<h1>We get Data From Browser</h1>
<input type=text placeholder='Name'   value=${req.query.name}>
  `);
})

App.listen(5000)