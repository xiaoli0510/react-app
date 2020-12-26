import './App.css';
import React from 'react';

//使用class实现是一个toggle button
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this)
   this.setState(state=>{
     return {isToggleOn:!state.isToggleOn}
   })
  }

  // handleClick=()=>{
  //   console.log(this);
  //   this.setState(state=>{
  //     return {isToggleOn:!state.isToggleOn}
  //   })
  // }

  render(){
    return (
      <button onClick={this.handleClick.bind(this)}>
         {this.state.isToggleOn?'ON':'OFF'}
      </button>
    )
  }
}

class App extends React.Component{
  render(){
    return (
      <div className="App-header">
        <Toggle/>
    </div>
    )
  }
}
export default App;

