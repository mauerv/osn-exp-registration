import React, { Component } from 'react'
import { connect } from 'react-redux'
import texts from '../util/formTexts'
import { submitRegistrationForm } from '../actions/registryFormActions'
import Button from '../components/Button'
import { Link } from 'react-router'

class PreviewComponent extends Component {
  render() {
    return (
      <main className="container">
        {texts.items.map(item => {
          return (
            <div key={item.category}>
              <h1>{item.category}</h1>
              {item.elements.map(element => {
                return (
                  <div className='list-group' key={element.title}>
                    <h2>{element.title}</h2>
                    <p className='list-text'>{element.description}</p>
                    <p className='list-text-primary'>{this.props.formData[element.categoryField][element.formField]}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
        <Link to='/registry-form' className='btn btn-primary absolute-left'>Back to Form</Link>
        <Button text="Register Experiment" onButtonClick={this.props.submitForm}/>
      </main>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.formData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: () => {
      dispatch(submitRegistrationForm())
    }
  }
}

const Preview = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewComponent)

export default Preview
