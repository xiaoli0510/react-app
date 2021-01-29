import './App.css'
import React from 'react'

//显示水是否煮开
function BoilingVerdict(props){
  if(props.celsius>100){
   return <p>The water would boil;</p>
  }
  return <p>The water would not boil;</p>
}

class Calculator extends React.Component{
  constructor(props){
   super(props);
   //此处将TemperatureInput和BoilingVerdict组件中的temperature和scale进行提升，摄氏度和华氏度可以相互转换，所以只需要在state里面定义一个即可。
   this.state={
     scale:'c',
     temperature:''
   };
   this.handleCelsiusInputChange = this.handleCelsiusInputChange.bind(this);
   this.handleFahrenheitInputChange = this.handleFahrenheitInputChange.bind(this);
  }

  handleCelsiusInputChange(temperature){
   this.setState({
     scale:'c',
     temperature
   })
  }

  handleFahrenheitInputChange(temperature){
   this.setState({
     scale:'f',
     temperature
   })
  }

  render(){
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    //需将摄氏度和华氏度相互转换
    const celsius = scale==='f'?tryConvert(temperature,toCelsius):temperature;
    const fahrenheit = scale==='c'?tryConvert(temperature,toFahrenheit):temperature;
    return (
      <div>
        <TemperatureInput scale='c' handleInputChange={this.handleCelsiusInputChange} temperature={celsius}/>
        <TemperatureInput scale='f' handleInputChange={this.handleFahrenheitInputChange} temperature={fahrenheit}/>
        <BoilingVerdict celsius={celsius}/>
      </div>
    )
  }
}

const scaleNames = {
  c:'Celsius',
  f:'Fahrenheit'
};
class TemperatureInput extends React.Component{
  constructor(props){
   super(props);
   this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.handleInputChange(event.target.value);
  }

  render(){
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    return (
      <fieldset>
        Enter a {scaleNames[scale]}:
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

//摄氏度和华氏度的转换
function toCelsius(fahrenheit){
 return (fahrenheit-32)*5/9;
}

function toFahrenheit(celsius){
  return celsius*9/5+32;
}

function tryConvert(temperature,convert){
  const input = parseFloat(temperature);
  if(isNaN(input)){
    return '';
  }
  return convert(input);
}




function App(){
  return (
    <div className="App-header">
    <Calculator/>
    </div>
  )
}
export default App

