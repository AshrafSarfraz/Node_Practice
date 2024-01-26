const http=require('http');
const data = require('./Data');
http.createServer((req,res)=>{
    res.writeHead(200,'OK',{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end()
    
}).listen(5000)