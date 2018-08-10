const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/lotte',{ useNewUrlParser: true })

const UserSchema = new mongoose.Schema({
  _id : String,
  sex : { type : Boolean, required : true },
  pw : { type : String, required : true },
  phone : String,
  lpoints : { type : Number, default : 0 }
})

const BandSchema = new mongoose.Schema({
  _id : String,
  imgurl : { type : String, default : "" },
  users : [{
    _id : { type : String, required : true },
    sex : { type : Boolean, required : true }
  }],
  peeds : [{
    pid : Number,
    title : { type : String, default : "" },
    contents : String,
    imgurl : { type : String, default : "" }
  }],
  games : [{
    type : { type : Number, required : true },
    owner : { type : String, required : true },
    entry : { type : String, required : true },
    winner : { type : String, required : true },
    prize : { type : Number, required : true }
  }]
})

const UserModel = mongoose.model('User',UserSchema)
const BandModel = mongoose.model('Band',BandSchema)

exports.UserModel = UserModel
exports.BandModel = BandModel
