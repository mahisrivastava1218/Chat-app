const express= require('express')
const mongoose= require('mongoose')
const cors=require('cors')
const userRoutes = require('./routes/userRoutes')
const app=express()
require("dotenv").config()


app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)

mongoose.connect((process.env.MONGO_URL), {
    useNewUrlParser: true
    
}).then(()=>{
    console.log("MONGO successful");
      
}).catch((err)=>{
    console.log(err);
})

const server =app.listen(process.env.PORT,()=>{
    console.log(`Server start port ${process.env.PORT}`)
});