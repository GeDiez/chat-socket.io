const express = require('express')
const app = express()
const http = require('http').createServer(app)
const socketio = require('socket.io')(http)

// serving public assets
app.use(express.static('assets'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/chat.html');
});

socketio.on('connection', function(socket){

  socket.on('message::new', function(message) {
    socketio.emit('chat::history', message)
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});