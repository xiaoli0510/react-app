import './App.css'
import React from 'react'

//ref的三种使用方法
/*
1.string类型绑定，通过this.refs.inputRef来获取当前绑定ref的dom元素。此方法已经废弃。
2.react.createRef,通过此方法创建ref,然后在dom上通过ref属性进行绑定，通过this.inputRef.current来huo获取当前绑定ref的dom元素。
3.函数形式。
*/
//ref不能用在函数组件上，因为函数组件没有实例
//以下是函数形式实现的ref,在父组件中获取子组件的ref
class App extends React.Component{
  constructor(props){
    super(props);
    this.sonFocus = this.sonFocus.bind(this);
  }
  //使用ref的函数回调,将Son组件的this赋值给this.sonRef
  sonRef = null;
  getSonRef=el=>this.sonRef=el;
  //input的focus函数
  sonFocus=()=>{
    this.sonRef.focus();
  }
  render(){
    return(
     <div>
       <div>父组件</div>
       <Son bindRef={this.getSonRef}/>
       <button onClick={this.sonFocus}>父组件按钮</button>
     </div>
    )
  }
}

class Son extends React.Component{
  constructor(props){
    super(props);
    this.focus = this.focus.bind(this);
    //将Son组件的this返回
    props.bindRef(this);
  }
  //使用ref的函数回调,在dom上通过ref绑定ref的函数回调
  inputRef = null;
  fnRef=el=>this.inputRef = el;
  //input的focus函数
  focus=()=>{
    this.inputRef.focus();
  }
  render(){
    return(
      <div>
        <input type="text" ref={this.fnRef}/>
        <button onClick={this.focus}>focus input</button>
      </div>
    )
  }
}

export default App

