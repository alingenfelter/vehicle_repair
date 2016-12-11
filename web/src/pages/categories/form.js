const React = require('react')
const {Link, Redirect} = require('react-router')
const labelStyle = { display: 'block', color: 'red' }
const inputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '30px'}
const textInputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '120px'}
const data = require ('../../utils/data')()
const TextField = require('../../components/TextField')

const CategoryForm = React.createClass({
  getInitialState: function() {
    return {
      category: {
        "name": '',
        "description": ''
        }
      }
  },
  componentDidMount() {
    if (this.props.params.id) {
      data.get('categories', this.props.params.id)
        .then(category => this.setState({category}))
    }
  },
  handleChange(field) {
    return (e) => {
      let category = {...this.state.category}
      category[field] = e.target.value
      this.setState({category})
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.category.id) {
      return data.put('categories', this.state.category.id, this.state.category)
        .then (res => {
          if (res.id) {
            this.setState({resolved: true})
          }
        })
    }
      data.post('categories', this.state.category)
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
  //     xhr.get('http://localhost:4000/categories/' + this.props.params.id,
  //       {json: true}, (err, res, category) => {
  //         if (err) return console.log(err.message)
  //         this.setState(category)
  //       })
  //   }
  // },
  render() {

    const formState = this.state.category.id ? 'Edit' : 'New'
    //console.log(this.state.locations)
    return (
      <div className='pa4 bg-light-silver'>
      {this.state.resolved ? <Redirect to='/categories' /> : null}
        <h1>{formState} Category Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField label='Category Name'
              value={this.state.category.name}
              onChange={this.handleChange('name')}
            />
          </div>
          <div>
            <TextField label='Category Description'
              value={this.state.category.description}
              onChange={this.handleChange('description')}
            />
          </div>
            <div>
              <div>
                  <button onClick={this.handleSubmit} className='br2 bg-white pa2 mt2 mr2 fl'>Save</button>
                </div>
              <div className='br2 bg-white pa2 mt2 mr2 dib'>
                <Link to="/categories">Cancel</Link>
              </div>
            </div>
          </form>
      </div>
    )
  }
})

module.exports = CategoryForm
