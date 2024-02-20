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

const DisplayState = (props) => {
  return(
    <p>{props.text} {props.n_clicks}</p>
  )
}

const TotalFeedback = (props) => {
  return(
    <p>all {props.all}</p>
  )
}

const Average = (props) => {
  return(
    <p>average {props.avg}</p>
  )
}

const Positive = (props) => {
  return(
    <p>positive {props.pos}%</p>
  )
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

  const all = good + neutral + bad
  const score = good - bad
  const avg = score/all
  const pos = good/all

  return (
    <div>
      <Header text="give feedback"/>
      <Button onClick={goodClick} text="good"/>
      <Button onClick={neutralClick} text="neutral"/> 
      <Button onClick={badClick} text="bad"/> 
      <Header text="statistics"/>
      <DisplayState text="good" n_clicks={good}/>
      <DisplayState text="neutral" n_clicks={neutral}/>
      <DisplayState text="bad" n_clicks={bad}/>
      <TotalFeedback all={all}/>
      <Average avg={avg}/>
      <Positive pos={pos}/>
    </div>
  )
}

export default App