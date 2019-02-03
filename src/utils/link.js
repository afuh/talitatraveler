import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, to, activeClassName, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string
}

export default Link
