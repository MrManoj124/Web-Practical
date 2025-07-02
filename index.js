const express= require('express');
const Cert=express();
const port=3002;
const mongoose=require('mongoose');

const studentsRoute= require('./routes/studentRoute')
const eventRoute= require('./routes/eventRoute')
const certificateRoute= require('./routes/certificateRoute')

Cert.use(express.json())
Cert.use('/students',studentsRoute)
Cert.use('/events',eventRoute)
Cert.use('/certificates',certificateRoute)


mongoose.connect('mongodb://localhost:27017/Awarding').then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.error(error);   
})


Cert.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})