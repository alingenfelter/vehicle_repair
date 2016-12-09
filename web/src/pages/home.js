const React = require('react')
const { Link } = require('react-router')

const Home = React.createClass({
  render() {
    return (
      <div className='pa4'>
        <div>
          <form>
            <div>
              <h2>Welcome to the Vehicle Service Record</h2>
              <p>Please select a vehicle</p>
                <div className='db w-100'>
                  <div className='dib fl w-33'>
                    <img src='http://placeponi.es/200/200' />
                  </div>
                  <div className='dib fl w-33'>
                    <img src='http://placeponi.es/200/200' />
                  </div>
                  <div className='dib fl w-33'>
                    <img src='http://placeponi.es/200/200' />
                  </div>
                </div>
                <div>
                  <ul>
                    <li><Link to='/vehicles'>Vehicles</Link></li>
                    <li><Link to='/services'>Service Records</Link></li>
                    <li><Link to='/categories'>Service Types</Link></li>
                    <li><Link to='/about'>About</Link></li>
                  </ul>
                </div>

            </div>
          </form>
      </div>
    </div>
    )
  }
})

module.exports = Home
