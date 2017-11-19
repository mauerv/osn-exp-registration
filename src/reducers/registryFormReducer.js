import formStateTree from '../util/formStateTree'

const initialState = formStateTree

const registryFormReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'PREVIEW_FORM':
      console.log('The state is:', state);
      console.log('The payload is:', action.payload);
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default registryFormReducer
