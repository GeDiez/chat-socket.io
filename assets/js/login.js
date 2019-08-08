(function () {

  // login triggers a request for validating and get a token then is saved in the localStorage

  function login(username, password) {
    return fetch('/we_talk/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => res.json())
  }

  // UIFormLogin get the form on the UI then we can access to their values

  function UIFormLogin ({ onSubmit }) {
    const form = document.querySelector('#sign-in-form')
    const usernameInput = form.querySelector('#username')
    const passwordInput = form.querySelector('#password')

    form.addEventListener('submit', function(event) { onSubmit(usernameInput.value, passwordInput.value, event)  })
  }

  UIFormLogin ({ onSubmit: function (username, password, event) {
    event.preventDefault()

    login(username, password)
      .then((res) => {
        console.log(res.body)
        localStorage.setItem('token', res.access_token)
        location.replace('/we_talk/chat')
      })
    }
  })

})()
