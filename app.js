// 引入express
const express = require('express');
const fs = require('fs');
// 1. 创建app
const app = express();

//引入模块 module.exports = router;
const router = require('./router');

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
  
//  2. 
app.get('/list',function(req,res){
    // 1
    // res.write('Hello');
    // res.write('World1');
    // res.end()

    // 2
    // res.end('hello world');

    // 3
    // res.send('hello world');
    
    //4
    // fs.readFile('./db.json', 'utf8', function(err, data) {
    //     if (err) {
    //         return res.status(500).send('Server error.')
    //     }
    //     // 读取到的文件数据是string类型的数据
    //     // console.log(data);
    //     // 从文件中读取到的数据一定是字符串，所以一定要手动转换成对象
    //     // var lists = JSON.parse(data);

    //     res.send('hello world');
    // })

    const data = require('./db.json');
   res.json(data);
})

app.listen(3001,function(){
    console.log('express app is runing... http://localhost:3001/list');
})   