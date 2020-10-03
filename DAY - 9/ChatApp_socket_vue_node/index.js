let app = require('express')();

let http = require('http').Server(app);

let io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
io.on('connection', (socket) => {
    io.emit('noOfConnections', Object.keys(io.sockets.connected).length)
    socket.on('disconnect', () => {
        console.log('disconnected')
        io.emit('noOfConnections', Object.keys(io.sockets.connected).length)
    })
    socket.on('chat-message', (msg) => {
        socket.broadcast.emit('chat-message', msg)
    })
    socket.on('joined', (name) => {
        socket.broadcast.emit('joined', name)
    })
    socket.on('left', (name) => {
        socket.broadcast.emit('left', name)
    })
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    })
    socket.on('stoptyping', () => {
        socket.broadcast.emit('stoptyping')
    })
})

http.listen(process.env.PORT||3000, () => {
    console.log('Server is started at http://localhost:3000')
})
