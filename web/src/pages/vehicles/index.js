const React = require('react')
const { Link } = require('react-router')
const data = require ('../../utils/data')()
// const {pluck} = require('ramda')
const vehicleItem = require('./item')
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')
const { Button } = require('react-bootstrap')

const Vehicles = React.createClass({
  getInitialState: function() {
    return{
      vehicles: []
    }
  },
  componentDidMount() {
    data.list('vehicles')
      //.then(result => pluck('doc', result.rows))
      .then(vehicles => this.setState({vehicles}))
  },
  render() {

    return (
      <container className='h-100'>
        <div className='tc bg-light-gray pa4 h-100'>
          <PageHeader />
            <div>
              <h3>Vehicles</h3>
              <ul className='list pl0'>
                {this.state.vehicles.map(vehicleItem)}
              </ul>
              <Button className='fr pa2'><Link to="/vehicles/new">Add New Vehicle</Link></Button>
            </div>
            <br /><br />
          <PageFooter />
        </div>
      </container>
    )
  }
})
module.exports = Vehicles
