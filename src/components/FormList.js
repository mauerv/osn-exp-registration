import React from 'react'
import FormListItem from './FormListItem'

const FormList = ({ questions, onInputChange }) => {
  return (
    <div className='form-list'>
      {questions.map(question => <FormListItem key={question.title} question={question} onInputChange={onInputChange}/>)}
    </div>
  )
}

export default FormList
