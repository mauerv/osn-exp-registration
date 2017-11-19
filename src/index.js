import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import getWeb3 from './actions/getWeb3'
import { requestExperiments } from './actions/experimentsActions.js'

// Layouts
import App from './App'
import Home from './layouts/Home'
import Registry from './layouts/Registry'
import RegistryForm from './layouts/RegistryForm'
import Preview from './layouts/Preview'

// Redux Store
import store from './store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
  store.dispatch(requestExperiments())
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="registry" component={Registry} />
          <Route path="registry-form" component={RegistryForm} />
          <Route path="preview" component={Preview} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
