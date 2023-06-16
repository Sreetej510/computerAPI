const express = require('express')
const fs = require('fs')
const https = require('https')
const app = express()
let cmd = 'f'
app.get('/on', (req, res) => {
  res.send('ok')
  cmd = 'on'
})

app.get('/cmd', (req, res) => {
    res.send(cmd)
    cmd = 'f'
  })

https
  .createServer(
    {
        key: fs.readFileSync('/etc/letsencrypt/live/pi.omega510.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/pi.omega510.com/fullchain.pem'),
    },
    app
  )
  .listen(1111, () => {
    console.log('Listening...')
  })