import React, {useState} from 'react';
import './App.css';

function App() {
  const axiom = "0"
  const r1 = {
    key: "0",
    rule: "1[0]0"
  }
  const r2 = {
    key: "1",
    rule: "11"
  }
  const r3 = {
    key: "[",
    rule: "["
  }
  const r4 = {
    key: "]",
    rule: "]"
  }

  const rules = [ r1, r2, r3, r4 ]

  const [iterations, setIterations] = useState([axiom])

  /*const ret = () => {
    return (
      axiom.map(letter => 
      rules.filter(rule => rule.find(_ => true) === letter))
    )
  }*/

  const replace = (word) => [...word]
    .map(letter => rules
      .filter(k => k.key === letter)
      .map(r => r.rule)[0])
      .reduce((a,c) => a.concat(c))



  const newIteration = () => 
    setIterations(iterations
      .concat(
        replace(iterations[iterations.length - 1])))

  const rows = () => 
    iterations.map((r, i) => <Row key={i} text={r}/>)
  
  return (
   <div>
     <button onClick={() => newIteration()}>uusi</button>
     {rows()}
   </div>
  )
}

const Row = ({text}) => {
  return (
    <p>{text}</p>
  )
}

export default App;
