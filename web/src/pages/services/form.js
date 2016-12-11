const React = require('react')
const {Link, Redirect} = require('react-router')
const labelStyle = { display: 'block', color: 'red' }
const inputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '30px'}
const textInputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '120px'}
const data = require ('../../utils/data')()
const TextField = require('../../components/TextField')

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
        }
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
      data.post('services', this.state.service)
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
  //   if (this.props.params.id) {
  //     xhr.get('http://localhost:4000/vehicles/' + this.props.params.id,
  //       {json: true}, (err, res, vehicle) => {
  //         if (err) return console.log(err.message)
  //         this.setState(vehicle)
  //       })
  //   }
  // },
  render() {

    const formState = this.state.service.id ? 'Edit' : 'New'
    //console.log(this.state.locations)
    return (
      <div className='pa4 bg-light-silver'>
      {this.state.resolved ? <Redirect to='/services' /> : null}
        <h1>{formState} service Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField label='vehicle_id'
              value={this.state.vehicle_id}
              onChange={this.handleChange('vehicle_id')}
            />
          </div>
          <div>
            <TextField label='category_id'
              value={this.state.category_id}
              onChange={this.handleChange('category_id')}
            />
          </div>
          <div>
            <TextField label='name'
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
          </div>
          <div>
            <TextField label='vehicle_mileage'
              value={this.state.vehicle_mileage}
              onChange={this.handleChange('vehicle_mileage')}
            />
          </div>
          <div>
            <TextField label='date'
              value={this.state.date}
              onChange={this.handleChange('date')}
            />
          </div>
          <div>
            <TextField label='done_by'
              value={this.state.done_by}
              onChange={this.handleChange('done_by')}
            />
          </div>
          <div>
            <TextField label='cost'
              value={this.state.cost}
              onChange={this.handleChange('cost')}
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
                <Link to="/services">Cancel</Link>
                {/* <Link to="/vehicles/{this.props.params.id}/services">Cancel</Link> */}
              </div>
            </div>
          </form>
      </div>
    )
  }
})

module.exports = ServiceForm
