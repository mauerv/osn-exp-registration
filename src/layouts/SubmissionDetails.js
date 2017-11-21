import React, { Component } from 'react'
import { connect } from 'react-redux'

class SubmissionDetailsComponent extends Component {
  render() {
    const { hash, tx, file } = this.props.submission

    return (
      <main className="container registry">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Submission Details</h1>
            <p><strong>The File Hash is:</strong> {hash}</p>
            <p><strong>The transaction ID on the blockchain is:</strong> {tx}</p>
            <p>You should download this file as it contains the data necessary to prove that you preregistered the experiment on the blockchain.</p>
            <a download="experimentDataBackup.json"
               href={"data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(file))}>Download</a>
          </div>
        </div>
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
