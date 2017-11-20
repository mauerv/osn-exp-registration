import ExperimentRegistry from '../../build/contracts/ExperimentRegistry'
import { browserHistory } from 'react-router'
import store from '../store'
import contract from 'truffle-contract'

function updateForm(formData) {
  return {
    type: 'PREVIEW_FORM',
    payload: formData
  }
}

function successfulRegistration(hash, tx, file) {
  return {
    type: 'SUCCESSFUL_REGISTRATION',
    hash: hash,
    tx: tx,
    file: file
  }
}

export const updateReduxFormState = (formData) => {
  return function(dispatch) {
    dispatch(updateForm(formData))
    return browserHistory.push('/preview')
  }
}

export const submitRegistrationForm = () => {
  let web3 = store.getState().web3.web3Instance
  if (typeof web3 !== 'undefined') {
    return function(dispatch) {
      const registry = contract(ExperimentRegistry)
      registry.setProvider(web3.currentProvider)
      const file = JSON.stringify(store.getState().formData)
      const hash = web3.utils.sha3(file)
      var registryInstance

      web3.eth.getCoinbase((error, coinbase) => {
        if (error) {
          console.error(error)
        }
        registry.deployed().then(function(instance) {
          registryInstance = instance
          registryInstance.registerExperiment(hash, {from: coinbase})
          .then(function(result) {
            dispatch(successfulRegistration(hash, result.tx, file))
            return browserHistory.push('/submission-details')
          })
        })
      })
    }
  }
}
