const mongoose = require('mongoose')
const express=require('express');
const router=express.Router();
const Certificate=require("../models/certificates");

router.get('/', async (req,res)=>{
    try{
    const Certificates= await Certificate.find();
    res.json(Certificates);
    }
    catch(error){
        //console.error(error)
        res.status(500).json({ message: err.message})
    }
})


module.exports=router