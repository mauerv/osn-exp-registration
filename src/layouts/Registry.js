import React from 'react'
import RegistryListContainer from '../containers/RegistryListContainer'

const Registry = () => {
  return (
    <main className="container registry">
      <h1 className="title">Experiments Preregistered</h1>
      <RegistryListContainer />
    </main>
  )
}

export default Registry
