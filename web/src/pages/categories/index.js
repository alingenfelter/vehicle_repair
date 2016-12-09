const React = require('react')
const { Link } = require('react-router')
const data = require ('../../utils/data')()

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
      <div>
        <header>
          <nav>
            <Link to="/categories/new">Add New Category</Link>
            |
            <Link to="/">Home</Link>
          </nav>
          <h3>Categories</h3>
        </header>
        <main>
          <ul>
            {this.state.categories.map(categoryItem)}
          </ul>
        </main>
      </div>
    )
  }
})

module.exports = Categories
