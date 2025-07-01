const express= require('express')
const Cert=express();
const port=3002;
const mongoose=require('mongoose')

const studentsrot= require('./models/students')
const eventrot= require('./models/events')
const certificaterot= require('./models/certificates')

Cert.use(express.json())
Cert.use('/students',studentsrot)
Cert.use('/events',eventrot)
Cert.use('/certificates',certificaterot)


mongoose.connect('mongodb://localhost:27017/Certificates').then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.error(error);   
})


Cert.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})