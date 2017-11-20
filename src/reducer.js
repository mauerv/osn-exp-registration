import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import web3Reducer from './reducers/web3Reducer'
import experimentsReducer from './reducers/experimentsReducer'
import registryFormReducer from './reducers/registryFormReducer'
import submissionReducer from './reducers/submissionReducer'

const reducer = combineReducers({
  routing: routerReducer,
  web3: web3Reducer,
  experiments: experimentsReducer,
  formData: registryFormReducer,
  submission: submissionReducer
})

export default reducer
