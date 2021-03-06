import './App.css'
//异步组件不能单独使用 需要结合React的Suspense组件来使用,Suspenese的fallback里面是加载的内容
//React.lazy只支持默认导出，如果使用命名导出，那么需要创建一个中间模块，来重新导出为默认模块,然后导入中间模块即可
import React from 'react'

//如果仅仅是为了多层级的传递props，可以用传递组件的形式来代替context,即将子组件通过props的形式传递给顶级组件，缺点是会让顶级组件变复杂，并强行让底层组件适用这样的形式
//在组件树中，未检测到Provider的时候，defaultValue才会生效。Provider的value为undefined时，defaultValue不会生效。
//当Provider的value发生变化时，它内部的所有消费组件都会重新渲染。
const ThemeContext = React.createContext('light');//每个Context对象都会返回一个Provider React组件，它允许消费组件订阅context的变化。
class App extends React.Component{
  render(){
    return (
      <div className="App-header">
        <ThemeContext.Provider value="dark">
          <Toolbar/>
          </ThemeContext.Provider>
      </div>
    )
  }
}

//使用context后，中间件就不需要指名去传递props
function Toolbar(){
  return (
    <div>
      <ThemeButton/>
    </div>
  )
}

class ThemeButton extends React.Component{
  //指定contextType读取当前的ThemeContext,React会向上寻找最近的ThemeContext.Provider,然后使用它的值。
  static contextType =ThemeContext;
  render(){
    return (
      <button theme={this.context}>这是一个按钮</button>
    )
  }
}



export default App

