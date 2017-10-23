console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')

const notes = require('./notes.js')

let command = process.argv[2];
console.log(process.argv)
console.log('Command:', command)

if (command === 'add') {
  console.log('adding new note')
} else if (command === 'list') {
  console.log('listing notes')
} else if (command === 'read') {
  console.log('reading notes')
} else if (command === 'remove') {
  console.log('removing note')
} else {
  console.log('invalid command')
}
