const mongoose=require('mongoose');
const {Schema}=mongoose;
const Company=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:false
    },
    designation:{
        type:String,
        required:false
    },
    salary:{
        type:Number,
        required:false
    }
    
})
module.exports=mongoose.model("table",Company)
