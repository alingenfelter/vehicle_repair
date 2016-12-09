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
        "name": ''
        }
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
    //to store effort value in DB, store value to variable then remove array
    //could also be handled by changing initial state to place
    //effort object (inc location_id) and locations array outside effort object.
    //would require updating render to this.state.effort.field
    // let category = [].concat(this.state)
    // const onResult = (e,r) => {
    //   if (e) return console.log(e.message)
    //   this.setState({success: true})
    // }
    //
    // if (!category.id) {
    //   this.props.post(category, onResult)
    // } else {
    //   this.props.put(category.id, category, onResult)
    // }
    //
    // if (this.state.id) {
    //   xhr.put('http://localhost:4000/categories/' + this.state.id, {
    //     json: this.state
    //   }, (err, response, body) => {
    //     if (err) return console.log(err.message)
    //     this.setState({success: true})
    //   })
    // } else {
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

    const formState = this.state.id ? 'Edit' : 'New'
    //console.log(this.state.locations)
    return (
      <div className='pa4 bg-light-silver'>
      {this.state.resolved ? <Redirect to='/categories' /> : null}
        <h1>{formState} Category Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField label='name'
              value={this.state.name}
              onChange={this.handleChange('name')}
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
