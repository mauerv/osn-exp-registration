import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { updateReduxFormState } from '../actions/registryFormActions'

import texts from '../util/formTexts'
import formStateTree from '../util/formStateTree'

import SideBar from '../components/SideBar'
import FormList from '../components/FormList'
import Button from '../components/Button'

class RegistryFormComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...formStateTree,
      activeCategory: 0
    }
  }

  setActiveCategory(e) {
    this.setState({activeCategory: Number(e.target.dataset.category)})
  }

  setFormFieldState(e) {
    e.preventDefault()
    this.setState({[e.target.dataset.field]: e.target.value})
  }

  handleNextPage(e) {
    e.preventDefault()
    this.setState({activeCategory: this.state.activeCategory + 1})
  }

  handlePreviewClick(e) {
    e.preventDefault()
    let formData = Object.assign({}, this.state)
    delete formData.activeCategory
    /*
    for (var key in formData) {
      if (formData[key] === '') {
        return alert('Required fields are not filled.')
      }
    }
    */
    this.props.onPreviewClick(formData)
  }

  render() {
    return (
      <main className="container registry-form">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Registration Form</h1>
              <SideBar items={texts.categories}
                       onItemClick={this.setActiveCategory.bind(this)}
                       activeCategory={this.state.activeCategory}/>
              <FormList questions={texts.items[this.state.activeCategory].elements}
                        onInputChange={this.setFormFieldState.bind(this)}/>
            {this.state.activeCategory === (texts.categories.length - 1) ?
              <Button text='Preview Submission' onButtonClick={this.handlePreviewClick.bind(this)}/> :
              <Button text='Next Page' onButtonClick={this.handleNextPage.bind(this)}/>}
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPreviewClick: (formData) => {
      event.preventDefault()
      dispatch(updateReduxFormState(formData))
    }
  }
}

const RegistryForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistryFormComponent)

export default RegistryForm
