import React, {useState} from 'react';
import './App.css';
import Content from './components/Content'

function App() {
  
  const alphabet = (list) => (
    list
      .map(set => set.rule.split(''))
      .reduce((a, c) => a.concat(c))
      .filter((letter, i, arr) => arr.indexOf(letter) === (i)))

  const rules = [
    {
      key: "0",
      rule: "1[0]0"
    },
    {
      key: "1",
      rule: "11"
    },
    {
      key: "[",
      rule: "["
    },
    {
      key: "]",
      rule: "]"
    }
  ]

  const lsystem = {
    axiom: "0",
    rules: rules,
    alphabet: alphabet(rules)
  }

  const [system, setSystem] = useState(lsystem)
  const [iterations, setIterations] = useState([lsystem.axiom])
  console.log({system})
  console.log({iterations})


  const replace = (word) => [...word]
    .map(letter => rules
      .filter(k => k.key === letter)
      .map(r => r.rule)[0])
      .reduce((a,c) => a.concat(c))


  const newIteration = () => 
    setIterations(iterations
      .concat(
        replace(iterations[iterations.length - 1])))

  const newSystem = (axiom, rules) => (
    setSystem({
      axiom: axiom,
      rules: rules,
      alphabet: alphabet(rules)
    }))
  
  return (
   <Content system={system} setSystem={setSystem} newSystem={newSystem} iterations={iterations} setIterations={setIterations} replace={replace} newIteration={newIteration}/>
  )
}


export default App;
