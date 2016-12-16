const React = require('react')
const { Link } = require('react-router')
const PageHeader = require('../components/Header')
const PageFooter = require('../components/Footer')


const Home = React.createClass({
  render() {
    return (
      <container>
        <div className='tc bg-light-gray'>
        <PageHeader />
        <div className='tc pa4  bg-light-gray'>
          <h2>Welcome to the Vehicle Service Record</h2>
          <p>What would you like to see?</p>
            <div className='db w-100'>
              <div className='dib fl w-33 pa2'>

                <Link to='/services'><img src='http://freevector.co/wp-content/uploads/2014/04/63363-find-in-folder-200x200.png'
                    alt=''/>
                </Link>
                <br />
                <Link to='/services'>Service Records</Link>
              </div>

              <div className='dib fl w-33 pa2'>
                <Link to='/vehicles'><img src='http://freevector.co/wp-content/uploads/2009/06/64342-car-200x200.png' alt='' />
                </Link>
                <br />
                <Link to='/vehicles'>Vehicles</Link>

              </div>

              <div className='dib fl w-33 pa2'>
                <Link to='/categories'><img src='http://freevector.co/wp-content/uploads/2013/07/25525-wrench-and-pick-hammer-outline1-200x200.png'
                  alt=''/>
                </Link>
                <br />
                <Link to='/categories'>Service Types</Link>
              </div>
            </div>
            <div>
              <p>Select an image above to get started.</p>
              <br /><br />
            </div>
        </div>
      <br />
      <PageFooter />
      </div>
     </container>
    )
  }
})

module.exports = Home
