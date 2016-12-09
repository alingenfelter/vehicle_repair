const React = require('react')
const {Link} = require('react-router')
module.exports = category =>
  <li key={category.id}>
    <Link to={`/categories/${category.id}/show`}>
      {category.name}
    </Link>
  </li>
