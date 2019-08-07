const express = require('express')
const app = express()
const http = require('http').createServer(app)
const socketio = require('socket.io')(http)

// tempalte engine config

app.set('views', './src/views')
app.set('view engine', 'pug')

// serving public assets
app.use(express.static('assets'))

function runServer () {
  http.listen(3000, function(){
    console.log('listening on *:3000');
  });
}

module.exports = {
  app,
  socketio,
  runServer
}
