const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require ('../../utils/data')()

const Category = React.createClass({
  getInitialState: function() {
    return {
      category: {}
    }
  },

  handleRemove(e) {
      e.preventDefault()
      if (confirm('Are you sure?')) {
          data.remove('categories', this.props.params.id, this.state.category).then(res => {
              this.setState({resolved: true})
          })

      }
  },
  componentDidMount() {
    data.get('categories', this.props.params.id)
      .then(category => this.setState({category}))
  },
  render() {
    const category = this.state.category || {}
    console.log(this.state.resolved)
    return (
      <div>
        {this.state.resolved ? <Redirect to="/categories"/> : null}
        <h3>Service Types</h3>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <Link to="/categories">Categories</Link>
        |
        <Link to={`/categories/${category.id}/edit`}>Edit Category</Link>
        |
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    )
  }
})

module.exports = Category
