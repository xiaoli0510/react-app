import './App.css'
import React from 'react'
import HH from './Book.js'

class App extends React.Component {

  render() {
    const loggedin = 0;
    //React对booloean的类型的attribute的识别是1和0
    return ( <
      HH id = "1"
      loggedin = {
        loggedin
      }
      />
    )
  }
}


export default App