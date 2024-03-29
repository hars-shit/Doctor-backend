const { default: mongoose } = require("mongoose");

const connect=async()=>{

 try{

    await mongoose.connect('mongodb+srv://upadhyayharshit05:harshitdb@cluster0.f9rbupn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("Databse connected Successfully")
}   
 catch(err){
    console.log(err)
 }
    
}

module.exports=connect;