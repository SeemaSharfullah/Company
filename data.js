const mongoose=require('mongoose');
const mongoourl=("mongodb://127.0.0.1:27017/employee");
const ConnectMongoo=async()=>{
    try{
        await mongoose.connect(mongoourl)
        console.log("connect mongo successfull....");
    }
    catch(err){
        console.log("connect mongo unsuccessfull",err);
    }
}
module.exports=ConnectMongoo;