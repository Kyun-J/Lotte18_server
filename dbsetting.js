const db = require('./app_modules/db')

const UserModel = db.UserModel
const BandModel = db.BandModel

console.log('db setting...')

lotte1 = new UserModel({
  _id : "김롯데",
  sex : true,
  pw : "1234",
  phone : "010-5192-3271"
})
lotte1.save((err) => {
  if(err) console.log(err)
})
lotte2 = new UserModel({
  _id : "신롯데",
  sex : false,
  pw : "1234",
  phone : "010-5192-3271"
})
lotte2.save((err) => {
  if(err) console.log(err)
})
father = new UserModel({
  _id : "아빠",
  sex : true,
  pw : "1234"
})
father.save((err) => {
  if(err) console.log(err)
})
mother = new UserModel({
  _id : "엄마",
  sex : false,
  pw : "1234"
})
mother.save((err) => {
  if(err) console.log(err)
})

for(i = 1; i < 10; i++) {
  user = new UserModel({
    _id : "친구"+i,
    sex : false,
    pw : "1234"
  })
  user.save((err) => {
    if(err) {
      console.log(err)
    }
  })
}


family = new BandModel({
  _id : "가족",
  imgurl : "b1",
  users : [{
    _id : "김롯데",
    sex : true
  },{
    _id : "신롯데",
    sex : false
  },{
    _id : "아빠",
    sex : true
  },{
    _id : "엄마",
    sex : false
  }],
  peeds : [{
    pid : 0,
    title : "엄마",
    contents : "엄마는 10키로 뺐는데... \n롯데는 언제 살뺄꺼니? ^^",
    imgurl : "0"
  },{
    pid : 1,
    title : "아빠",
    contents : "롯데야,,,, 키로당,,, 만원이면,,,\n살뺄수,,,있니,,,?",
    imgurl : "1"
  },{
    pid : 2,
    title : "김롯데",
    contents : "오늘은 실패.... 치킨이 넘나 맛있는것 ㅠㅠ \n하지만 낼부터 다이어트 시작인 부분 인지용~",
    imgurl : "2"
  },{
    pid : 3,
    title : "김롯데",
    contents : "오늘 빡시게 샐러드만 먹었다 후... 힘들다",
    imgurl : "3"
  },{
    pid : 4,
    title : "김롯데",
    contents : "한달만에 10키로 감량 성공! \n인생역전! 하면된다! 10만원 ㄱㅇㄷ~",
    imgurl : "4"
  },{
    pid : 5,
    title : "엄마",
    contents : "엄마는....아들이...너무 자랑스럽단다...^^\n아빠다,,,계좌,,,불러라,,,10만원,,,들어간다,,,,",
    imgurl : "5"
  }]
})
family.save((err) => {
  if(err) console.log(err)
})
for(i = 1; i < 4; i++){
  band = new BandModel({
    _id : "친구들"+i,
    imgurl : "f"+i,
    users : [{
      _id : "신롯데",
      sex : false
    },{
      _id : "친구"+(1*i),
      sex : false
    },{
      _id : "친구"+(2*i),
      sex : false
    },{
      _id : "친구"+(3*i),
      sex : false
    }]
  })
  band.save((err) => {
    if(err) {
      console.log(err)
    }
  })
  if(i == 3) console.log("done")
}
