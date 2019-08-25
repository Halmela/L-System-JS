import React from 'react'
const Content = ({axiom, handleAxiomChange, system, newSystem, handleSystemChange, handleNewRuleChange, iterations, newIteration} ) => {
  console.log('säännöt contentissa', system.rules)

  const rows = (props) =>  {
    console.log('rivipropsit: ', props)
    return (
     props.map((r, i) => <Row key={i} text={r}/>)
  )}

  const presenter = (props) => {
    console.log('säännöt: ', props)
    return (
      props.map(pair => <Trow pair={pair} key={pair.key}/>)
    )
  }
/*
  const Trow = ({pair}) => {
    return (
      <tr>
        <td>{pair.key}</td>
        <td>{pair.rule}</td>
      </tr>
    )
  }
*/

  const Forms = ({system}) => {
    return (
      <table>
        <tbody>
          <tr><th>avain</th><th>sääntö</th></tr>
          {presenter(system.rules)}
        </tbody>
      </table>
    )
  }

  const Trow = ({pair}) => {
    return (
      <tr>
        <td>{pair.key}</td>
        <td>
          <RuleForm pair={pair}/>
        </td>
      </tr>
    )
  }

  
  const Row = ({text}) => {
    return (
      <p>{text}</p>
    )
  }

  


  const RuleForm = ({pair}) => {
    console.log(pair)
    //{ChangeRule({key: pair.key, rule: value})}

    return (
      <form id={pair.key} onSubmit={ChangeRule}>
        <div>
          <input name="rule" value={pair.rule} onChange={handleNewRuleChange} />
          <button type="submit">jeah</button>
        </div>
      </form>
    )
  }

  const klikTest = (event) => {
    event.preventDefault()
    console.log('lol: ', event.target)
    
  }

  const ChangeAxiom = (event) => {
    event.preventDefault()
    console.log('CA props', axiom)
    newSystem(axiom, system.rules)
  }

  const ChangeRule = (event) => {
    event.preventDefault()
    console.log(event.target.id)
    console.log('CR', document.getElementById(event.target.id).elements["rule"].value)
    
    /*const nu = {
      axiom: system.axiom,
      rules: system.rules
        .map(p => p.key === event.target.id
            ? {key: p.key, rule: props.rule}
            : {key: p.key, rule: p.rule}
          )
    }
    console.log('uus:', nu)
    newSystem(nu)*/
  }

  const testi = {
    key: '1',
    rule: '2'
  }

  return (
    <div>Aksiooma: 
      <form onSubmit={ChangeAxiom}>
        <input value={axiom} onChange={handleAxiomChange}/>
      </form>
    
   
   <p>Aakkoset: {system.alphabet.sort().reduce((a, c) => a.concat(", ", c))}</p>
   <button onClick={() => newIteration()}>uusi</button>

   <table>
        <tbody>
          <tr><th>avain</th><th>sääntö</th></tr>
          {presenter(system.rules)}
        </tbody>
      </table>

   {rows(iterations)}
  </div>    
  )
}
 //<Forms system={system}/>

export default Content