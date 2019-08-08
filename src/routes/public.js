const url = require('url')
const User = require('../models/user')

function publicRouter (express) {
  const Router = express.Router()

  // GET /login validate credentials and grants with a token using jwt

  Router.post("/login", (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
      res
        .status(400)
        .send('You need a valid user')
      return
    }

    const token = User({ username }).createToken(password)

    if (!token) {
      res
        .status(401)
        .send('User not found')
      return
    }

    res
      .status(200)
      .send({ access_token: token })
  });

  // GET /sign_in render login view

  Router.get('/sign_in', function (req, res) {
    res.render('sign_in.ejs', { flash: null })
  })

  // GET /sign_in render chat view

  Router.get('/chat', function(req, res) {
    res.render('chat.ejs')
  });

  return Router
}

module.exports = publicRouter
