/**
 * @description 在observer——mode.js内全局的发布订阅会使得所有的订阅者都被触发，可以使用命名去指向固定订阅者队列
 */
var Event  =(function(){
  let observersMap  = {}
  // 注册观察者
  let addObserver = function(key,observer) {
    if(!observersMap[key]){
      observersMap[key] = []
    }
    observersMap[key].push(observer)
  }

  // 注销观察者
  let removeObserver = function(key,observer) {
    var fns = observersMap[key]
    if(!fns){
      return false
    }
    if(!observer){
      fns && (fns.length = 0)
    }else{
      fns = fns.filter(v=>{
        return v !== observer
      })
    }
  }

  // 通知所有观察者
  let notify = function() {
    let key = Array.prototype.shift.call(arguments)
    fns = observersMap[key]
    fns.forEach(v=>v.apply(this, arguments))
  }

  return {
    addObserver,
    notify,
    removeObserver
  }
})()

// console.log(Event)

Event.addObserver('first',function(a){
  console.log(a)
})

Event.notify('first',100)