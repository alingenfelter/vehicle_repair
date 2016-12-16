const React = require('react')
const {Link, Redirect} = require('react-router')
const labelStyle = { display: 'block' }
//const inputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '30px'}
//const textInputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '120px'}
const data = require ('../../utils/data')()
//const TextField = require('../../components/TextField')
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')
const { FormGroup, FormControl, ControlLabel, Button } = require('react-bootstrap')


const VehicleForm = React.createClass({
  getInitialState: function() {
    return {
      vehicle: {
        "vin": '',
        "owner": '',
        "name": '',
        "year": '',
        "make": '',
        "model": '',
        "trim": '',
        "engine": '',
        "description": ''
        }
      }
  },
  componentDidMount() {
    if (this.props.params.id) {
      data.get('vehicles', this.props.params.id)
        .then(vehicle => this.setState({vehicle}))
    }
  },
  handleChange(field) {
    return (e) => {
      let vehicle = {...this.state.vehicle}
      vehicle[field] = e.target.value
      this.setState({vehicle})
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.vehicle.id) {
      return data.put('vehicles', this.state.vehicle.id, this.state.vehicle)
        .then (res => {
          if (res.id) {
            this.setState({resolved: true})
          }
        })
    }
      data.post('vehicles', this.state.vehicle)
        .then(res => this.setState({resolved: true}))

  },

  render() {
    const formState = this.state.vehicle.id ? 'Edit' : 'New'
    //console.log(this.state.locations)
    return (
      <div className='bg-light-silver pa4'>
      {this.state.resolved ? <Redirect to='/vehicles' /> : null}
      <PageHeader />
      <article className='mw7 mw8-ns center pt4'>
      <form onSubmit={this.handleSubmit} className='pa4 w-80 m-auto bg-light-gray'>
        <h2>{formState} Vehicle Form</h2>

          <FormGroup>
            <ControlLabel style={labelStyle}>Vehicle Name</ControlLabel>
            <FormControl
              value={this.state.vehicle.name}
              onChange={this.handleChange('name')}
              type='text'
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel style={labelStyle}>Vehicle VIN</ControlLabel>
            <FormControl
              value={this.state.vehicle.vin}
              onChange={this.handleChange('vin')}
              type='text'
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel style={labelStyle}>Vehicle Year</ControlLabel>
            <FormControl
              value={this.state.vehicle.year}
              onChange={this.handleChange('year')}
              type='text'
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel style={labelStyle}>Vehicle Make</ControlLabel>
            <FormControl
              value={this.state.vehicle.make}
              onChange={this.handleChange('make')}
              type='text'
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel style={labelStyle}>Vehicle Model</ControlLabel>
            <FormControl
              value={this.state.vehicle.model}
              onChange={this.handleChange('model')}
              type='text'
            />
            </FormGroup>

            <FormGroup>
              <ControlLabel style={labelStyle}>Vehicle Trim</ControlLabel>
              <FormControl
                value={this.state.vehicle.trim}
                onChange={this.handleChange('trim')}
                type='text'
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel style={labelStyle}>Vehicle Engine</ControlLabel>
              <FormControl
                value={this.state.vehicle.engine}
                onChange={this.handleChange('engine')}
                type='text'
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel style={labelStyle}>Vehicle Description</ControlLabel>
              <FormControl
                onChange={this.handleChange('description')}
                value={this.state.vehicle.description}
                type="text"
                />
            </FormGroup>

            <div>
              <div>
                <Button onClick={this.handleSubmit} className='btn btn-primary fl-l ma2'>Save</Button>
              </div>
              <div className='br2 bg-white mt2  dib w4 black'>
                <Button className='btn btn-default> fl-l'><Link to="/vehicles">Cancel</Link></Button>
              </div>

            </div>
          </form>
          </article>
          <PageFooter />
      </div>
    )
  }
})

module.exports = VehicleForm
