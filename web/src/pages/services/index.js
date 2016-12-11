const React = require('react')
const { Link } = require('react-router')
const data = require ('../../utils/data')()

const serviceItem = require('./item')

const Services = React.createClass({
  getInitialState: function() {
    return{
      services: []
    }
  },
  componentDidMount() {
    data.list('services')
      .then(services => this.setState({services}))
  },
  render() {
    return (
      <div className='tc pa4 bg-light-gray'>
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
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
        <header>
          <nav>
            <Link to="/services/new">Add New service</Link>
            |
            <Link to="/">Home</Link>
          </nav>
          <h3>Service Records</h3>
        </header>
        <main>
          <ul>
            {this.state.services.map(serviceItem)}
          </ul>
        </main>
        <footer className="tc-l bg-center cover">
        <div className="w-100 ph3 pv5 bg-black">
          <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2">
          alingenfelter &middot;
          <a href="https://linkedin.com/in/andrealingenfelter">LinkedIn</a> &middot;
          <a href="https://github.com/alingenfelter">GitHub
          </a></a>
        </div>
        </footer>
      </div>
    )
  }
})

module.exports = Services
