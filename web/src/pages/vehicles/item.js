const React = require('react')
const {Link} = require('react-router')
module.exports = vehicle =>
   <li key={vehicle.id}>
    <Link to={`/vehicles/${vehicle.id}/show`} className="f3 measure-wide">
      {vehicle.name}, {vehicle.year} {vehicle.make} {vehicle.model}
    </Link>
  </li>
