import React from 'react'

const FormListItem = ({ question, onInputChange }) => {
  const { title, description, formField } = question
  return (
    <div className='form-group'>
      <h2 className='form-caption'>{title}</h2>
      <p className='form-description'>{description}</p>
      <input className='form-input' data-field={formField} type="text" onChange={onInputChange}></input>
    </div>
  )
}

export default FormListItem
