const React = require('react')
const { Link, Redirect } = require('react-router')
const data = require ('../../utils/data')()
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')
const { Button } = require('react-bootstrap')

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
      <div className='tc bg-light-gray pa4'>
        <div>
          {this.state.resolved ? <Redirect to="/categories"/> : null}
        <PageHeader />
      <h3>Service Types</h3>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <Button className='pa3'><Link to="/categories">Categories</Link></Button>
          |
          <Button className='pa3'><Link to={`/categories/${category._id}/edit`}>Edit Category</Link></Button>
          |
          <Button onClick={this.handleRemove}>Remove</Button>
          <br /><br /> 
        </div>
        <PageFooter />
      </div>
    )
  }
})

module.exports = Category
