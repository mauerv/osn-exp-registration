import ExperimentRegistry from '../../build/contracts/ExperimentRegistry'
import store from '../store'
const contract = require('truffle-contract')

const requestExpSuccess = (experiments) => {
  return {
    type: 'REQUEST_EXPERIMENTS_SUCCESSFUL',
    payload: experiments
  }
}

export const requestExperiments = () => {
  return function(dispatch) {
    let web3 = store.getState().web3.web3Instance
    if (typeof web3 !== 'undefined') {
      const registry = contract(ExperimentRegistry)
      registry.setProvider(web3.currentProvider)
      var registryInstance
      registry.deployed().then(function(instance) {
        registryInstance = instance
        registryInstance.getExperiments.call()
        .then(function(result) {
          dispatch(requestExpSuccess(result))
        })
      })
    }
  }
}
