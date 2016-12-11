const React = require('react')
const { Link } = require('react-router')
const {style} = require('glamor')


const Home = React.createClass({
  render() {
    return (
      <container className='h-100 w-100'>
        <div className='tc pa4  bg-light-gray'>
            <div>
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
                    <li className="active"><a href="">Home</a></li>
                    <li><a href="/about">About</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className='tc pa4  bg-light-gray'>
          <h2>Welcome to the Vehicle Service Record</h2>
          <p>What would you like to see?</p>
            <div className='db w-100'>
              <div className='dib fl w-33'>
                <li><Link to='/vehicles'><img src='http://freevector.co/wp-content/uploads/2009/06/64342-car-200x200.png' /></Link></li>
                <li><Link to='/vehicles'>Vehicles</Link></li>

              </div>
              <div className='dib fl w-33'>
                <li><Link to='/services'><img src='http://placeponi.es/200/200'/></Link></li>
                <li><Link to='/services'>Service Records</Link></li>
              </div>
              <div className='dib fl w-33'>
                <li><Link to='/categories'><img src='http://kcscomputerservices.com/wp-content/uploads/2016/09/tune-up-plus-textured.png' /></Link></li>
                <li><Link to='/categories'>Service Types</Link></li>
              </div>
            </div>
            <div>
              <p>Select an image above to get started.</p>
              <br /><br />
            </div>
        </div>
      </div>
      <br />
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
    </container>
    )
  }
})

module.exports = Home
