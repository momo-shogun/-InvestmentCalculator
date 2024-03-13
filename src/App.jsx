import UserInput from './components/UserInput'
import Result from './components/result'
import { useState } from 'react'

const investmentDetails = {
  initialInvestment: 0,
  annualInvestment: 2000,
  expectedReturn: 0.03,
  duration: 2,
}

function App() {
  const [userInput, setInputValue] = useState({ ...investmentDetails })
  const inputIsValid = userInput.duration >= 1

  function handleInput(inputIdentifier, newValue) {
    setInputValue(prevInvestmentDetails => {
      return {
        ...prevInvestmentDetails,
        [inputIdentifier]: +newValue,
      }
    })
  }

  return (
    <>
      <UserInput handleInput={handleInput} userInput={userInput}></UserInput>
      {!inputIsValid && <p className='center'>Enter the valid input</p>}
      {inputIsValid && <Result userInput={userInput}></Result>}
    </>
  )
}

export default App
