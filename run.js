const express = require('express')
const multer = require('multer')
const app = express()

const util = require('./app_modules/util')
const user = require('./app_modules/user')
const band = require('./app_modules/band')

app.listen(8080)

app.set(() => {app.use(express.bodyParser())})
app.use(bodyparser.urlencoded({extended:false}))
app.use((req,res,next) => {
  req.reqtime = Date.now()
  res.on('finish',function() {
    util.slog(req,res)
  })
  next()
})

app.get('/login',user.login)
app.get('/bandList',band.myBandList)

app.all('*',(req,res,next) => {
  res.sendStatus(404)
})
