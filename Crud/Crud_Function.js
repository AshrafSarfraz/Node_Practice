const fs =require('fs')
const path=require('path')
const dirpath=path.join(__dirname,'Crud')
const filepath=`${dirpath}/apple.txt`

fs.writeFileSync(filepath,'This is path')          
fs.readFile(filepath,'utf8',(err,item)=>{         
    console.log(item)
})

fs.appendFile(filepath,' and this is added ', (err)=>{
    if(err){ console.log('Updated')}})

fs.rename(filepath,`${dirpath}/fruits`, (err)=>{
    if(err){ console.log('Updated') }})

    fs.unlinkSync(`${pathdir}/fruits`)