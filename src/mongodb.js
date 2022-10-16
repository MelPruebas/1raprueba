const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginSignup")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("fail to connected");
})

const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection2", LoginSchema)

module.exports=collection