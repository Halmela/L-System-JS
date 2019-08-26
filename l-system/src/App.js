import React, {useState} from 'react';
import './App.css';
import Content from './components/Content'



function App() {
  
  const alphabet = (list) => (
    list
      .map(set => set.rule.split(''))
      .reduce((a, c) => a.concat(c))
      .filter((letter, i, arr) => arr.indexOf(letter) === (i)))

  const example = [
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

  const exampleA = "0"

  const [ruleset, setRuleset] = useState(example)
  const [axiom, setAxiom] = useState(exampleA) 

  const lsystem = {
    axiom: axiom,
    rules: ruleset,
    alphabet: alphabet(ruleset)
  }

  const [system, setSystem] = useState(lsystem)
  const [iterations, setIterations] = useState([]) 
  const [newRule, setNewRule] = useState('')
  

  console.log({system})
  console.log({iterations})

  const handleSystemChange = (event) => setSystem(event.target.value)
  const handleRulesetChange = (event) => setRuleset(event.target.value)
  const handleNewRuleChange = (event) => setNewRule(event.target.value)
  const handleAxiomChange = (event) => setAxiom(event.target.value)


  const replace = (word) => [...word]
    .map(letter => system.rules
      .filter(k => k.key === letter)
      .map(r => r.rule)[0])
      .reduce((a,c) => a.concat(c))


  const newIteration = () =>{ 
    setIterations(
      iterations.length !== 0
        ? iterations.concat(
          replace(iterations[iterations.length - 1]))
        : iterations.concat(system.axiom))
  }

  const newSystem = (axiom, rules) => {
    console.log('new axiom:', axiom, 'new rules:', rules)
    const nu = {
      axiom: axiom,
      rules: rules,
      alphabet: alphabet(rules)
    }
    console.log('nu:', nu)
    setSystem(nu)}
  

  /*const AxiomForm = () => {
    return (
      <form onSubmit={ChangeAxiom}>
        <input value={axiom} onChange={handleAxiomChange}/>
      </form>
    )*/


  return (
      
   <Content axiom={axiom} handleAxiomChange={handleAxiomChange} ruleset={ruleset} newRule={newRule}  setRuleset={setRuleset} handleRulesetChange={handleRulesetChange} system={system} newSystem={newSystem} setSystem={setSystem} handleSystemChange={handleSystemChange} iterations={iterations} setIterations={setIterations} replace={replace} newIteration={newIteration}/>

  )
}


export default App;
