const React = require('react')
const {Link} = require('react-router')
import {Navbar} from 'react-bootstrap'

const PageHeader = React.createClass({
  render() {
    return (
      <Navbar className='navbar navbar-inverse navbar-static-top'>
        <Navbar.Header>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="navbar-collapse" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <Navbar.Brand>
            <h2>Vehicle Repair Record</h2>
          </Navbar.Brand>
        </Navbar.Header>
        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav tc pa4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/vehicles">Vehicles</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
      </Navbar>
    )
  }
})

module.exports = PageHeader
