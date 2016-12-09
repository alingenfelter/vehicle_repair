const React = require('react')
const {Link} = require('react-router')
module.exports = service =>
  <li key={service.id}>
    <Link to={`/services/${service.id}/show`}>
      {service.name}
    </Link>
  </li>
