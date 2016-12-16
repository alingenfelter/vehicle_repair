const React = require('react')
const { Link } = require('react-router')
const data = require ('../../utils/data')()
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')
const { Button } = require('react-bootstrap')


const categoryItem = require('./item')

const Categories = React.createClass({
  getInitialState: function() {
    return{
      categories: []
    }
  },
  componentDidMount() {
    data.list('categories')
      .then(categories => this.setState({categories}))
  },
  render() {
    return (
      <container className='h-100'>
        <div className='tc bg-light-gray pa4 h-100'>
          <PageHeader />
            <div>
            <h3>Categories</h3>

              <ul className='list pl0'>
                {this.state.categories.map(categoryItem)}
              </ul>
              <Button className='fr pa2'><Link to="/categories/new">Add New Category</Link></Button>
            <br /><br />
          <PageFooter />
        </div>
        </div>
      </container>


    )
  }
})

module.exports = Categories
