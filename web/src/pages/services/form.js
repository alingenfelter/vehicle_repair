const React = require('react')
const {Link, Redirect} = require('react-router')
const labelStyle = { display: 'block'}
//const inputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '30px'}
//const textInputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '120px'}
const data = require ('../../utils/data')()
//const TextField = require('../../components/TextField')
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')
const { FormGroup, FormControl, ControlLabel, Button } = require('react-bootstrap')


const ServiceForm = React.createClass({
  getInitialState: function() {
    return {
      service: {
        "vehicle_id":'',
        "category_id": '',
        "name": '',
        "vehicle_mileage": '',
        "date": '',
        "done_by": '',
        "cost": '',
        "description": ''
      },
        categories: [],
        vehicles: []
      }
  },
  componentDidMount() {
    data.list('categories').then(categories => this.setState({categories}))
    data.list('vehicles').then(vehicles => this.setState({vehicles}))


    if (this.props.params.id) {
      data.get('services', this.props.params.id)
        .then(service => this.setState({service}))
    }
  },
  handleChange(field) {
    return (e) => {
      let service = {...this.state.service}
      service[field] = e.target.value
      this.setState({service})
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.service.id) {
      return data.put('services', this.state.service.id, this.state.service)
        .then (res => {
          if (res.id) {
            this.setState({resolved: true})
          }
        })
    }

      data.post('services', this.state.service)
        .then(res => this.setState({resolved: true}))

  },

  handleCategorySelect(e) {
    const service = {...this.state.service}
    const categories = [...this.state.categories]
    service.category_id = categories.find(category => {
      return category._id === e.target.value
    })._id
    this.setState({service})
  },
  handleVehicleSelect(e) {
    const service = {...this.state.service}
    const vehicles = [...this.state.vehicles]

    service.vehicle_id = vehicles.find(vehicle => {
      return vehicle._id === e.target.value
    })._id
    this.setState({service})
  },
  render() {
    const formState = this.state.service.id ? 'Edit' : 'New'
    return (
      <div className='bg-light-silver pa4'>
      {this.state.resolved ? <Redirect to='/services' /> : null}
      <PageHeader />
        <article className='mw7 mw8-ns center pt4'>
        <form onSubmit={this.handleSubmit} className='pa4 w-80 mw6 m-auto bg-light-gray'>
          <h2>{formState} Service Form</h2>
          <FormGroup>
            <ControlLabel style={labelStyle}>Vehicle ID</ControlLabel>
            <select className="form-control"
            value={this.state.service.vehicle_id}
            onChange={this.handleVehicleSelect}>
              <option value="-1">Select</option>
              {this.state.vehicles.map(vehicle => <option key={vehicle._id} value={vehicle._id}>{vehicle.name}</option>)}
          </select>
          </FormGroup>

          <FormGroup>
            <ControlLabel style={labelStyle}>Service Category</ControlLabel>
            <select className="form-control"
            value={this.state.service.category_id}
            onChange={this.handleCategorySelect}>
              <option value="-1">Select</option>
              {this.state.categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}
          </select>
          </FormGroup>
          <FormGroup>
            <ControlLabel style={labelStyle}>Service Name</ControlLabel>
            <FormControl
              value={this.state.service.name}
              onChange={this.handleChange('name')}
              type='text'
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel style={labelStyle}>Vehicle Mileage</ControlLabel>
            <FormControl
              value={this.state.service.vehicle_mileage}
              onChange={this.handleChange('vehicle_mileage')}
              type='text'
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel style={labelStyle}>Date of Service</ControlLabel>
            <FormControl
              value={this.state.service.date}
              onChange={this.handleChange('date')}
              type='text'
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel style={labelStyle}>Serviced By</ControlLabel>
            <FormControl
              value={this.state.service.done_by}
              onChange={this.handleChange('done_by')}
              type='text'
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel style={labelStyle}>Service Cost</ControlLabel>
            <FormControl
              value={this.state.service.cost}
              onChange={this.handleChange('cost')}
              type='text'
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel style={labelStyle}>Service Description</ControlLabel>
            <FormControl
              onChange={this.handleChange('description')}
              value={this.state.service.description}
              type="text" />
          </FormGroup>

            <div>
              <div>
                <Button onClick={this.handleSubmit} className='btn btn-primary fl-l ma2'>Save</Button>
              </div>
              <div className='br2 bg-white mt2  dib w4 black'>
                <Button className='btn btn-default> fl-l'><Link to="/services">Cancel</Link></Button>
              </div>
            </div>
          </form>
          </article>
          <PageFooter />
      </div>
    )
  }
})

module.exports = ServiceForm
