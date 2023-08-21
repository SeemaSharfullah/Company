const express=require('express');
//const Company=require('./crud')
const ConnectMongoo= require('./data');
//Company();
ConnectMongoo();

const app=express();
app.use(express.json());
app.use('/companies/add',require("./router/Route"))



app.post('/companies/add',async(req,res) => {
    try{
        const {name,email,phone,address,designation,salary}=req.body;
        const value=new Company({name,email,phone,address,designation,salary});
        const saveValue=await value.save();
        res.send({"Insertion Success":true,saveValue});
        
    
    }catch(error){
        console.error("some error occured"+error);
        res.send(500).json("some internal error");
    
    }
    })
    port=7000;
    app.listen(port,()=>{
        console.log("app is listening on port"+port);
    })