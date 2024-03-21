---
sidebar_position: 1
---

# 前端面试题 React

## 函数组件和Class有什么差异

针对两种React组件，其区别主要分成以下几大方向：
+ 编写形式
+ 状态管理
    > 在hooks出来之前，函数组件就是无状态组件，不能保管组件的状态，不像类组件中调用setState
+ 生命周期
    > 类组件支持生命周期，函数组件并不存在生命周期但是函数组件使用useEffect也能够完成替代生命周期的作用
+ 调用方式
    > 类组件React内部会先实例化组件（new组件）在调用render方法，函数组件则是执行函数即可

> TIPS： 类组件 this指向是 函数组件没有的

## React Hook
React Hook 必须在函数组件顶层使用，不能在条件语句或者循环结构中使用。

每一个hook在首次加载时，都会执行一个mountWorkInProgressHook方法，这个方法内部会为我们在组件中定义的hook创建一个对应的hook对象：
```
{
  memoizedState: null,
  baseState: null,
  baseQueue: null,
  queue: null,
  next: null, // 指向下一个hook对象
};
```
在加载第一个hook时，会将第一个hook对象直接赋值给当前函数组件对应的Fiber节点的memoizedState属性,加载第二个hook时，就会将上一个hook的next属性指向当前新建的hook对象,在函数组件在加载完成后fiber.memoizedState属性形成了一个这样的单向链表。

![](../assets/d808cafeefb944109a6e63203cdaf440~tplv-k3u1fbpfcp-jj-mark_3024_0_0_0_q75.avis)

每一个hook在更新时，都会执行一个updateWorkInProgressHook方法，updateWorkInProgressHook方法内部会引用current.memoizedState属性的内容。

所以hook更新时会引用函数组件加载阶段就已形成的hook链表，会按照这个链表顺序来取出对应的原hook对象，利用原hook信息生成新的hook对象参与计算或者更新。

hooks的更新会按照函数组件加载阶段就已经固定的hook链表顺序，这就是hook必须置于函数组件顶层使用的根本原因。

如果我们将hook置于条件或者循环之中，在更新阶段就会出现无法与原来的hook链表相匹配的问题，将会导致渲染出现异常。

>常用的Hook: useRef、useMemo、useEffect、useState、useReducer、useContext、useLayoutEffect


## Redux的好处在哪里
单一数据源：Redux 提供了一个单一的、可预测的状态树，使得所有的应用程序状态都集中在一个地方。这样做的好处是可以使得状态管理更加可靠和可控，方便进行状态的跟踪和调试，同时也能够避免应用程序状态的不一致性问题。

方便进行状态共享：Redux 可以方便地在应用程序中共享状态，从而可以简化组件之间的通信和数据传递。

数据流向：用户通过dispatch发送一个action -> Reduce拦截到action做相应的处理并更新store状态 -> store更新React组件

## HOC高阶组件
高阶组件是参数为组件，返回值为新组件的函数。

一个常见示例是 React-Redux 的 connect 函数，它将 Redux store 连接到 React 组件，使组件可以访问和更新 store 中的状态。

:::tip
高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。
:::


## React Diff

### 是什么
React通过引入Virtual DOM的概念，极大地避免无效的Dom操作，使我们的页面的构建效率提到了极大的提升，而diff算法就是更高效地通过对比新旧Virtual DOM来找出真正的Dom变化之处，传统diff算法通过循环递归对节点进行依次对比，效率低下，react将算法进行一个优化。

### 原理
react中diff算法主要遵循三个层级的策略：
+ tree层级
+ conponent 层级
+ element 层级

#### tree层级
DOM节点跨层级的操作不做优化，只会对相同层级的节点进行比较,只有删除、创建操作，没有移动操作。

#### conponent层级
如果是同一个类的组件，则会继续往下diff运算，如果不是一个类的组件，那么直接删除这个组件下的所有子节点，创建新的。

#### element层级
对于比较同一层级的节点们，每个节点在对应的层级用唯一的key作为标识，提供了 3 种节点操作，分别为 INSERT_MARKUP(插入)、MOVE_EXISTING (移动)和 REMOVE_NODE (删除)<br />
通过key可以准确地发现新旧集合中的节点都是相同的节点，因此无需进行节点删除和创建，只需要将旧集合中节点的位置进行移动，更新为新集合中节点的位置。
:::tip
对于简单列表渲染而言,由于dom节点的移动操作开销是比较昂贵的，没有key的情况下要比有key的性能更好
:::

## React Fiber 

React Fiber是一个类似双向链表的数据结构。[具体看这里](https://blog.csdn.net/qq_41887214/article/details/130570813)
```
type Fiber = {
  type: any,                // type：组件类型。 div、span
  stateNode: any,           // DOM 对象
  return: Fiber | null,     // 指向自己的父级 Fiber 对象
  child: Fiber | null,      // 指向自己的第一个子级 Fiber 对象
  sibling: Fiber | null,    // 指向的下一个兄弟 Fiber 对象
};
```
:::tip
在 React 15 中，将 VirtualDOM 树整体看成一个任务进行递归处理，任务整体庞大执行耗时且不能中断。

在 React 16 中，将整个任务拆分成了一个一个小的任务进行处理，每一个小的任务指的就是一个 Fiber 节点的构建。任务会在浏览器的空闲时间被执行，每个单元执行完成后，React 都会检查是否还有空余时间，如果有就交还主线程的控制权。
:::

使用的浏览器API：requestAnimationFrame 来处理优先级较高的更新,使用 requestIdleCallback 处理优先级较低的更新。

浏览器一帧内要完成以下六个步骤：
* 处理用户交互
* JS解析执行
* 帧开始（窗口尺寸变更、页面滚动等的处理）
* requestAnimationFrame
* 布局
* 绘制

上面六个步骤完成后没超过16ms，说明有富裕时间，此时执行requestIdleCallback里注册的任务
>1s浏览器渲染60帧 1000ms/60 ≈ 16ms，所以一帧的时间是16ms

:::tip
requestAnimationFrame必定会执行，requestIdleCallback可能会执行，如果浏览器一直处于高负载requestIdleCallback可能永远不会执行，此时可以通过设置timeout来保证执行
[具体看这里](https://blog.51cto.com/u_15707676/5480346)
:::