import { useState } from 'react'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Statistics } from './components/Statistics'
const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <>
    <Header title="give feedback" />
    <div>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div>
      <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  )
}

export default App