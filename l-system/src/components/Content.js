import React from 'react'
const Content = ({system, iterations, newIteration} ) => {

  const rows = (props) => 
  props.map((r, i) => <Row key={i} text={r}/>)

  const presenter = () => 
  system.rules.map(pair => <Trow pair={pair} key={pair.key}/>)

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
      <form onSubmit={newIteration}>
    <div>Sääntö:
      <input value={newNumber} onChange={handleNumberChange} /></div>
    <div>
      <button type="submit">lisää</button></div>
    </form>
    )
  }
  
  //const Tabler = ({json}) => 

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

export default Content