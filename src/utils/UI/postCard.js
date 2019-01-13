import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'

import { timeToRead } from '../helpers'
import { fontSize } from '../style'

const Article = styled.article`
  display: flex;

  border-bottom: 1px solid lightgray;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: rgba(27, 37, 64, 0.2) 0px 4px 4px 0px;

  :hover {
    box-shadow: rgba(27, 37, 64, 0.5) 0px 4px 4px 0px;
  }

  transition: all .3s ease;

  .content {
    flex: 1;
  }

  ${({ mini }) => mini && css`
    padding: 4px;
    box-shadow: none;
    border: none;

    h2 {
      ${fontSize(1.6)}
    }

    :hover {
      box-shadow: none;
      opacity: 0.8;
    }
  `};
`

const LinkWrapper = styled(Link)`
  flex: 1;
  flex-basis: 33%;
  color: ${({ theme }) => theme.black};

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.mainColor};
    text-decoration: none;
  }
`

const Big = ({ node }) => (
  <Article>
    <div className='content'>
      <h2>{node.title}</h2>
      <GatsbyImg
        style={{ height: 200, maxWidth: 800 }}
        fluid={node.headerImage.fluid}
        alt={node.headerImage.description}
        title={node.headerImage.description}
      />
      <div>
        <p>{node.date || node.createdAt} - {timeToRead(node.content.md.timeToRead)}</p>
        <p>{node.content.md.excerpt}</p>
      </div>
    </div>
  </Article>
)

Big.propTypes = {
  node: PropTypes.object.isRequired
}

const Small = ({ node }) => (
  <Article mini>
    <div className='content'>
      <GatsbyImg
        style={{ height: 200, maxWidth: 800 }}
        fluid={node.headerImage.fluid}
        alt={node.headerImage.description}
        title={node.headerImage.description}
      />
      <h2>{node.title}</h2>
    </div>
  </Article>
)

Small.propTypes = {
  node: PropTypes.object.isRequired
}

export const PostCard = ({ node, mini }) => (
  <LinkWrapper
    to={node.slug}
  >
    {
      mini ?
        <Small node={node} /> :
        <Big node={node} />
    }
  </LinkWrapper>
)

PostCard.propTypes = {
  node: PropTypes.object.isRequired,
  mini: PropTypes.bool
}

PostCard.defaultProps = {
  mini: false
}
