import './App.css'
import React from 'react'


class Page extends React.Component{
  render(){
    const numbers = this.props.numbers
    const listItem = numbers.map(item=>{
      return <li key={item.toString()}>{item}</li>
    })
    return (
      <ul>{listItem}</ul>
    )
  }
}


function App(){
  const numbers = [1,2]
  return (
    <div className="App-header">
    <Page numbers={numbers}/>
    </div>
  )
}
export default App