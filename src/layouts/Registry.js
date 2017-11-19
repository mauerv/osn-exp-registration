import React from 'react'
import RegistryListContainer from '../containers/RegistryListContainer'

const Registry = () => {
  return (
    <main className="container registry">
      <div className="pure-g">
        <div className="pure-u-1-1">
          <h1 className="title">Experiments Preregistered</h1>
          <RegistryListContainer />
        </div>
      </div>
    </main>
  )
}

export default Registry
