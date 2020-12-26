import './App.css';
import React from 'react';

class Clock extends React.Component{
  //constructor是类背身默认的属性和方法，new出来的实例会自动执行constructr()。
  constructor(props){
    super(props);
    this.state = {date:new Date(),a:1};
  }  

  //componentDidMount是react的挂载(mount)生命周期
  componentDidMount(){
    this.timerId = setInterval(()=>{
     this.tick();
    },1000)
  }

  //componentWillUnmount是react的卸载(unmount)生命周期
  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  //tick是原型方法
  tick(){
    this.setState({
      date:new Date()
    });
    this.setState(function(state){
      return { a:state.a+1};
    })
  }

  render(){
    return (
      <div className="App-header">
        <h1>Hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <h2>It is {this.state.a}</h2>
      </div>
    )
  }

}

function App(){
  return (
    <div>
      <Clock/>
    </div>
  )
}
export default App;