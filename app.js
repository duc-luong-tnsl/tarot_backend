const express = require('express')
const app = express()
const port = 3000
const host = '0.0.0.0'

app.get('/heath_check', (req, res) => {
  res.send('Ok!!')
})

module.exports = app;