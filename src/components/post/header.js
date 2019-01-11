import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import { Link } from 'gatsby'

const Header = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <Link to='/sobre-mi'>{post.author.name}</Link>
    <p>{post.date || post.createdAt}</p>
    <GatsbyImg
      fluid={post.headerImage.fluid}
      alt={post.headerImage.description}
      title={post.headerImage.description}
    />
  </div>
)

Header.propTypes = {
  post: PropTypes.object.isRequired
}

export default Header
