const path = require('path')
const walkdir = require('walkdir')
const dotenv = require('dotenv')
const fs = require('fs')
dotenv.config()

const generated = fs.readFileSync('./snippets/generated.md')

function resolve(p) {
  return path.join(process.env.BREADBOARD_SOURCE, p)
}

function walk (p, opts) {
  return walkdir.sync(resolve(p), opts)
}

function titleCase (t) {
  t = t.toLowerCase()
  return t[0].toUpperCase() + t.substr(1)
}

module.exports = {
  resolve,
  walk,
  titleCase,
  generated
}
