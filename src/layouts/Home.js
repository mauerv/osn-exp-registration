import React, { Component } from 'react'
import { Link } from 'react-router'

import Button from '../components/Button'

class Home extends Component {
  render() {
    return(
      <main className="container home">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <div className="jumbotron">
              <h1 className="main-title">Blockchain Experiment Preregistration</h1>
              <h2>What is Preregistration?</h2>
              <p>When you preregister your research, you are simply committing to your plan in advance, before you gather data.</p>
              <p>Preregistration separates hypothesis-generating  (exploratory) from hypothesis-testing (confirmatory) research. Both are important, but the same data cannot be used to generate and test a hypothesis, which can happen unintentionally and reduce the clarity and quality of your results. </p>
              <p>Removing these potential conflicts through planning improves the quality and transparency of your research, helping others who may wish to build on it.</p>
            </div>
            <div className="features-small">
              <div>
                <h2>When Should You Preregister?</h2>
                <ul>
                  <li>Right before your next round of data collection</li>
                  <li>After you are asked to collect more data in peer review</li>
                  <li>Before you begin analysis of an existing data set</li>
                </ul>
              </div>
              <div>
                <h2>Why Preregister?</h2>
                <ul>
                  <li>Makes your science better by increasing the credibility of your results</li>
                  <li>Allows you to stake your claim to your ideas earlier</li>
                </ul>
              </div>
            </div>
            <Link to="/registry-form" className="btn btn-primary block-center">New Registration</Link>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
