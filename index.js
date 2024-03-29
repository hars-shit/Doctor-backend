const express=require('express');
const connect = require('./Database/connect');
const register = require('./schema/register');

const app=express();


app.use(express.json());

connect()
const PORT=8000;


// routes 

// for post the data 

app.post('/register',async(req,res)=>{
        try{
            const {name,email,experience,hospital,number,address,timing,spec}=req.body;

            const existingUser=await register.findOne({number});

            if(existingUser){
                return res.status(409).json({message: "User with the given number already exists."})
            }
            const newDoc = new register({
                name,
                email,
                experience,
                hospital,
                number,
                address,
                timing,
                spec
            });

            const save=await newDoc.save()

            res.status(200).json({message:"New User Added Successfully",data:save})
        }
        catch(error){
            console.error("Error during registration:", error);
            res.status(500).json({ message: "Failed to register", error: error.message });
        }
})

// for get the data 

app.get('/doctors',async(req,res)=>{
    try{

        const doctors=await register.find();
        res.status(200).json({message:"Data retrieved successfully",data:doctors})
    }
    catch(error){
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Failed to fetch data", error: error.message });
    }
})

app.listen(PORT,()=>{
    console.log(`Server is listening to ${PORT}`)
})


