import React, { Component } from 'react'
import { connect } from 'react-redux'

class SubmissionDetailsComponent extends Component {
  render() {
    const { hash, tx, file } = this.props.submission

    return (
      <main className="container registry">
        <h1>Submission Details</h1>
        <p>{hash}</p>
        <p>{tx}</p>
        <a download="experimentDataBackup.json"
           href={"data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(file))}>Download</a>
      </main>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    submission: state.submission
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const SubmissionDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmissionDetailsComponent)

export default SubmissionDetails
