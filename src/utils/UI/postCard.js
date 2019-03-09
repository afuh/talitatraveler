import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'

import { media } from '../style'

const Wrapper = styled(Link)`
  flex: 1;
  flex-basis: 33%;

  ${media.mobile(css`
    flex-basis: 50%;
  `)}
`

const Article = styled.article`
  display: flex;

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
  padding: 12px;
  z-index: 1;

  display: flex;
  justify-content: center;
  flex-direction: column;

  background: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.white};

  h2, h3 {
    text-align: center;
    margin: 0;
  }

  h2 {
    font-size: ${p => p.small ? 2.4 : 3.2}rem;
  }

  h3 {
    color: #cfd0d1;
    font-size: 1.4rem;
    transition: ${({ theme }) => theme.transition};
  }

  &:hover,
  &:active,
  &:focus {
    background: rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.white};

    h3 {
      opacity: 0;
    }

    h2 {
      text-shadow: 3px 3px 10px #3e3e3e70;
    }

  }

  transition: ${({ theme }) => theme.transition};
`

export const PostCard = ({ node, small }) => (
  <Wrapper to={"/" + node.slug}>
    <Article>
      <div className='content'>
        <Overlay
          small={small}
        >
          <h2>{node.title}</h2>
          <h3>{node.subTitle}</h3>
        </Overlay>
        <GatsbyImg
          style={{ height: 300 }}
          fluid={node.headerImage.fluid}
          alt={node.headerImage.description}
          title={node.headerImage.description}
        />
      </div>
    </Article>
  </Wrapper>
)

PostCard.propTypes = {
  node: PropTypes.object.isRequired,
  small: PropTypes.bool
}

PostCard.defaultProps = {
  small: false
}
