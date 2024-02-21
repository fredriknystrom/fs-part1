import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const score = props.good - props.bad
  const avg = score/all
  const pos = props.good/all*100
  if (all === 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else {
    return(
      <div>
        <table>
          <tbody>
          <tr>
              <td>good</td>
              <td>{props.good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{props.neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{props.bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{avg}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{pos}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    console.log("good", newGood)
  }
  const neutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    console.log("neutral", newNeutral)
  }
  const badClick = () => {
    const newBad = bad + 1
    setBad(newBad)
    console.log("bad", newBad)
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={goodClick} text="good"/>
      <Button onClick={neutralClick} text="neutral"/> 
      <Button onClick={badClick} text="bad"/>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App