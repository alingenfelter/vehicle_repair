const React = require('react')
const { Link } = require('react-router')
const data = require ('../../utils/data')()

const serviceItem = require('./item')

const Services = React.createClass({
  getInitialState: function() {
    return{
      services: []
    }
  },
  componentDidMount() {
    data.list('services')
      .then(services => this.setState({services}))
  },
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/services/new">Add New service</Link>
            |
            <Link to="/">Home</Link>
          </nav>
          <h3>Service Records</h3>
        </header>
        <main>
          <ul>
            {this.state.services.map(serviceItem)}
          </ul>
        </main>
      </div>
    )
  }
})

module.exports = Services
