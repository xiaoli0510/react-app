import './App.css'
import React from 'react'
import catImg from './assets/cat.jpg'

/*
render prop:指一种在React组件之间使用一个值为函数的prop共享代码的简单技术，来解决横切关注点(Cross-Cutting Concern)。
*/

//需求：有一个cat cat跟随鼠标的移动而移动
// class Cat extends React.Component{
//   render(){
//     const mouse = this.props.mouse;
//     return (
//       <img src={catImg} style={{position:'absolute',left:mouse.x,top:mouse.y,width:'10%'}}/>
//     )
//   }
// }

// //以下并没有达到可复用
// class MouseWithCat extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {x:0,y:0};
//     this.handleMouseMove = this.handleMouseMove.bind(this);
//   }
  
//   handleMouseMove(event){
//     this.setState({
//       x:event.clientX,
//       y:event.clientY
//     })
//   }

//   render(){
//     return (
//       <div onMouseMove={this.handleMouseMove}>
//         <Cat mouse={this.state}/>
//       </div>
//     )
//   }
// }

// class MouseTracker extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>鼠标移动</h1>
//         <MouseWithCat/>
//       </div>
//     )
//   }
// }

class Cat extends React.Component{
  render(){
    const mouse = this.props.mouse;
    return (
      <img src={catImg} alt="cat" style={{position:'absolute',width:'10%',left:mouse.x,top:mouse.y}}/>
    )
  }
}

class Mouse extends React.Component{
  constructor(props){
    super(props);
    this.state={x:0,y:0};
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event){
    this.setState({
      x:event.clientX,
      y:event.clientY
    })
  }

  render(){
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class MouseTracker extends React.Component{
  render(){
    return (
     <div>
       <h1>移动鼠标</h1>
       <Mouse render={mouse=>(
        <Cat mouse={mouse}/>
      )}/>
     </div>
    )
  }
}

function App(props) {
  return ( <div>
    <MouseTracker/ >
    </div>
  )
}


export default App

