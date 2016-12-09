const React = require('react')
const {Link, Redirect} = require('react-router')
const labelStyle = { display: 'block', color: 'red' }
const inputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '30px'}
const textInputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '120px'}
const data = require ('../../utils/data')()

const TextField = require('../../components/TextField')

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
    const formState = this.state.id ? 'Edit' : 'New'
    //console.log(this.state.locations)
    return (
      <div className='pa4 bg-light-silver'>
      {this.state.resolved ? <Redirect to='/vehicles' /> : null}
        <h1>{formState} Vehicle Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField label='name'
              value={this.state.vehicle.name}
              onChange={this.handleChange('name')}
            />
          </div>
          <div>
            <TextField label='make'
              value={this.state.make}
              onChange={this.handleChange('make')}
            />
          </div>
          <div>
            <TextField label='model'
              value={this.state.model}
              onChange={this.handleChange('model')}
            />
            </div>
            <div>
              <TextField label='trim'
                value={this.state.trim}
                onChange={this.handleChange('trim')}
              />
            </div>
            <div>
              <TextField label='year'
                value={this.state.year}
                onChange={this.handleChange('year')}
              />
            </div>
            <div>
              <TextField label='engine'
                value={this.state.engine}
                onChange={this.handleChange('engine')}
              />
            </div>
            <div>
              <TextField label='mileage'
                value={this.state.mileage}
                onChange={this.handleChange('mileage')}
              />
            </div>
            <div>
              <TextField label='annual_mileage'
                value={this.state.annual_mileage}
                onChange={this.handleChange('annual_mileage')}
              />
            </div>
            <div>
              <label style={labelStyle}>Description</label>
              <textarea style={textInputStyle}
                onChange={this.handleChange('description')}
                value={this.state.description}
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
      </div>
    )
  }
})

module.exports = VehicleForm
