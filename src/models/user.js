// using fake user information

/**
 * FAKE USERS DB

 /*********************************************************************/

 const users = [
   { id: 1, username: 'admin', password: 'password' },
   { id: 2, username: 'guest', password: '123456' }
 ]

 function findUser(username, password) {
   return users.find((user) => {
     return user.username === username && user.password === password;
   });
 }

 /*********************************************************************/
 /*********************************************************************/


const jwt = require('jsonwebtoken')

// MODEL::USER

function User ({ username }) {
  function createToken (password) {
    const user = findUser(username, password)

    if (!user) return null

    return jwt.sign({
      sub: user.id,
      username: user.username
    }, process.env.SECRET_JWT, {expiresIn: "3 hours"});
  }

  return {
    createToken
  }
}

module.exports = User
