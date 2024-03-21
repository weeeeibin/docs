---
sidebar_position: 2
---

# 前端面试题 JS

## es6的新特性
+ 变量声明
+ 内置对象(Map、Set)
+ 运算符和语法(class类、箭头函数)
+ 异步(Promise、async)

## 什么方法会影响this
+ call
+ apply
+ bind
### 区别
call和apply唯一的区别是：call传入的是参数列表，apply传入的是数组，也可以是类数组

bind和call、apply的区别： bind返回的是一个改变了this指向的函数，便于稍后调用，不像call和apply会立即调用；bind和call很像，传入的也是参数列表，但是可以多次传入，不需要像call，一次传入

:::tip
当 bind 返回的函数 使用new作为构造函数时，绑定的 this 值会失效，this指向实例对象，但传入的参数依然生效 （new调用的优先级 > bind调用）
:::

## Promise常用方法
+ all
> 全部成功则成功,有一个失败
+ any
> 一个成功则成功,全部失败则失败
+ race
> 取第一个响应的状态，第一个成功则成功，第一个失败则失败
+ resolve
+ reject
+ then
+ catch
+ finally

## 作用域
一段程序代码中所用到的名字并不总是有效，而限定它的可用性的范围就是这个名字的作用域。

作用域有哪些：全局作用域、函数作用域、块级作用域

:::tip
在ES6 之前 JavaScript 没有块级作用域，只有全局作用域和函数作用域。ES6 的到来，为我们提供了 ‘块级作用域’,可通过新增命令 let 和 const来体现。
:::

## 作用域链
``` javascript
var a = 100
function fn() {
  var b = 200
  console.log(a) // 这里的a在这里就是一个自由变量
  console.log(b)
}
fn()
```
如代码中，console.log(a) 要得到 a 变量，但是在当前的作用域中没有定义 a（可对比一下 b）。当前作用域没有定义的变量时向父级作用域寻找，如果父级也没再一层一层向上寻找，直到找到全局作用域还是没找到就宣布放弃。这种一层一层的关系就是作用域链。

## 什么是截流防抖
节流：限制一个动作在一段时间内只能执行一次。<br/>
一般使用场景：scroll事件、input框实时搜索并发送

防抖：当一个动作连续触发，只执行最后一次。<br/>
一般使用场景：登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖,<br/>
调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖

## 闭包
在一个方法内引用不属于这个这个作用域的变量，当方法执行退出后变量仍然可以访问<br/>
如何创造闭包：一个嵌套的内部(子)函数引用了嵌套的外部(父)函数的变量(函数)时, 就产生了闭包
```javascript
function fn1 () {
    var a = 2;
    function fn2 () { // 执行函数定义后，才产生闭包，不必非得执行内部函数
        console.log(a);
    }
}
fn1();
```
一般使用情况：主要的使用场景就是为了创建私有的变量和截流防抖中使用。

## 箭头函数与普通函数的区别
箭头函数主要作用是区别普通函数的二义性，普通函数既可以当做方法调用也可以当做构造函数通过new创建对象，箭头函数只能通过调用方法的方式执行不能当做构造函数。

this的绑定机制：箭头函数没有自己的this，它继承外层作用域的this值，这意味着箭头函数中的this指向是在函数定义时确定的，不会因为后续代码或调用方式的变化而改变（call, apply, bind会改变普通函数的this，但不会改变箭头函数的this），如果没有上层函数作用域，则指向顶部this（在浏览器中顶部this则是window）。

arguments对象的使用：箭头函数没有自己的arguments对象，可以使用剩余参数(rest parameters)来访问传递给函数的所有参数。

## JS事件循环之宏任务和微任务
> [具体代码分析看这里](https://juejin.cn/post/6873424205791100942)
### 任务队列
任务队列中的任务也分为两种，分别是：宏任务（Macro-take）和微任务（Micro-take）<br />
宏任务：script(JS 整体代码)、setTimeout、setInterval、setImmediate、I/O、UI 交互<br />
微任务：Promise(重点关注)、process.nextTick(Node.js)、MutaionObserver

任务队列的执行过程是：先执行一个宏任务，执行过程中如果产出新的宏/微任务，就将他们推入相应的任务队列，之后在执行一队微任务，之后再执行宏任务，如此循环。
![](../assets/52bec546cf0748f9b89f5ca537d77baa~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.awebp)

## __proto__ 和 prototype的关系
__proto__指向的是其原型的prototype

```
function F(){ 

}

//为原型中添加test()方法
F.prototype.test = function(){
    console.log('这里是为原型中添加的方法')
}

//每一个实例对象都有一个__proto__属性，称之为隐式原型
var f = new F() 
//创建实例对象时，内部产生语句: this.__proto__ = F.prototype

//实例对象的隐式原型的值和其构造函数显式原型的值所对应
console.log(f.__proto__ === F.prototype) // true

```

## instanceof的用法
官方回答：用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

大白话：用来检测某个对象是否从某些原型上创建

```
[] instanceof Array === true
```
