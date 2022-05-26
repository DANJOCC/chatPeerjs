const express = require("express");
const router=express.Router();
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const{v4:uuidV4} = require('uuid')

router.get('/', (req, res)=>{
    res.render('inicio',{title:'inicio'})
   
})

router.get('/join', (req, res)=>{
    console.log(req.query.room)
    res.redirect(`/room/${uuidV4()}`)
})

router.get('/room', (req, res)=>{
    res.redirect(`/room/${uuidV4()}`)
})

router.get('/room/:room', (req, res)=>{
    res.render('room', {roomId:req.params.room})
})

module.exports=router