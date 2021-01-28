import './App.css'
import React from 'react'

//以下是一个非受控组件，表单数据交由DOM节点来处理
class FileInput extends React.Component{
  constructor(props){
   super(props);
   this.fileInput = React.createRef();//返回的是一个ref对象，在dom元素上通过ref去绑定，通过this.fileInput.current来获取当前的node节点。
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    console.log('提交的fileName是：'+this.fileInput.current.files[0].name)
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput}/>
        </label>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}




function App(){
  return (
    <div className="App-header">
    <FileInput/>
    </div>
  )
}
export default App

