
const http =require('http')

http.createServer((req,res)=>{
res.write('Ashraf Sarfraz is good boy ')
res.end()
}).listen(3000)



http.createServer((req,res)=>{
    res.write('Ashraf Sarfraz is bad boy ')
    res.end()
    }).listen(4500)


// open search engine(Google)  write localhost:3000 for good boy
// open search engine(Google)  write localhost:4500 for bad boy                         