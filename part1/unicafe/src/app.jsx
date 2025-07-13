import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>Give feedback</div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <div>Statistics</div>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}
const Statistics = ({ good, neutral, bad }) => {
      const average = (good - bad) / (good + neutral + bad)
      const positive = (good / (good + neutral + bad)) * 100
      if( good + neutral + bad === 0) {
        return <p>No feedback given</p>
      }
  return(
    <div>
      <table> 
       <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={good + neutral + bad} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive + " %"} />
      </tbody> 
      </table>
    </div>
  )  
}
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td><td>{value}</td> 
    </tr>
  )
}
export default App