const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    course:{
        type:String
    },
    contact:{
        type:Number
    }
})
module.exports=mongoose.model("myuser",userSchema)