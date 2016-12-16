const React = require('react')
const {Link} = require('react-router')
const data = require('../../utils/data')()
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')
const { Button } = require('react-bootstrap')

const serviceItem = require('./item')

const Services = React.createClass({
    getInitialState: function() {
        return {services: []}
    },
    componentDidMount() {
        data.list('services').then(services => this.setState({services}))
    },
    render() {
        return (
            <container className='h-100'>
                <div className='tc bg-light-gray pa4 h-100'>
                    <PageHeader/>
                    <div>
                        <h3>Service Records</h3>
                        <ul className='list pl0'>
                            {this.state.services.map(serviceItem)}
                        </ul>
                        <Button className='fr pa2'>
                            <Link to="/services/new">Add New service</Link>
                        </Button>
                        <br/><br/>
                        <PageFooter/>
                    </div>
                  </div>
            </container>
        )
    }
})

module.exports = Services
