const Company=require('../model/schema');

const Insert =async(req,res)=>{
    try{
        
        const {name,email,phone,address,designation,salary}=req.body;
let checkphone=await Company.findOne({designation});
if(checkphone){
    console.log("already exists");
    return res.status(400).json({errors:"already exists"});

}else{
        const data= await new Company({name,email,phone,address,designation,salary});
        const saveData =await data.save();
        res.send({"Insertion Success":true,"inserted Data":saveData});
}
    }catch(err){
        console.error("Some error Occured"+err);
        res.status(500).json("Some Internal error!!!");
    
    }
}
const View1=async(req,res)=>{
    try{const data=await Company.find();
        if(!data){
            console.log("data not found with this id");
            return res.status(404).send("data does not exists with this id")
        }else{
        console.log(data)
        res.json(data)

    }
}catch(err){
        console.error("some error occured"+err);
        res.status(500).json("some internal error")
    }
}
const View=async(req,res)=>{
    try{const data=await Company.findById(req.params.id);
        if(!data){
            console.log("data not found with this id");
            return res.status(404).send("data does not exists with this id")
        }else{
        console.log(data)
        res.json(data)

    }
}catch(err){
        console.error("some error occured"+err);
        res.status(500).json("some internal error")
    }
}
const Delete=async(req,res)=>{
    try{
        let data=await Company.findById(req.params.id);
        if(!data){
            console.log("data not found with this id");
            return res.status(404).send("data does not exists with this id")
        }else{
data =await Company.findByIdAndDelete(req.params.id);
console.log("data delete successfully");
res.json({"success":true,"deleted data":data})
        }

    }catch(err){
        console.error("some error occured"+err);
        res.status(500).json("some internal error")
    }
}

const Update=async(req,res)=>{
    const {name,email,phone,address,designation,salary}=req.body;
    try{
const newData={}
if(name){newData.name=name}
if(email){newData.email=email}
if(phone){newData.phone=phone}
if(address){newData.address=address}
if(designation){newData.designation=designation}
if(salary){newData.salary=salary}

let data=await Company.findById(req.params.id);
if(!data){
    console.log("data not found with this id");
    return res.status(404).send("data does not exists with this id")
}else{
    data=await Company.findByIdAndUpdate(req.params.id,{$set:newData});
    res.json({data});
}

    }
    catch(err){
            console.error("some error occured"+err);
            res.status(500).json("some internal error")
    }
}
//register

const Register=async(req,res)=>{
    const {name,email,phone,password}=req.body;
    try{
        let checkmail=await Company.findOne({email})
        if(checkmail){
            console.log("mail already exists");
            return res.status(400).json({errors:"mail already exists"});
        
        }else{
                const data= await new Company({name,email,phone,password});
                const saveData =await data.save();
                res.send({"Insertion Success":true,"inserted Data":saveData});
        }
            }catch(err){
                console.error("Some error Occured"+err);
                res.status(500).json("Some Internal error!!!");
            
            }
        }



module.exports={Insert,View,Delete,Update,Register,View1};