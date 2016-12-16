const React = require('react')
const PageHeader = require('../components/Header')
const PageFooter = require('../components/Footer')

const About = React.createClass({
  render() {
    return (
      <container className='h-100 w-100'>
        <div className='tc bg-light-gray pa4'>
        <PageHeader />
        <div className='tc pa4  bg-light-gray h-100'>
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

      <br />
      <PageFooter />
      </div>
    </container>
    )
  }
})

module.exports = About
