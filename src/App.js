import './App.css';
import React from 'react';

//写一个问候语 如果有登录就提示欢迎回来 如果没有登录就提示请注册
function UserGreeting(props){
  return <h1>Welcome Back!</h1>
}

function GuestGreeting(props){
  return <h1>Please Sign up!</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>
  }else{
    return <GuestGreeting/>
  }
}

function LoginButton(props){
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props){
  return <button onClick={props.onClick}>Log out</button>
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick(){
    this.setState({
      isLoggedIn:true
    })
  }

  handleLogoutClick(){
    this.setState({
      isLoggedIn:false
    })
  }

  render(){
   const isLoggedIn = this.state.isLoggedIn;
   let button;
   if(isLoggedIn){
     //有登录，就退出
     button = <LogoutButton onClick={this.handleLogoutClick}/>
   }else{
     //没有登录，就登录
     button = <LoginButton onClick={this.handleLoginClick}/>
   }
   return (
     <div>
       <Greeting isLoggedIn={isLoggedIn}/>
          {button}
     </div>
   )
  }
}

function App(){
  return (
    <div className="App-header">
      <LoginControl/>
    </div>
  )
}

export default App;