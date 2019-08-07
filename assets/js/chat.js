const chat = chatCLI()

document.querySelector('#send-message').addEventListener('submit', function (event) {
  event.preventDefault()
  const msg = document.querySelector('#send-message #message').value
  document.querySelector('#send-message #message').value = ''
  chat.message().send(msg)
})

chat.message().onReceive(function (msg) {
  const list = document.querySelector('#message-history')
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(msg))
  list
    .appendChild(li)
})
