require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const socketio = require('socket.io')(http)
const bodyParserMiddleware = require('body-parser')

// tempalte engine config

app.set('views', './src/views')
app.set('view engine', 'ejs')

// serving public assets

app.use(express.static('assets'))

// parse all request body to an json object

app.use(bodyParserMiddleware.json())
app.use(express.urlencoded())

// run server launch our server

function runServer () {
  http.listen(process.env.PORT || 3000, function(){
    console.log('listening on *:' + (process.env.PORT || 3000));
  });
}

module.exports = {
  app,
  socketio,
  runServer,
  express
}
