import { browserHistory } from 'react-router'

function updateForm(formData) {
  return {
    type: 'PREVIEW_FORM',
    payload: formData
  }
}

export const updateReduxFormState = (formData) => {
  return function(dispatch) {
    dispatch(updateForm(formData))
    return browserHistory.push('/preview')
  }
}
