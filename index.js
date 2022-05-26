const http=require("http")
const path=require("path")
const {Server} =require('socket.io')
const express=require("express")
const app=express()

const {newRoom,getUsers, roomsIsEmpty,thereIsAroom}=require('./controllers/rooms.controller')

app.set('views',path.join(__dirname,"public"))
app.set('view engine','ejs');



app.set("port", process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,"public")))
app.use(require('./routes/ruta.routes'))

const server=http.createServer(app)
const io=new Server(server)


io.on('connection', socket=>{
    socket.on('join-room', (roomId, userId) => {

            socket.join(roomId)
   
     
     socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', userId)
            })
         })
    })

server.listen(app.get("port"), ()=>{
    console.log("server on port 3000")
})