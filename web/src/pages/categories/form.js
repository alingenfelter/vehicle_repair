const React = require('react')
const {Link, Redirect} = require('react-router')
const labelStyle = { display: 'block' }
// const inputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '30px'}
// const textInputStyle = {display: 'block', color: 'gray', background: 'light-gray', width: '200px', height: '120px'}
const data = require ('../../utils/data')()
//const TextField = require('../../components/TextField')
const PageHeader = require('../../components/Header')
const PageFooter = require('../../components/Footer')
const { FormGroup, FormControl, ControlLabel, Button } = require('react-bootstrap')


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

  render() {

    const formState = this.state.category.id ? 'Edit' : 'New'
    //console.log(this.state.locations)
    return (
      <div className=' pa4 bg-light-silver'>
        <div>
        {this.state.resolved ? <Redirect to='/categories' /> : null}
        <PageHeader />
        <article className='mw7 mw8-ns center pt4'>
        <form onSubmit={this.handleSubmit} className='pa4 w-80 mw6 m-auto bg-light-gray'>
            <h2>{formState} Category Form</h2>
            <FormGroup>
            <ControlLabel style={labelStyle}>Service Category</ControlLabel>
              <FormControl
                value={this.state.category.name}
                onChange={this.handleChange('name')}
                type='text'
              />
            </FormGroup>
            <FormGroup>
            <ControlLabel style={labelStyle}>Category Description</ControlLabel>
              <FormControl
                value={this.state.category.description}
                onChange={this.handleChange('description')}
                type='text'
              />
            </FormGroup>
              <div>
                <div>
                    <Button onClick={this.handleSubmit} className='br2 bg-white pa2 mt2 mr2 fl'>Save</Button>
                  </div>
                <div>
                  <Button className='br2 bg-white pa2 mt2 mr2 fl'><Link to="/categories">Cancel</Link></Button>
                </div>
                <br /><br />
              </div>
            </form>
            </article>
        </div>
        <PageFooter />
      </div>
    )
  }
})

module.exports = CategoryForm
