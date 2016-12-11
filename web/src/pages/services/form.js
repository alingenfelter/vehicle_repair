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
  componentDidMount() {
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
        <h1>{formState} Service Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField label='Vehicle ID'
              value={this.state.vehicle_id}
              onChange={this.handleChange('vehicle_id')}
            />
          </div>
          <div>
            <TextField label='Category ID'
              value={this.state.category_id}
              onChange={this.handleChange('category_id')}
            />
          </div>
          <div>
            <TextField label='Service Name'
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
          </div>
          <div>
            <TextField label='Vehicle Mileage'
              value={this.state.vehicle_mileage}
              onChange={this.handleChange('vehicle_mileage')}
            />
          </div>
          <div>
            <TextField label='Date of Service'
              value={this.state.date}
              onChange={this.handleChange('date')}
            />
          </div>
          <div>
            <TextField label='Done By'
              value={this.state.done_by}
              onChange={this.handleChange('done_by')}
            />
          </div>
          <div>
            <TextField label='Cost'
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

module.exports = ServiceForm
