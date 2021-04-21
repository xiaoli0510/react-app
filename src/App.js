import './App.css'
import React from 'react'

/*
Refs&Dom:
使用ref去存储DOM节点的引用。React会在组件挂载的时候给current属性传入DOM元素，并在组件卸载的时候传入null值。ref会在componentDidMount()和componentDidUpdate()生命周期钩子触发前更新。
默认情况下，不能在函数组件上使用ref属性，因为函数组件没有实例。在函数组件内部使用ref属性时，需使用useRef(null)来生成ref,并将生成的ref指向一个DOM元素或class组件。
*/

class CustomTextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.textInput.current.focus();
    // this.$refs.textInput.current.focus();
  }
  render(){
    return (
      <div>
        <input type="text" ref={this.textInput}/>
        <input type="button" value="Focus the text input" onClick={this.handleClick}/>
      </div>
    )
  }
}

//在父组件中使用ref来获取这个自定义的input组件并手动调用他的handleClick方法
class AutoFocusTextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount(){
    this.textInput.current.handleClick();
  }
  render(){
    return (
      <CustomTextInput ref={this.textInput}/>
    )
  }
}

//使用ref回调函数
function CustomTextInput1(props){
  return (
    <div>
     <input ref={props.inputRef}/>
    </div>
  )
}
  
class Parent extends React.Component{
  constructor(props){
    super(props);
    this.inputElement=null
  }
    render(){
      return (
        <CustomTextInput1 inputRef={el=>this.inputElement=el}/>
        )
    }
}

function App(props) {
  return ( <div>
    <Parent/ >
    </div>
  )
}


export default App

