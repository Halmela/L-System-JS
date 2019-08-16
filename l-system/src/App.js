import React, {useState} from 'react';
import './App.css';

function App() {

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
  console.log(system.alphabet)
  //console.log(system.rules[1].key)
  //console.log(system.rules.forEach(i => console.log(i.rule)))
  /*console.log(system.rules
    .map(set => set.rule.split(''))
    .reduce((a, c) => a.concat(c))
    .filter((letter, i, arr) => arr.indexOf(letter) === (i))
    
    
    //.reduce((a, c) => a.concat(c))
    )
*/
  const [iterations, setIterations] = useState([system.axiom])

  

  const replace = (word) => [...word]
    .map(letter => rules
      .filter(k => k.key === letter)
      .map(r => r.rule)[0])
      .reduce((a,c) => a.concat(c))



  const newIteration = () => 
    setIterations(iterations
      .concat(
        replace(iterations[iterations.length - 1])))

  const rows = (props) => 
      props.map((r, i) => <Row key={i} text={r}/>)
    
  const presenter = () => 
      system.rules.map(pair => <Trow pair={pair} key={pair.key}/>)
  
  return (
   <div>
     <p>Aksiooma: {system.axiom}</p>
     <table>
      <tbody>
        <tr><th>avain</th><th>sääntö</th></tr>
        {presenter()}
      </tbody>
    </table>
    <p>Aakkoset: {system.alphabet.sort().reduce((a, c) => a.concat(", ", c))}</p>
    <button onClick={() => newIteration()}>uusi</button>
    {rows(iterations)}
   </div>
  )
}

const Trow = ({pair}) => {
  return (
    <tr>
      <td>{pair.key}</td>
      <td>{pair.rule}</td>
    </tr>
  )
}

const Row = ({text}) => {
  return (
    <p>{text}</p>
  )
}

//const Tabler = ({json}) => 


export default App;
