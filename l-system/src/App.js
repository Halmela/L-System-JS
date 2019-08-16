import React, {useState} from 'react';
import './App.css';

function App() {
  const axiom = "0"
  

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

  const system = {
    axiom: "0",
    rules: rules,
    alphabet: rules
      .map(set => set.rule.split(''))
      .reduce((a, c) => a.concat(c))
      .filter((letter, i, arr) => arr.indexOf(letter) === (i))
  }

  console.log(system.axiom, system.rules, system.alphabet)
  //console.log(system.rules[1].key)
  //console.log(system.rules.forEach(i => console.log(i.rule)))
  /*console.log(system.rules
    .map(set => set.rule.split(''))
    .reduce((a, c) => a.concat(c))
    .filter((letter, i, arr) => arr.indexOf(letter) === (i))
    
    
    //.reduce((a, c) => a.concat(c))
    )
*/
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
     <p>Aksiooma: {system.axiom}</p>
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

//const Tabler = ({json}) => 


export default App;
