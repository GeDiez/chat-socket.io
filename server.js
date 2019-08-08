const { app, socketio, runServer, express } = require('./config')
const authServer = require('./auth-server')
const expressjwt = require("express-jwt")

const protectedRouter = require('./src/routes/protected')
const publicRouter = require('./src/routes/public')

// authenticate user middleware
const jwtCheck = expressjwt({ secret: process.env.SECRET_JWT });

// Add protected router to our main express-app

app.use('/', protectedRouter(express, socketio, jwtCheck))

// Add public router to our main express-app

app.use('/we_talk', publicRouter(express))

// run server
runServer()
