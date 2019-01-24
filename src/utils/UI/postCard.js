import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'

import { fontSize, media } from '../style'

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

const Article = styled.article`
  display: flex;
  padding: 4px;

  .content {
    position: relative;
    flex: 1;
  }
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

export const PostCard = ({ node }) => (
  <LinkWrapper
    to={node.slug}
  >
    <Article>
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
  </LinkWrapper>
)

PostCard.propTypes = {
  node: PropTypes.object.isRequired
}
