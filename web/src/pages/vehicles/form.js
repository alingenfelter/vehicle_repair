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
    const formState = this.state.vehicle.id ? 'Edit' : 'New'
    //console.log(this.state.locations)
    return (
      <div className='pa4 bg-light-silver'>
      {this.state.resolved ? <Redirect to='/vehicles' /> : null}
      <div className="navbar-wrapper">
    <div className="container">
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Vehicle Repair Record</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
        <h1>{formState} Vehicle Form</h1>
        <form onSubmit={this.handleSubmit}>
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
              value={this.state.make}
              onChange={this.handleChange('make')}
            />
          </div>
          <div>
            <TextField label='Model'
              value={this.state.model}
              onChange={this.handleChange('model')}
            />
            </div>
            <div>
              <TextField label='Trim'
                value={this.state.trim}
                onChange={this.handleChange('trim')}
              />
            </div>
            <div>
              <TextField label='Year'
                value={this.state.year}
                onChange={this.handleChange('year')}
              />
            </div>
            <div>
              <TextField label='Engine'
                value={this.state.engine}
                onChange={this.handleChange('engine')}
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
          <footer className="tc-l bg-center cover">
          <div className="w-100 ph3 pv5 bg-black">
            <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2">
            alingenfelter &middot;
            <a href="https://linkedin.com/in/andrealingenfelter">LinkedIn</a> &middot;
            <a href="https://github.com/alingenfelter">GitHub
            </a></a>
          </div>
          </footer>
      </div>
    )
  }
})

module.exports = VehicleForm
