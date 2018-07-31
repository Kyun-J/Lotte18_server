const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const connection = mongoose.connect('mongodb://localhost/lotte18')

autoIncrement.initialize(connection)

const UserSchema = new mongoose.Schema({
  _id : String,
  pw : { type : String, required : true },
  lpoints : { type : Number, default : 0 }
})

const BandSchema = new mongoose.Schema({
  _id : String,
  users : [{ _id : { type : String, required : true } }],
  peeds : [{
    _id : { type : Number, ref : 'pid' },
    title : { type : String, default : "" },
    contents : String,
    imgurl : String
  }],
  games : [{
    type : { type : Number, required : true },
    owner : { type : String, required : true },
    entry : { type : String, required : true },
    winner : { type : String, required : true },
    prize : { type : Number, required : true }
  }]
})

BandSchema.plugin(autoIncrement.plugin,'pid')

const UserModel = mongoose.model('User',UserSchema)
const BandModel = mongoose.model('Band',BandSchema)

exports.UserModel = UserModel
exports.BandModel = BandModel
