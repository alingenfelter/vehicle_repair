const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require ('../../utils/data')()

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
      <container>
        <div className='tc pa4 bg-light-gray'>
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
          <h2>Service Record Detail</h2>
          <h3>{service.vehicle_id}</h3>
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
        <footer className="tc-l bg-center cover">
        <div className="w-100 ph3 pv5 bg-black">
          <a className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2">
          alingenfelter &middot;
          <a href="https://linkedin.com/in/andrealingenfelter">LinkedIn</a> &middot;
          <a href="https://github.com/alingenfelter">GitHub
          </a></a>
        </div>
        </footer>
      </container>
    )
  }
})

module.exports = Service
