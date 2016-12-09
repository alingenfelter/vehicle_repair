const React = require('react')
const { Link } = require('react-router')
const data = require ('../../utils/data')()
const {pluck} = require('ramda')
const vehicleItem = require('./item')

const Vehicles = React.createClass({
  getInitialState: function() {
    return{
      vehicles: []
    }
  },
  componentDidMount() {
    data.list('vehicles')
      .then(result => pluck('doc', result.rows))
      .then(vehicles => this.setState({vehicles}))
  },
  render() {

    return (
      <div>
        <header>
          <nav>
            <Link to="/vehicles/new">Add New Vehicle</Link>
            |
            <Link to="/">Home</Link>
          </nav>
          <h3>Vehicles</h3>
        </header>
        <main>
          <ul>
            {this.state.vehicles.map(vehicleItem)}
          </ul>
        </main>
      </div>
    )
  }
})
module.exports = Vehicles
