const React = require('react')
const { Link } = require('react-router')
const data = require ('../../utils/data')()

const Vehicle = React.createClass({
  getInitialState: function() {
    return {
      vehicle: {}
    }
  },
  handleRemove(e) {
      e.preventDefault()
      if (confirm('Are you sure?')) {
          data.remove('vehicles', this.props.params.id, this.state.vehicle).then(res => {
              this.setState({resolved: true})
          })

      }
  },
  componentDidMount() {
    data.get('vehicles',  this.props.params.id)
      .then(vehicle => this.setState({vehicle}))

  },
  render() {
    console.log('vehicle: ', this.state.vehicle)
    const vehicle = this.state.vehicle || {}
    return (
      <div>
        {this.state.resolved ? <Redirect to='/vehicles' /> : null}
        <h3>Vehicle Detail</h3>
        <h3>{vehicle.name}</h3>
        <p>{vehicle.year} {vehicle.make} {vehicle.model}</p>
        <p>{vehicle.trim} with a {vehicle.engine}</p>
        <p>{vehicle.description}</p>
        <Link to="/vehicles">Vehicles</Link>
        |
        <Link to={`/vehicles/${vehicle.id}/edit`}>Edit Vehicle</Link>
        |
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    )
  }
})

module.exports = Vehicle
