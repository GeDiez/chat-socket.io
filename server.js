const { app, socketio, runServer } = require('./config')

app.get('/', function(req, res){
  res.render('chat.pug')
});

socketio.on('connection', function(socket){

  socket.on('message::new', function(message) {
    socketio.emit('chat::history', message)
  })

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

// run server
runServer()
