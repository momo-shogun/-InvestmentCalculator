import { formatter } from '../util/investment'
import { calculateInvestmentResults } from '../util/investment'

function Result({ userInput }) {
  const annualData = calculateInvestmentResults(userInput)

  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment

  function InvestmentRow() {
    return annualData.map(data => {
      const totalInterest =
        data.valueEndOfYear -
        data.annualInvestment * data.year -
        initialInvestment
      const totalAmoutInvested = data.valueEndOfYear - totalInterest
      return (
        <tr key={data.year}>
          <td>{data.year}</td>
          <td>{formatter.format(data.valueEndOfYear)}</td>
          <td>{formatter.format(data.interest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(totalAmoutInvested)}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <table id='result' className='center'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <InvestmentRow />
        </tbody>
      </table>
    </div>
  )
}

export default Result
