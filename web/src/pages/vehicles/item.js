const React = require('react')
const {Link} = require('react-router')
module.exports = vehicle =>
   <li key={vehicle.id}>
    <Link to={`/vehicles/${vehicle.id}/show`}>
      {vehicle.name}
    </Link>
  </li>
