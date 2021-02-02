import './App.css'
import React from 'react'

function FancyBorder(props){
 return (
   <div>
    {props.children}
   </div>
 )
}

function Dialog(props){
 return (
   <FancyBorder color="blue">
     <h1 className="Dialog-title">
       {props.title}
     </h1>
     <p className="Dialog-message">
       {props.message}
     </p>
     {props.children}
   </FancyBorder>
 );
}

class SignUpDialog extends React.Component{
  constructor(props){
   super(props);
   this.state = {login:''};
   this.handleChange = this.handleChange.bind(this);
   this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(e){
    this.setState({login:e.target.value});
  }

  handleSignUp(){
    console.log(`Welcome aboard,${this.state.login}`)
  }

  render(){
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange}/>
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    )
  }
}


function App(){
  return (
    <div className="App-header">
    <SignUpDialog/>
    </div>
  )
}
export default App

