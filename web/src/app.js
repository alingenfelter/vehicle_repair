const React = require('react')
const { BrowserRouter, Match } = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Categories = require('./pages/categories/index')
const Category = require('./pages/categories/show')
const CategoryForm = require('./pages/categories/form')
const Vehicles = require('./pages/vehicles/index')
const Vehicle = require('./pages/vehicles/show')
const VehicleForm = require('./pages/vehicles/form')
const Services = require('./pages/services/index')
const Service = require('./pages/services/show')
const ServiceForm = require('./pages/services/form')


const App = React.createClass({

  render() {
    return(
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />

          <Match exactly pattern="/categories" component={Categories} />
          <Match pattern="/categories/:id/show" component={Category} />
          <Match pattern="/categories/new" component={CategoryForm} />
          <Match pattern="/categories/:id/edit" component={CategoryForm} />

          <Match exactly pattern="/vehicles" component={Vehicles} />
          <Match pattern="/vehicles/:id/show" component={Vehicle} />
          <Match pattern="/vehicles/new" component={VehicleForm} />
          <Match pattern="/vehicles/:id/edit" component={VehicleForm} />

          <Match exactly pattern="/services" component={Services} />
          <Match pattern="/services/:id/show" component={Service} />
          <Match pattern="/services/new" component={ServiceForm} />
          <Match pattern="/services/:id/edit" component={ServiceForm} />

          {/* <Match exactly pattern="/vehicles/:id/repairs" component={Repairs} />
          <Match pattern="/vehicles/:id/repairs/:id/show" component={Repair} />
          <Match pattern="/vehicles/:id/repairs/new" component={RepairForm} />
          <Match pattern="/vehicles/:id/repairs/:id/edit" component={RepairForm} /> */}





          <Match pattern="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
})
//       <Vehicle />
//     )
//   }
// })
module.exports = App
