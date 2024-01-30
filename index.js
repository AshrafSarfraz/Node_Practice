const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017'
const Client=new MongoClient(url)

async function GetData(){
   let Result=await Client.connect()
   let DB=Result.db('admin')
   let collection =DB.collection('User')
   let response=await collection.find({}).toArray()
   console.log(response)

}

GetData();