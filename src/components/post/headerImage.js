import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 20px;
`

const headerImage = ({ post }) => (
  <Wrapper>
    <GatsbyImg
      style={{ maxHeight: '84vh' }}
      fluid={post.headerImage.fluid}
      alt={post.headerImage.description}
      title={post.headerImage.description}
    />
  </Wrapper>
)

headerImage.propTypes = {
  post: PropTypes.object.isRequired
}

export default headerImage
