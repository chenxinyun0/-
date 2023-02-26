// 定义一个Subject类，它允许观察者注册、注销和通知
// 被观察者 （发布者）
class Subject {
  constructor() {
    this.observers = []; // 存储观察者的数组 （订阅者列表）
  }

  // 注册观察者
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 注销观察者
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // 通知所有观察者
  notify(data) {
    this.observers.forEach(observer => {
      observer.update(data);
    });
  }
}

// 定义一个Observer类，它包含一个update方法，用于处理Subject发送的通知
class Observer {
  update(data) {
    console.log('Received data:', data);
  }
}

// 创建一个Subject实例
const subject = new Subject();

// 创建两个Observer实例
const observer1 = new Observer();
const observer2 = new Observer();

// 注册观察者 （订阅者订阅发布者）
subject.addObserver(observer1);
subject.addObserver(observer2);

// 发送通知
subject.notify('Hello World!');

// 注销观察者
subject.removeObserver(observer2);

// 再次发送通知
subject.notify('Hello Again!');
