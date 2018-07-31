const util = require('./util')
const db = require('./db')
const fs = require('fs')

const BandModel = db.BandModel

exports.loadPeeds = (req,res,next) => {
  bid = req.query.bandid
  pid = req.query.peedid
  BandModel.find({
    _id : bid,
    'peeds._id' : { $gt : pid }
  })
  .limit(20)
  .exec((err,rows) => {
    if(err) {
      log(err)
      res.sendStatus(500)
    } else {
      res.set('Content-Type', 'application/json; charset=utf-8')
      res.send(rows)
    }
  })
}

exports.publishPeed = (req,res,next) => {
  bid = req.body.bandid
  image = req.file.image
  imgexist = !(image === null || image === undefined)
  imgpath = ""
  if(imgexist) {

  }
  BandModel.findById(bid,(err,one) => {
    if(err) {
      log(err)
      res.sendStatus(500)
    } else {
      one.peeds.push({
        title : req.body.userid,
        contents : req.body.contents,
        imgurl : imgpath
      })
      one.save((err) => {
        if(err) res.sendStatus(500)
        else res.sendStatus(200)
      })
    }
  })
}



const log = (msg) => {
  util.clog(msg)
}
