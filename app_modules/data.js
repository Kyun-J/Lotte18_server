const fs = require('fs')
const util = require('./util')

exports.getImage = (req,res,next) => {
  route = '/home/ubuntu/Lotte18_server/imgs/'+req.query.path+'.jpg'
  res.sendFile(route)
}

const log = (msg) => {
  util.clog(msg)
}
