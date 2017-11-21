import React from 'react'
import RegistryListContainer from '../containers/RegistryListContainer'

const Registry = () => {
  return (
    <div className="pure-g">
      <div className="pure-u-1-1">
        <main className="container registry main-title">
          <h1 className="title">Experiments Preregistered</h1>
          <RegistryListContainer />
        </main>
      </div>
    </div>
  )
}

export default Registry
