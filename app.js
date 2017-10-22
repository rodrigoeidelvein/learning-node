console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')

let user = os.userInfo()

fs.appendFile('name.txt', `Hello, ${user.username}`)