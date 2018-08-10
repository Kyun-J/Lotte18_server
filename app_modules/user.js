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
    } else if(one === null || one === undefined) res.sendStatus(500)
    else res.send(one)
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
      one.users.push({ _id : uid })
      one.save((err) => {
        if(err) {
          log(err)
          res.sendStatus(500)
        } else {
          res.set('Content-Type', 'application/json; charset=utf-8')
          res.sendStatus(200)
        }
      })
    }
  })
}

exports.myBandList = (req,res,next) => {
  BandModel.find({
    "users._id" : req.query.id
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
