const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require ('../../utils/data')()
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')

const Service = React.createClass({
  getInitialState: function() {
    return {
      service: {}
    }
  },
  componentDidMount() {
    data.get('services', this.props.params.id)
      .then(service => this.setState({service}))
  },

  handleRemove(e) {
      e.preventDefault()
      if (confirm('Are you sure?')) {
          data.remove('services', this.props.params.id, this.state.service).then(res => {
              this.setState({resolved: true})
          })

      }
  },
  render() {
    const service = this.state.service || {}
    return (
      <div className='tc bg-light-gray pa4'>
        <div>
          {this.state.resolved ? <Redirect to='/services' /> : null}
          <PageHeader />
          <h2>Service Record Detail</h2>
          <h3 key={service.id}>{service.vehicle_id}</h3>
          <h3>{service.category_id}: {service.name}</h3>
          <p>{service.done_by}</p>
          <p>{service.cost}</p>
          <p>{service.description}</p>

          <Link to="/services">services</Link>
          |
          <Link to={`/services/${service.id}/edit`}>Edit service</Link>
          |
          <button onClick={this.handleRemove}>Remove</button>
        </div>
        <PageFooter />
      </div>
    )
  }
})

module.exports = Service
