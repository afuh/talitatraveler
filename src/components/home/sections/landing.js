import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'

const Landing = ({ frontmatter, html }) => (
  <div>
    <h2 dangerouslySetInnerHTML={{ __html: frontmatter.title }}/>
    <GatsbyImg
      style={{ maxWidth: 600 }}
      fluid={frontmatter.image.childImageSharp.fluid}
      alt={frontmatter.title}
    />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

Landing.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired
}

export default Landing
