const express = require('express')
const multer = require('multer')
const bodyparser = require('body-parser')
const app = express()

const util = require('./app_modules/util')
const user = require('./app_modules/user')
const band = require('./app_modules/band')
const Lmsg = require('./app_modules/Lmsg')
const data = require('./app_modules/data')

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
app.get('/bandList',user.myBandList)
app.get('/loadPeeds',band.loadPeeds)
app.get('/LMessage',Lmsg.LMessage)
app.get('/getImage',data.getImage)

app.all('*',(req,res,next) => {
  res.sendStatus(404)
})
