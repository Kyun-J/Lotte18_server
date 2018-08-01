const axios = require('axios')
const uuid = require('uuid/v1')

const util = require('./util')
const db = require('./db')

const UserModel = db.UserModel

const authorizationGenerator = (key, secret) => 'Basic ' + new Buffer(`${key}:${secret}`).toString('base64')
axios.defaults.headers.common['Authorization'] = authorizationGenerator('key', 'secret')

const ftMessage = (phone,msg) => {
  return {
  	"msg_id" : uuid(),
  	"dest_phone" : phone,
  	"send_phone" : "01045843552",
  	"sender_key" : "d6b73318d4927aa80df1022e07fecf06c55b44bf",
  	"msg_body" : msg,
  	"ad_flag" : "N",
  	// "button" :[
  	//       {
  	//         "name":"앱 링크 버튼",
  	//         "type":"AL",
  	//         "scheme_android":"daumapps://open",
  	//         "scheme_ios":"daumapps://open"
  	//       },
  	//       {
  	//       	"name":"웹 링크 버튼",
  	//       	"type":"WL",
  	//       	"url_pc":"http://bizmessage.kakao.com/",
  	//       	"scheme_android":"daumapps://open",
  	//       	"url_mobile":"http://bizmessage.kakao.com/"
  	//       }
  	//  ],
  	 // "image":{
  	 //   "img_url":"http://mud-kage.kakao.com/dn/ihFWM/btqgIZSprL7/wvKQlhVKgcGh4Mw8ThNW81/img_l.jpg",
  	 //   "img_link":"http://www.lotte.com"
  	 // }
  }
}

exports.LMessage = (req,res,next) => {
  UserModel.findById(req.query.id,(err,one) => {
    if(err) {
      log(err)
      res.sendStatus(500)
    } else {
      axios.post('http://210.93.181.229:9090/v1/send/kakao-friend', ftMessage(one.phone,req.query.msg))
    	.then(result => {
        log(result.data)
        res.sendStatus(200)
      })
    	.catch(e => {
        log(e.response.data)
        res.sendStatus(500)
      })
    }
  })
}

const log = (msg) => {
  util.clog(msg)
}
