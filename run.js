const express = require('express')
const multer = require('multer')
const app = express()

const util = require('./app_modules/util')
const user = require('./app_modules/user')

app.listen(8000)

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

app.all('*',(req,res,next) => {
  res.sendStatus(404)
})
