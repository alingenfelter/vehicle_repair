const React = require('react')
const {Link, Redirect} = require('react-router')
const labelStyle = { display: 'block', color: 'red' }
//const inputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '30px'}
const textInputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '120px'}
const data = require ('../../utils/data')()
const TextField = require('../../components/TextField')
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')

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

    //to store effort value in DB, store value to variable then remove array
    //could also be handled by changing initial state to place
    //effort object (inc location_id) and locations array outside effort object.
    //would require updating render to this.state.effort.field
    // let vehicle = [].concat(this.state)
    // const onResult = (e,r) => {
    //   if (e) return console.log(e.message)
    //   this.setState({success: true})
    // }
    //
    // if (!vehicle.id) {
    //   this.props.post(vehicle, onResult)
    // } else {
    //   this.props.put(vehicle.id, vehicle, onResult)
    // }
    //
    // if (this.state.id) {
    //   xhr.put('http://localhost:4000/vehicles/' + this.state.id, {
    //     json: this.state
    //   }, (err, response, body) => {
    //     if (err) return console.log(err.message)
    //     this.setState({success: true})
    //   })
    // } else {
      data.post('vehicles', this.state.vehicle)
        .then(res => this.setState({resolved: true}))
    //}
  },
  // componentDidMount() {
  //   //add to get locations
  //   // xhr(process.env.REACT_APP_API + '/locations', {
  //   //   json: true
  //   // }, (err, res, body) => {
  //   //   //console.log(body)
  //   //   if (err) return console.log(err.message)
  //   //   this.setState({locations:
  //   //     [].concat(this.state.locations,body)
  //   //   })
  //   // })
  //   //if (this.props.params.id) {
  //     xhr.get('http://localhost:4000/vehicles/' + this.props.params.id,
  //       {json: true}, (err, res, vehicle) => {
  //         if (err) return console.log(err.message)
  //         this.setState(vehicle)
  //       })
  //   }
  // },
  render() {
    const formState = this.state.vehicle.id ? 'Edit' : 'New'
    //console.log(this.state.locations)
    return (
      <div className='bg-light-silver'>
      {this.state.resolved ? <Redirect to='/vehicles' /> : null}
      <PageHeader />
      <form onSubmit={this.handleSubmit} className='pa4'>
        <h1>{formState} Vehicle Form</h1>

          <div>
            <TextField label='Vehicle Name'
              value={this.state.vehicle.name}
              onChange={this.handleChange('name')}
            />
          </div>
          <div>
            <TextField label='VIN'
              value={this.state.vehicle.vin}
              onChange={this.handleChange('vin')}
            />
          </div>
          <div>
            <TextField label='Make'
              value={this.state.vehicle.make}
              onChange={this.handleChange('make')}
            />
          </div>
          <div>
            <TextField label='Model'
              value={this.state.vehicle.model}
              onChange={this.handleChange('model')}
            />
            </div>
            <div>
              <TextField label='Trim'
                value={this.state.vehicle.trim}
                onChange={this.handleChange('trim')}
              />
            </div>
            <div>
              <TextField label='Year'
                value={this.state.vehicle.year}
                onChange={this.handleChange('year')}
              />
            </div>
            <div>
              <TextField label='Engine'
                value={this.state.vehicle.engine}
                onChange={this.handleChange('engine')}
              />
            </div>
            <div>
              <label style={labelStyle}>Description</label>
              <textarea style={textInputStyle}
                onChange={this.handleChange('description')}
                value={this.state.vehicle.description}
                type="text" />
            </div>

            <div>
              <div>
                <button onClick={this.handleSubmit} className='br2 bg-white pa2 mt2 mr2 fl'>Save</button>
              </div>
              <div className='br2 bg-white pa2 mt2 mr2 dib'>
                <Link to="/vehicles">Cancel</Link>
              </div>
            </div>
          </form>
          <PageFooter />
      </div>
    )
  }
})

module.exports = VehicleForm
