const http=require("http")
const path=require("path")
const {socketServer, Socket} =require('socket.io')
const express=require("express")
const app=express()
const io=socketServer(server)
const {newRoom,getUsers}=require('./controllers/rooms.controller')

app.set('views',path.join(__dirname,"public"))
app.set('view engine','ejs');



app.set("port", process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,"public")))
app.use(require('./routes/ruta.routes'))

const server=http.createServer(app)


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