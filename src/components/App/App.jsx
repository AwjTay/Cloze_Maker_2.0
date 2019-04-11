import React from 'react'
import InputScreen from "../InputScreen"
import Result from "../Result"
import Header from "../Header"
import '../../styles/main.css'

const App = () => {
  return(

    <React.Fragment>
      <Header />
      <InputScreen />
      <Result />
    </React.Fragment>
  )
}

export default App