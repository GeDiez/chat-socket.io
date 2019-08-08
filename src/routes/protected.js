function protectedRoutes(express, socketio, jwtCheck) {
  const router = express.Router()

  router.get('/connect/chat', jwtCheck, function (req, res) {
    console.log('connected')
    socketio.on('connection', function(socket) {
      socket.on('message::new', function(message) {
        socketio.emit('chat::history', message)
      })

      socket.on('disconnect', function() {
        console.log('user disconnected')
      })
    })

    res.status(200).send('ok')
  })

  return router
}

module.exports = protectedRoutes
