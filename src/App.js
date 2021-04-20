import './App.css'
import React from 'react'
var createReactClass = require('create-react-class');

//使用es6和使用create-react-class模块的区别
/*
(1)声明默认属性：es6中使用 class组件名.defaultProps来定义默认的props属性。create-react-class需要定义getDefaultProps函数来返回默认的props属性。
(2)初始化state。es6中直接在constructor函数里面初始化state。create-react-class需要定义getInitialState函数来返回默认的state属性。
(3)自动绑定。es6中事件需在constructor里面进行 事件名.bind(this)。create-react-class中自动绑定this。
(4)mixins。es6中不支持mixins。create-react-class中支持mixins；如果有多个mixins,mixins会按照定义时的顺序执行,且会调用每一个mixins中的生命周期方法。
*/
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 1
    }
  }
  render() {
    return (
      <div > name:{this.props.name};age:{this.state.age} </div>
    )
  }
}

Greeting.defaultProps = {
  name: 'hary'
}

var Greeting1 = createReactClass({
  getInitialState:function(){
    return {
      age:2
    }
  },
  getDefaultProps: function () {
    return {
      name: 'Alice'
    }
  },
  render: function () {
    return (
      <div > name:{this.props.name};age:{this.state.age} </div>
    )
  }
})


function App(props) {
  return ( <div>
    <Greeting/ >
    <Greeting1/ >
    </div>
  )
}


export default App