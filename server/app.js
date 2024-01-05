const express = require('express')
const http = require('http')
const { Socket } = require('socket.io')
const Server = require('socket.io').Server
const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin:"*"
    }
})


app.get('/', function (req, res){
    res.sendFile(
        path.join(__dirname,'..\client\myapp\build\index.html'),
        function(err){
            if(err){
                res.status(500).send(err)
            }
        }
    )
})

io.on("connection", (socket) =>{
    console.log('We are connected')

    socket.on('chat', chat => {
        io.emit("chat", chat)
    })

    socket.on('disconnect', ()=>{
        console.log('disconnected')
    })
})

const port = process.env.port || 5000
server.listen(port, () => console.log('Listning to Port '+port))