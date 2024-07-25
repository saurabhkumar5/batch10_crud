const express = require('express');
const cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{

    res.send("hello from backend")
})

app.post('/create',(req,res)=>{
     
     console.log(req.body)
    res.send("hello from create side")
})



app.listen(4000,()=>console.log("server is running"))