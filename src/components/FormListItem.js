import React from 'react'

const FormListItem = ({ question, onInputChange, value }) => {
  const { title, description, formField, categoryField } = question
  return (
    <div className='form-group'>
      <h2 className='form-caption'>{title}</h2>
      <p className='form-description'>{description}</p>
      <input className='form-input' data-field={formField} data-category={categoryField} value={value} type="text" onChange={onInputChange}></input>
    </div>
  )
}

export default FormListItem
