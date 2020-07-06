import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled, { css } from 'styled-components'

const Placeholder = styled.div`
  ${({ theme, height }) => css`
    background: ${theme.gray};
    height: ${height};
    overflow: hidden;
    border: 1px solid ${theme.lightGray};
  `};
`

export const PostImage = ({ image, placeholderHeight, ...props }) => {
  if (process.env.NODE_ENV === 'production') {
    return <Image fluid={image.fluid} alt={image.description} title={image.description} {...props} />
  }

  return image ? (
    <Image fluid={image.fluid} alt={image.description} title={image.description} {...props} />
  ) : (
    <Placeholder height={placeholderHeight} />
  )
}

PostImage.propTypes = {
  placeholderHeight: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object,
    description: PropTypes.string,
  }),
}

PostImage.defaultProps = {
  placeholderHeight: '70vh',
}
