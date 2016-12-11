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
      <container className='h-100 w-100'>
        <div className='tc pa4  bg-light-gray'>
          {this.state.resolved ? <Redirect to="/categories"/> : null}
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
      <h3>Service Types</h3>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <Link to="/categories">Categories</Link>
          |
          <Link to={`/categories/${category.id}/edit`}>Edit Category</Link>
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

module.exports = Category
