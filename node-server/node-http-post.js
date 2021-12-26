const http = require('http');
const app = http.createServer(); //
const fs = require('fs');
const url = require('url');
const querustring = require('querystring')

app.on('request', (req, res) => {

  var path = req.url
  console.log('path:', path)
  if(path == '/index.html'){
    const data = fs.readFileSync('./node-http-html.html')
    res.write(data.toString())
  }

  if(path == '/reg'){ //post请求走这个路径
    var body = ''
    req.on('data', function(chunk){
      body += chunk
    })

    req.on('end', function(){
      body = querustring.parse(body) //解析post提交的参数
      console.log(body.username, body.name)
    })
  }

  res.end()
});

app.listen(3011, function(){
  console.log('请访问localhost:3011')//服务器启动成功的回调函数
}); //监听端口
