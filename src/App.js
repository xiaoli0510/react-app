import './App.css'

import React, {
  useState,useMemo
} from 'react'
import { isParenthesizedExpression } from 'typescript';


/*
1.Hook简介:让你在不编写class的情况下使用state以及其它的React特性。Hook是可选的、100%向后兼容、react16.8后的版本可用。Hook在函数组件中使用，在class组件中不起作用。
使用Hook的动机：(1)在无需修改组件结构的情况下复用状态逻辑。(2)Hook将组件中相互关联的部分拆分成更小的函数，而并非强制按照生命周期划分。(3)在非class的情况下可以使用更多的react特性。
2.Hook概览：有useState和useEffect。
3.使用State Hook:
useState：[count,setCount]=useState(initialState);setCount接受一个新的state值并将组件的一次重新渲染加入队列。useState返回的第一个值始终是更新后最新的state。
setCount的参数为一个值或者函数(通过使用先前的state计算得出的，需要用到函数，返回一个新的state;如果函数的返回值与当前state一致，则会跳过随后的重渲染)。
与Class中的setState不同的是，useState中的setState不会自动合并更新对象。
useState的state只在组件首次渲染的时候被创建。在下一次重新渲染时，useState返回给我们当前的state。
惰性初始state:useState的参数是一个值或者函数(该函数只在初始渲染时被调用)。
跳过state更新：调用State Hook的更新函数并传入当前的state时，React会跳过子组件的渲染及effect的执行，即React不会对组件树的深层节点进行不必要的渲染，React使用Object.is比较算法来比较state。React可能仍需要在跳过渲染前渲染该组件。
如果在渲染期间执行了高开销的计算，可使用useMemo来进行优化。
4.使用Effect Hook:
useEffect：在函数组件中执行副作用操作，比如数据获取、设置订阅、手动更新DOM、设置定时器、记录日志等。
赋值给useEffect的函数会在组件渲染到屏幕之后执行。
会在第一次渲染之后和更新之后都会执行useEffect，保证每次运行effect的同时，DOM都已经更新完毕。传递给useEffect的函数在每次渲染中都会生成新的effect。
与componentDidMount和componentDidUpdate不同的是，使用useEffect调度的effect不会阻塞浏览器更新屏幕，这让应用看起来响应更快。大多情况下，effect不需要同步地执行，即effect函数会延迟调用，因此不应该在effect函数中执行阻塞浏览器更新屏幕的操作。
特殊情况下，如用户可见的DOM变更就必须同步执行，这样用户才不会感觉到视觉上的不一致，此情况下使用useLayoutEffect Hook来实现。
不需要清除的effect:useEffect相当于componentDidMount和componentDidUpdate方法。
需要清除的effect:useEffect的effect函数需要返回一个函数，React会在组件卸载的时候调用它执行清除操作。相当于是componentDidMount和componentWillUnmount方法。
effect的清除阶段会在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次。即会在调用一个新的effect之前对前一个effect进行清理。mount的时候，只调用非清除阶段的代码；更新重新渲染时，会执行清除阶段+非清除阶段代码；unMount时会执行清除阶段代码。
在函数组件中，使用多个Effect实现关注点分离，即把相关逻辑放在同一个Effect中，React将按照effect声明的顺序依次调用组件中的每一个effect。
effect的条件执行：在class组件中，通过在componentDidUpdate中添加prevProps或prevState的比较来判断是否需要执行更新。在useEffect中通过添加第二个可选参数[]来进行性能优化。
第二个参数[count]表示只在count改变的时候 才执行effect函数；如果[]里面有多个值，其中任意一个改变时，都会执行effect函数。第二个参数[]空数组表示effect在mount和unMount的时候只执行一次，；即 effect不依赖于props和state中的任何值，所以它永远都不需要重复执行。
第二个参数也叫effect所依赖的值数组，依赖项数组不会作为参数传给effect函数。
5.Hook规则：
(1)只在最顶层使用Hook。不要在循环，条件或者嵌套函数中调用Hook。如果需要if，可将if放在effect函数中。这样能确保Hook在每一次渲染中都按照同样的顺序被调用。
(2)只在React函数组件中调用Hook。不要在普通的js函数中调用Hook。可在React的函数组件中调用Hook,可在自定义Hook中调用其他Hook。确保组件的状态逻辑在代码中清晰可见。
在一个函数组件中使用多个state和effect时，React靠Hook调用的顺序来知道哪个state对应哪个setState,所以需要遵循Hook规则来使用Hook,由此来保证Hook的调用顺序在每次渲染中都是相同的。
6.自定义Hook:将组件逻辑提取到可重用的函数中。自定义Hook是一种自然遵循Hook设计的约定，并不是React的特性。
(1)自定义Hook需以use开头来命名。
(2)在两个组件中使用相同的Hook,不会共享state。自定义Hook是一种重用状态逻辑的机制，所以每次使用自定义Hook时，其中的state和副作用都是完全隔离。
(3)每次调用自定义Hook,都会获取独立的state。

Hook API 索引：
(1)useContext():
useContext(MyContext)接受一个context对象,并返回该context的当前值，当前的context值由上层组件中距离当前最近的<MyContext.Provider>的value prop决定。
当组件上层最近的<MyContext.Provider>更新时，该Hook会触发重渲染，并使用最新传递给MyContext provider的context value值。
相当于是class组件中的static contextType = MyContext
额外的Hook:
(1)useReducer:
const [state,dispatch]=useReducer(reducer,initialArg,init);
是useState的替代方案。
适合场景：state逻辑较复杂且包含多个子值，或者下一个state依赖与之前的state等。通过向子组件传递dispatch而不是回调函数，来给会触发深更新的组件做性能优化。
(2)useCallback:返回一个memoized回调函数，该函数仅在某个依赖项改变时才会更新。
const callback1 = useCallback(fn,deps)。
useCallback(fn,deps)相当于useMemo(()=>fn,deps)。
使用场景：函数定义时需要进行大量运算。需要比较引用的场景，如useEffect,useCallback一般与React.memo(callback1)一起使用,React.memo相当于class组件中的PureComponent。
将一般的事件改写成useCallback的性能会更差，因为额外加上调用useCallback产生的开销。
(3)useMemo:返回一个memoized值。传入useMemo的函数会在渲染期间执行，所以不要在useMemo的函数中执行与渲染无关的操作。
const memorizedValue = useMemo(()=>computeExpensiveValue(a,b),[a,b])。仅会在某个依赖项改变时才重新计算memorized值，有助于避免在每次渲染时都进行高开销的计算。
(4)useRef:返回一个可变的ref对象，对象的current属性被初始化为传入的initialRef。useRef会在每次渲染时返回同一个ref对象，当ref对象内容发生变化时，useRef不会通知你。变更refContainer的current属性不会引发组件重新渲染。
const refContainer = useRef(initialRef)。
有两种使用方法：一是将dom的ref={refContainer}，用来获取dom。二是方便保存任何可变值。
(5)useImperativeHandle:让你在使用ref时自定义暴露给父组件的实例值。即父组件可以调用子组件的createHandle里面的方法。
useImperativeHandler(ref,createHandle,[deps])。
(6)useLayoutEffect：与useEffect的区别是，useLayoutEffect会在所有的DOM变更之后同步调用effect。可以使用useLayoutEffect来读取DOM布局并同步触发重渲染。
(7)useDebugValue:用于在React开发者工具中显示自定义hook的标签。
useDebugValue(value,fn)：第二个参数fn可选，该函数只在Hook被jian检查时才会被调用。
*/

function App1(){
  const [name,setName] = useState('名称');
  const [content,setContent] = useState('内容');
  return (
    <>
     <button onClick={()=>setName(new Date().getTime())}>name</button>
     <button onClick={()=>setContent(new Date().getTime())}>content</button>
     <Child name={name}>{content}</Child>
    </>
  )
}

//子组件
function Child({name,children}){
  //name或者content改变的时候 都会执行changeName方法
  function changeName(name){
    console.log('11');
    return name +'改变name的方法';
  }
  
  // const othername = changeName(name);
  //优化
  const othername = useMemo(()=>changeName(name),[name])
  return (
    <div>
      <div>{othername}</div>
      <div>{children}</div>
    </div>
  )
}

class App extends React.Component {
  render() {
    return ( <div >
      <App1/>
      </div>
    )
  }
}

export default App