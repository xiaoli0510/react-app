import './App.css'
import React from 'react'


/*
props不能直接复制给state,直接复制会有bug。
如果有需要将props复制给state的场景时，需要考虑是受控组件还是非受控组件。
对于受控组件：在父组件里管理state.draftValue和state.committedValue,直接控制子组件里的值。不要在子组件中被动的接受一个props并跟踪一个临时的state.value。
对于不受控组件：建议重置内部所有的state,使用key。有两种方法，一是仅更改某些字段，观察特殊属性的变化，二是使用ref调用实例方法。

使用派生state.
反面教材：1.缓存基于当前props计算后的结果，建议使用memoize

(1)挂载：当组件实例被创建并插入DOM中时，生命周期调用顺序如下：
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
(2)更新：当组件的props或state发生改变时会触发更新，更新的生命周期调用顺序如下：
static getDerivedStateFromProps()：get
shouldComponentUpdate()：如果shouldComponentUpdate返回的是false,那么将不会执行render()。
render()
getSnapshotBeforeUpdate()：此函数返回的数据会当做componentDidUpdate函数里面的第三个参数。
componentDidUpdate()
(3)卸载：当组件从DOM中移除时会，卸载的生命周期调用顺序如下：
componentWillUnmount()
(4)错误处理：当渲染过程、生命周期、或子组件的构造函数中抛出异常时，调用顺序如下：
state getDerivedStateFromError()
componentDidCatch()
(5)其他API：
setState()
forceUpdate()
(6)class属性：
defaultProps
displayName
(7)实例属性
state
props

常见生命周期：
(1)render():render函数应该是一个纯函数(函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用)，并且它不会直接与浏览器交互。当render()被调用时，它会检查this.props和this.state的变化，并返回一下类型的数据：
React元素。
数组或fragments。
Portals。
字符串或者数值。
布尔类型或者null。
(2)constructor():如果不初始化state或不进行方法绑定，则不需要为React组件实现构造函数。
在React组件挂载之前，会调用它的构造函数。在未React.Component子类实现构造函数时，应在其他语句之前调用super(props)，否则this.props在构造函数中可能会出现undefined的bug。
注意：避免在constructor中使用setState(),避免将props直接赋值给state。
(3)componentDidMount():会在组件挂载后(插入DOM树)立即调用。依赖于DOM节点的初始化和数据请求和添加订阅(需在componentWillUnmount里面取消订阅)发生在此生命周期。在此执行setState()会触发额外渲染,但是此渲染
发生在浏览器更新屏幕之前，如此保证两次render()后，用户不会看到中间的状态。
(4)componentDidUpdate(prveProps,prevState,snapshot):会在更新后立即被地调用，首次渲染的时候不会调用componentDidUpdate()。
第3个参数是getSnapshotBeforeUpdate()返回的数据，如无则是undefined。
在componentDidUpdate里面执行setState需要包裹在if语句里面，否则会导致死循环。
可根据if语句来进行ajax请求。
可在此处对DOM进行修改。
注意：shouldComponentUpdate()返回值为false时，则不会调用componentDidUpdate()。
(5)componentWillUnmount():会在组件卸载及销毁前直接调用。在此方法中执行必要的清理操作，比如清除timer、取消网络请求、清除在componentDidMount()中创建的订阅等。
注意：不应在此生命周期中执行setState(),因为组件永远不会重新重新渲染。组件实例卸载后，将永远不会再挂载它。

不常用的生命周期方法：
(1)shouldComponentUpdate(nextProps,nextState):此方法仅作为性能优化的方式而存在。此方法返回false时，则不会调用render()和componentDidUpdate()方法。
注意：进行的是浅比较。不建议在此方法中进行深比较或者JSON.stringify()。
(2)static getDerivedStateFromProps(props,state):会在每次渲染之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新state，或者返回null表示不做任何更新。
(3)getSnapshotBeforeUpdate(prevProps,prevState):在最近一次渲染输出(提交到DOM节点)之前调用。此生命周期的任何返回值都会作为componentDidUpdate()的第三个参数。
使组件能在发生更改之前从DOM中获取一些信息(例如：滚动位置)，用来处理滚动位置的聊天进程等。

Error boundaries:是React组件，它会在其子组件树中的任何位置捕获js错误，并记录这些错误，展示降级UI而不是崩溃的组件树。
如果在class组件中使用static getDerivedStateFromError()或者componentDidCatch()中的一个或两个，就成为了Error boundaries。
注意：仅使用Error boundaries组件来从意外异常中恢复的情况，不要将它们用于流程控制。仅捕获组件树中以下组件中的错误，但它本身的错误无法捕获。
static getDerivedStateFromError(error)：将抛出的错误作为参数，并返回一个值以更新state。会在render阶段调用，因此不允许出现副作用。
componentDidCatch(error,info):将抛出的错误和带有componentStack key的对象作为参数。会在commit阶段调用，允许出现副作用。

其他API:
(1)setState(updater,[callback]):setState()将对组件state的更改排入队列，并通知React需要使用更新后的state重新渲染组件及其子组件。React会延迟调用它，然后通过一次传递更新多个组件。React并不会保证state的变更会立即生效，会批量推迟更新。
使用componentShouldUpdate()和setState的回调函数保证在应用更新后触发。
setState的第一个参数是函数或者对象，会将对象浅层合并到新的state中。如果第一个参数是对象，则是异步更新，在同一周期内会对多个setState进行批处理。
setState的第二个参数是可选的回调函数，它将在setState完成合并并重新想渲染组件后执行，我们建议使用componentDidUpdate来代替此方法。
(2)component.forceUpdate(callback):如果render()方法依赖于其他数据，则可以调用forceUpdate()强制让组件重新渲染，该操作会跳过该组件的shouldComponentUpdate(),但其子组件会触发正常的生命周期方法(包括shouldComponentUpdate())。



*/


class App extends React.Component {
  render() {
    return ( 
      <div > 
        react
      </div>
    )
  }
}

export default App