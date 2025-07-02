const mongoose = require('mongoose')
const express=require('express');
const router=express.Router();
const Event=require("../models/events");

router.get('/', async (req,res)=>{
    try{
    const Events= await Event.find();
    res.json(Events);
    }
    catch(error){
        //console.error(error)
        res.status(500).json({ message: err.message})
    }
})


module.exports=router