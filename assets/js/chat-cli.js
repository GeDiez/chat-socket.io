function chatCLI () {
  if(!io) {
    throw new Error('socketio is a mandatory dependency, install socket.io before initialize chat-cli')
  }

  if(!localStorage.getItem('token')) {
    throw new Error('token not found')
  }

  return fetch('/connect/chat', {
    headers: {
      Authorization : `Bearer ${localStorage.getItem('token')}`
    }
  }).then(function() {
    const socket = io()

    function message() {
      const resource = 'message::'

      function send (message) {
        socket.emit(`${resource}new`, message)
      }

      function onReceive(fn) {
        socket.on('chat::history', fn)
      }

      return {
        send,
        onReceive
      }
    }

    return {
      message
    }
  })
}
