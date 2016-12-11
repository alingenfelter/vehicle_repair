const React = require('react')

const About = React.createClass({
  render() {
    return (
      <container className='h-100 w-100'>
        <div className='tc pa4  bg-light-gray'>
        <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Vehicle Repair Record</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li className="active"><a href="/about">About</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
          <h1>About the Vehicle Repair Record App</h1>
          <p>
          Did I replace the starter to the solenoid?  What about the voltage regulator? Which car did I replace the battery on last year?
          When was the oil last changed?  Maintaining cars, whether performing the work yourself or visiting mechanics, keeping track of repairs
          and maintenace is challenging!  Instead of keeping a file of paperwork and digging through it to answer these questions, the vehicle repair app
          allows users to track this information and easily answer these questions.
          Using Javascript, React, and CouchDB, the Vehicle Repair Records app is a single page web app that allows
          users to easily track maintenance and repairs to their vehicles, whether they perform the work themselves or use a mechanic.
          Users set up their vehicles in the app, then record details about repairs and maintenance.
          </p>
        </div>

        <footer className="tc-l bg-center cover">
        <div className="w-100 ph3 pv5 bg-black">
          <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2">
          alingenfelter &middot;
          <a href="https://linkedin.com/in/andrealingenfelter">LinkedIn</a> &middot;
          <a href="https://github.com/alingenfelter">GitHub
          </a></a>
        </div>
        </footer>
      </container>
    )
  }
})

module.exports = About
