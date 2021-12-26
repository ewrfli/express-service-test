const EventEmitter = require('events')

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent() //实例化

// 异常处理
ce.on('error', (err, date) => {
  console.log('异常', err)
  console.log('时间', date)
})
//
// ce.emit('error', new Error('this is a error!'), Date.now()) //参数传入一个实例化异常


//once 只执行一次
ce.once('once', () => {
  console.log('once:')
})
//
// setInterval(()=>{
//   ce.emit('once') 
// },1000)


//removeListener 移除事件
function fn1() {
  console.log('fn1')
}

function fn2() {
  console.log('fn2')
}

ce.on('fn',fn1) //fn事件名
ce.on('fn',fn2)

setInterval(()=>{
  ce.emit('fn') //执行
}, 500)

setTimeout(()=>{
  ce.removeListener('fn', fn1) //移除(事件名，事件上哪个函数)

  ce.removeAllListeners('fn') //移除全部事件上的事件函数
}, 1500)