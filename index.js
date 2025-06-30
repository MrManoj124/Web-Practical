const express= require('express')
const Cert=express();
const port=3002;
const mongoose=require('mongoose')

const studentsrot= require('./routes/students')
const eventrot= require('./routes/events')
const certificaterot= require('./routes/certificates')

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