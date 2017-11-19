import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import web3Reducer from './reducers/web3Reducer'
import experiments from './reducers/experimentsReducer'

const reducer = combineReducers({
  routing: routerReducer,
  web3: web3Reducer,
  experiments: experiments
})

export default reducer
