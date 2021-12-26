const http = require('http');
const url = require('url');
const fs = require('fs');
const app = http.createServer();
const path = require('path')

app.on('request', (req, res) => {
  // 获取请求方式            //转换小写get post
  const method = req.method.toLowerCase();
    
  // 获取请求地址       //解析地址
  const pathname = url.parse(req.url).pathname;

  console.log('pathname',pathname)
  res.end('hhhhhhhhh')
});

app.listen(3011);
console.log('请访问localhost:3011')