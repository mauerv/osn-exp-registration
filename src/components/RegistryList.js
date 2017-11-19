import React from 'react'

const RegistryList = ({experiments}) => {
  return (
    <ul>
      {experiments.map(experiment => <li key={experiment}>{experiment}</li>)}
    </ul>
  )
}


export default RegistryList
