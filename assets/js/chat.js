chatCLI()
  .then(function (chat) {
    document.querySelector('#send-message').addEventListener('submit', function (event) {
      event.preventDefault()
      const messageInput = document.querySelector('#send-message #message')
      const msg = messageInput.value
      messageInput.value = ''

      chat.message().send(msg)
    })

    chat.message().onReceive(function (msg) {
      const list = document.querySelector('#message-history')
      const li = document.createElement('li')

      li.appendChild(document.createTextNode(msg))
      list.appendChild(li)
    })
  })
