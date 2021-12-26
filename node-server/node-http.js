const http = require('http');
const app = http.createServer(); //
const fs = require('fs');
const url = require('url');

app.on('request', (req, res) => {
  console.log(url.parse(req.url, true)) //query: { id: '123', name: '12' } , pathname: '/a/b/c',

  const data = fs.readFileSync('./node-http-html.html')
  res.write(data.toString())//二进制转成字符串
  res.end()
});

app.listen(3011, function(){
  console.log('请访问localhost:3011')//服务器启动成功的回调函数
}); //监听端口
