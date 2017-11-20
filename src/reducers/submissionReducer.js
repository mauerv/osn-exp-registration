const initialState = {
  hash: '',
  tx: '',
  file: ''
}

const experimentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SUCCESSFUL_REGISTRATION':
      return Object.assign({}, state, {
        hash: action.hash,
        tx: action.tx,
        file: action.file
      })
    default:
      return state
  }
}

export default experimentsReducer
