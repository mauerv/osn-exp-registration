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
        <div className="pure-g preview">
          <div className="pure-u-1-1">
            <h1 className='main-title'>Registration Preview</h1>
            {texts.items.map(item => {
              return (
                <div key={item.category}>
                  <h2>{item.category}</h2>
                  {item.elements.map(element => {
                    return (
                      <div className='list-group' key={element.title}>
                        <h3>{element.title}</h3>
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
          </div>
        </div>
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
