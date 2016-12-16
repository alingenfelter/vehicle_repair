const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require ('../../utils/data')()
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')
const { Button } = require('react-bootstrap')

const Vehicle = React.createClass({
  getInitialState: function() {
    return {
      services: [],
      vehicle: {},

    }
  },

  componentDidMount() {
    data.get('vehicles',  this.props.params.id)
      .then(vehicle => this.setState({vehicle}))
    data.list('services')
      .then(services => services.filter(service => service.vehicle_id === this.props.params.id ))
      .then(services => this.setState({services}))
  },

  handleRemove(e) {
      e.preventDefault()
      if (confirm('Are you sure?')) {
          data.remove('vehicles', this.props.params.id, this.state.vehicle).then(res => {
              this.setState({resolved: true})
          })

      }
  },
  render() {
    const record = service =>
      <tr key={service.id}>
        <td>{service.name}</td>
        <td>{service.date}</td>
        <td>{service.done_by}</td>
        <td>{service.description}</td>
      </tr>
    const vehicle = this.state.vehicle || {}
    return (
      <div className='tc bg-light-gray pa4'>
      <div>
      <PageHeader />
        {this.state.resolved ? <Redirect to='/vehicles' /> : null}
        <h3>Vehicle Detail</h3>
        <h3>{vehicle.name}</h3>
        <p>{vehicle.year} {vehicle.make} {vehicle.model}</p>
        <p>{vehicle.trim} with a {vehicle.engine}</p>
        <p>{vehicle.description}</p>
        <Button className='ma2'><Link to="/vehicles">Back to Vehicles</Link></Button>

        <Button className='ma2'><Link to={`/vehicles/${vehicle.id}/edit`}>Edit Vehicle</Link></Button>

        {/* <Link to="/services/new">Add New service</Link> */}
        <Button className='ma2'><Link to={`/services/new/vehcile_id=${this.state.vehicle.id}`}>Add New Service</Link></Button>

        <Button className='ma2' onClick={this.handleRemove}>Remove Vehicle</Button>
        <br /><br />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {/* <td><Link to={`/services/${service.id}/show`}> Service Name</Link></td> */}
              <td>Service Name</td>
              <td>Service Date</td>
              <td>Done By</td>
              <td>Service Description</td>
            </tr>
          </thead>
          <tbody>
            {this.state.services.map(record)}
          </tbody>
        </table>
      </div>
      <PageFooter />
      </div>

    )
  }
})

module.exports = Vehicle
