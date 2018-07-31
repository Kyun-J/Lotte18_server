const util = require('./util')
const db = require('./db')

const UserModel = db.UserModel
const BandModel = db.BandModel

exports.login = (req,res,next) => {
  id = req.query.id
  pw = req.query.pw
  UserModel.findOne({
    _id : id,
    pw : pw
  }, (err,one) => {
    if(err) {
      log(err)
      res.sendStatus(500)
    } else {
      if(one === null || one === undefined) {
        user = new UserModel({
          _id : id,
          pw : pw
        })
        user.save((err) => {
          if(err) {
            log(err)
            res.sendStatus(500)
          } else res.sendStatus(200)
        })
      } else res.sendStatus(200)
    }
  })
}

exports.joinBand = (req,res,next) => {
  uid = req.query.uesrid
  bid = req.query.bandid
  BandModel.findById(bid, (err,one) => {
    if(err) {
      log(err)
      res.sendStatus(500)
    } else {
      if(one === null || one === undefined) {
        band = new BandModel({
          _id : bid,
          users : [{ _id : uid }]
        })
        band.save((err) => {
          if(err) {
            log(err)
            res.sendStatus(500)
          } else {
            res.sendStatus(200)
          }
        })
      } else {
        one.users.push({ _id : uid })
        one.save((err) => {
          if(err) {
            log(err)
            res.sendStatus(500)
          } else {
            res.sendStatus(200)
          }
        })
      }
    }
  })
}

exports.myBandList = (req,res,next) => {
  BandModel.find({
    users : { _id : req.query.id }
  }, (err,rows) => {
    if(err) {
      log(err)
      res.sendStatus(500)
    } else {
      res.set('Content-Type', 'application/json; charset=utf-8')
      res.send(rows)
    }
  })
}

const log = (msg) => {
  util.clog(msg)
}
