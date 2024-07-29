const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


app.use(cors())
app.use(express.json());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/batch10am')
  .then(()=>console.log("database is connected"))
}


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:Number
})

const userModel = mongoose.model("user",userSchema)

app.get('/',(req,res)=>{
     
      userModel.find({})
      .then((data)=>res.json(data))
    // res.send("hello from backend")
})

app.post('/create',(req,res)=>{
     
     console.log(req.body)
     userModel.create(req.body)
    res.send("hello from create side")
})

app.delete('/delete/:data',(req,res)=>{
    // console.log(req.params.data)
    const id = req.params.data
    userModel.findByIdAndDelete({_id:id})
    .then((value)=>res.json(value))
})

app.listen(4000,()=>console.log("server is running"))