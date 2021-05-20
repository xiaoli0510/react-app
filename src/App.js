import './App.css'

import React, {
  useState,useMemo
} from 'react'


import {Animal} from './one.tsx'


const animal = new Animal('pig',1,'男','myMother')


class App extends React.Component {
  render() {
    return ( <div >
      <div>react</div>
      <div>animal.mother:{animal.mother}</div>
      
      </div>
    )
  }
}

export default App