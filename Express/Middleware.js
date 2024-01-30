module.export = Route_Level_Middleware=(req,res,next)=>{
    if(!req.query.age){
        res.send('Age must be entered')
    }
    else  if(req.query.age<18){
        res.send('Age must be more than 18')
    }
    else{
        next();
    }}