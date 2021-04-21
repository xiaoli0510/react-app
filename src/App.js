import './App.css'
import React from 'react'
import { readdirSync } from 'fs';
var createReactClass = require('create-react-class');

//不使用jsx
//每一个jsx实际上是使用React.create(dom,props,children)的语法糖
class Greeting extends React.Component{
  render(){
    return <div>Hello {this.props.toWhat}</div>
  }
}

//将上面的jsx编写为不使用jsx的代码
class App  extends React.Component{
  render(){
    return React.createElement('div',null,`Hello ${this.props.toWhat}`)
  }
}


// function App(props) {
//   return ( <div>
//     <Greeting/ >
//     </div>
//   )
// }


export default App