import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'

const headerImage = ({ post }) => (
  <GatsbyImg
    style={{ maxHeight: '84vh' }}
    fluid={post.headerImage.fluid}
    alt={post.headerImage.description}
    title={post.headerImage.description}
  />
)

headerImage.propTypes = {
  post: PropTypes.object.isRequired
}

export default headerImage
