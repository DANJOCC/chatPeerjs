const express = require("express");
const router=express.Router();
const{v4:uuidV4} = require('uuid')

router.get('/', (req, res)=>{
    res.render('inicio',{title:'inicio'})
})

router.get('start', (req, res)=>{
    res.redirect(`start/${uuidV4}`,)
})

router.get('start/:room', (req, res)=>{
    res.redirect('room', {roomId:req.params.room})
})

module.exports=router