import React from 'react'
import FormListItem from './FormListItem'

const FormList = ({ questions, onInputChange, formData }) => {
  return (
    <div className='form-list'>
      {questions.map(question => <FormListItem key={question.title} value={formData[question.categoryField][question.formField]} question={question} onInputChange={onInputChange}/>)}
    </div>
  )
}

export default FormList
