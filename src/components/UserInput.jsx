function UserInput({ userInput, handleInput }) {
  return (
    <div id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            name='initialInvestment'
            value={userInput.initialInvestment}
            onChange={event => {
              handleInput(event.target.name, +event.target.value)
            }}
            type='number'
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            name='annualInvestment'
            value={userInput.annualInvestment}
            onChange={event => {
              handleInput(event.target.name, +event.target.value)
            }}
            type='number'
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Return</label>
          <input
            name='expectedReturn'
            value={userInput.expectedReturn}
            onChange={event => {
              handleInput(event.target.name, +event.target.value)
            }}
            type='number'
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            name='duration'
            value={userInput.duration}
            onChange={event => {
              handleInput(event.target.name, +event.target.value)
            }}
            type='number'
            required
          />
        </p>
      </div>
    </div>
  )
}

export default UserInput
