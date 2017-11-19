import React, { Component } from 'react'
import { connect } from 'react-redux'
import texts from '../util/formTexts'
import Button from '../components/Button'

class PreviewComponent extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g preview">
          <div className="pure-u-1-1">
            {texts.items.map(item => {
              return (
                <div key={item.category}>
                  <h1>{item.category}</h1>
                  {item.elements.map(element => {
                    return (
                      <div className='list-group' key={element.title}>
                        <h2>{element.title}</h2>
                        <p className='list-text'>{element.description}</p>
                        <p className='list-text-primary'>{this.props.formData[element.formField]}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
            <Button text="Register Experiment"/>
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
  return {}
}

const Preview = connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewComponent)

export default Preview
