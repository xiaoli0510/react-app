import './App.css'
import React from 'react'
import PropTypes from 'prop-types'


/*
使用PropTypes进行类型检查。验证数据的类型，如果类型与定义的类型不一致，js控制台会显示静态，但还是会编译成功。
在后面添加isRequired表示此prop是必需的。
使用PropTypes.element表示此prop只包含一个元素。
使用transform-class-properties的Babel转换工具时，可在React组件内声明defaultProps作为静态属性。
*/

// class Greeting extends React.Component{
//   render(){
//     return(
//       <div>Hello,{this.props.name}</div>
//     )
//   }
// }

// Greeting.propTypes = {
//   name:PropTypes.string
// }



//限制prop只包含一个元素
// class MyComponent extends React.Component{
//   render(){
//     const children = this.props.children;
//     return(
//       <div>
//         123
//         {children}
//       </div>
//     )
//   }
// }

// MyComponent.propTypes = {
//   children:PropTypes.element.isRequired
// }

// function One(){
//  return (
//    <div>One</div>
//  )
// }

// function App(props){
//   return(
//     <MyComponent children={<One/>}/>
//   )
// }

class Greeting extends React.Component{
  static defaultProps={
    name:'stranger'
  }
  
  render(){
    return (
      <div>Hello,{this.props.name}</div>
    )
  }
}

function App(props){
  return(
    <Greeting/>
  )
}

export default App

