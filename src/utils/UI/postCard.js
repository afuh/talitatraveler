import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'

import { timeToRead } from '../helpers'
import { fontSize, media } from '../style'

const Article = styled.div`
  display: flex;

  box-shadow: rgba(27, 37, 64, 0.2) 0px 4px 4px 0px;

  :hover {
    box-shadow: rgba(27, 37, 64, 0.5) 0px 4px 4px 0px;
  }

  .content {
    position: relative;
    flex: 1;
  }

  ${({ mini }) => mini && css`
    padding: 4px;
    box-shadow: none;
    border: none;

    :hover {
      box-shadow: none;
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

  ${media.mobile(css`
    flex-basis: 50%;
  `)}
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;

  background: rgba(0, 0, 0, 0.5);

  &:hover,
  &:active,
  &:focus {
    background: rgba(0, 0, 0, 0.2);

    h2 {
      opacity: 0;
    }
  }

  transition: ${({ theme }) => theme.transition};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.white};
  text-align: center;
  opacity: 1;
  ${fontSize(2.6)};

  transition: ${({ theme }) => theme.transition};
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
      <Overlay>
        <Title>{node.title}</Title>
      </Overlay>
      <GatsbyImg
        style={{ height: 240 }}
        fluid={node.headerImage.fluid}
        alt={node.headerImage.description}
        title={node.headerImage.description}
      />
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
