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
        require:true
    }
})

const collection = new mongoose.model("Collection1", LoginSchema)

module.exports=collection