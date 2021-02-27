import './App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
//异步组件不能单独使用 需要结合React的Suspense组件来使用,Suspenese的fallback里面是加载的内容
//React.lazy只支持默认导出，如果使用命名导出，那么需要创建一个中间模块，来重新导出为默认模块,然后导入中间模块即可
import React,{Suspense,lazy} from 'react'
const OtherComponent = lazy(()=>import('./OtherComponent'))
const MyErrorBoundary = lazy(()=>import('./MyErrorBoundary'))
const ABC = lazy(()=>import('./MyComponent'))


function App(){
  console.log(ABC)
  return (
    <div className="App-header">
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/a" component={MyErrorBoundary}/>
            <Route path="/b" component={OtherComponent}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}
export default App

