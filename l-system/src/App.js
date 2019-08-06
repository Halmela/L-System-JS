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
  const r3 ={
    key: "[",
    rule: "["
  }
  const r4 = {
    key: "]",
    rule: "]"
  }

  const rules = [ r1, r2, r3, r4 ]

  /*const ret = () => {
    return (
      axiom.map(letter => 
      rules.filter(rule => rule.find(_ => true) === letter))
    )
  }*/

  console.log([...axiom]
    .map(l => rules
      .filter(k => k.key === l)
      .map(r => r.rule))
    .reduce((a,c) => a + c))
  
  const replacer = (acc, curr) => acc.concat([...curr]
    .map(l => rules
      .filter(k => k.key === l)
      .map(r => r.rule)))


  console.log('replacer:',[...axiom].reduce(replacer))

  /*console.log([...axiom]
    .map(l => rules
      .filter(k => k.key === l)
      ))
*/
  //console.log(rules.filter(rule => rule.find(_ => true) === 0));


  return (
   <div>
     <p>f</p>
   </div>
  )
}

export default App;
