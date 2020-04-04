import React from 'react'
import EnvList from './EnvList'

function App () {
  return (
    <EnvList onSwitch={console.log}/>
  )
}

export default App
