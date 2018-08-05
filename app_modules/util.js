nowtime = () => {
  now = new Date();
  year = now.getFullYear();
  month= now.getMonth() + 1;
  if(month < 10){
    month = '0' + month;
  }
  date = now.getDate();
  if(date<10){
    date = '0' + date;
  }
  hour = now.getHours();
  if(hour<10){
    hour = '0' + hour;
  }
  min = now.getMinutes();
  if(min<10){
    min = '0' + min;
  }
  sec = now.getSeconds();
  if(sec<10){
    sec = '0' + sec;
  }

  var time = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

exports.slog = (req,res) => {
  delay = Date.now() - req.reqtime
	logm = nowtime() + req.connection.remoteAddress + ' ' + req.method + req.originalUrl + ' ' + res.statusCode + ' ' + delay
	console.log(logm)
}

exports.clog = (msg) => {
  logm = nowtime() + ' - ' + msg
	console.log(logm);
}
