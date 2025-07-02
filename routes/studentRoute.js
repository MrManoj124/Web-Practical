//const mongoose = require('mongoose')
const express=require('express');
const router=express.Router();
const Student=require("../models/student");

router.get('/', async (req,res)=>{
    try{
    const students= await Student.find();
    res.json(students);
    }
    catch(error){
        //console.error(error)
        res.status(500).json({ message: err.message})
    }
})


module.exports=router