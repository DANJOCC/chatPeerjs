const http=require("http")
const path=require("path")
const express=require("express")

const app=express()

const server=http.createServer(app)

app.set('view engine','ejs');

app.set("port", process.env.PORT || 3000)

app.use(express.static(path.join(__dirname,"public")))
app.use(require('./routes/ruta.routes'))


server.listen(app.get("port"), ()=>{
    console.log("server on port 3000")
})