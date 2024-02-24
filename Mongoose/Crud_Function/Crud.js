const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/e-comm');   // connect MongoDB  with the help of Mongoose
 
const Productscheme= new mongoose.Schema({     
   name:String,
   age:Number,
})

const PostData=async()=>{
   const Product=mongoose.model("products",Productscheme);
   let  data=new Product({name:'Ashraf',age:16})
   const result=await data.save();
   console.log(result);
}
const ReadData=async()=>{
   const Product=mongoose.model("products",Productscheme);
   let  data=await Product.find()
   console.log(data);
}
const UpdateData=async()=>{
   const Product=mongoose.model("products",Productscheme);
   let  data=await Product.updateMany(
      {name:'Ashraf'},
      {$set:{age:18,name:'sarfraz'}}
    
   )
   console.log(data);
}
const DltData=async()=>{
   const Product=mongoose.model("products",Productscheme);
   let  data=await Product.deleteOne({name:'sarfraz'})
   console.log(data);
}



ReadData();