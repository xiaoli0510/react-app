import './App.css'
import React from 'react'

class Reservation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing:true,
      numbersOfGuest:2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const name = event.target.name;
    const value = name==='isGoing'?event.target.checked:event.target.value;
    this.setState({
      [name]:value
    })
  }

  handleSubmit(event){
    console.log('提交的参与是：'+this.state.isGoing);
    console.log('提交的来宾人数是：'+this.state.numbersOfGuest);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          参与：
          <input type="checkbox" checked={this.state.isGoing} name="isGoing" onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
          来宾人数：
          <input type="number" name="numbersOfGuest" value={this.state.numbersOfGuest} onChange={this.handleInputChange}/>
        </label>
        <br/>
        <input type="submit" value="提交" />
      </form>
    )
  }
}




function App(){
  return (
    <div className="App-header">
    <Reservation/>
    </div>
  )
}
export default App