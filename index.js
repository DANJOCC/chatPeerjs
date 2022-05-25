const http=require("http")
const path=require("path")
const {v4:uuidV4} =require("uuid")
const {socketServer, Socket} =require('socket.io')
const express=require("express")
const app=express()
const server=http.createServer(app)
const io=socketServer(server)
const {newRoom,getUsers}=require('./controllers/rooms.controller')

app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
})
// If they join a specific room, then render that room
app.get('/:room', (req, res) => {
    res.render('room', {roomId: req.params.room})
})

app.set('view engine', 'ejs')

app.set("port", process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,"public")))


io.on('connection', socket=>{
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)  // Join the room
        socket.broadcast.emit('user-connected', userId) 
   
     
     socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', userId)
            })
         })
    })

server.listen(app.get("port"), ()=>{
    console.log("server on port 3000")
})