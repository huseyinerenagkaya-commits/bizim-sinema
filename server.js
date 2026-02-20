const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('link_degisti', (url) => socket.broadcast.emit('link_degisti', url));
    socket.on('oynat', (zaman) => socket.broadcast.emit('oynat', zaman));
    socket.on('durdur', (zaman) => socket.broadcast.emit('durdur', zaman));
    socket.on('sar', (zaman) => socket.broadcast.emit('sar', zaman));
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Sunucu çalışıyor!`));
