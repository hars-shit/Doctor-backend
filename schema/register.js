// name
// hospital
// address
// timing 
// spec 

const { default: mongoose } = require("mongoose");

const timing=mongoose.Schema({
    start:String,
    end:String,
})


const registerSchema=mongoose.Schema({ 
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    hospital:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    timing:[timing],
    spec:{
        type:String,
        required:true
    },
    
})

const register=mongoose.model('register',registerSchema)

module.exports=register