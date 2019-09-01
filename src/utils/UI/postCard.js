import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import { media } from '../style'

const GatsbyImg = styled(Img)`
  height: ${p => p.height}px;

  ${media.phone(css`
    height: 40vh;
  `)}
`

const Wrapper = styled(Link)`
  flex: 1;
  flex-basis: 33%;

  ${p => p.gutter && css`
    margin: 0 ${p.gutter/2}px;

    ${media.mobile(css`
      margin: ${p.gutter/2}px 0;
    `)}
  `}

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

  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};

  h2, h3 {
    text-align: center;
    margin: 0;
  }

  h2 {
    font-size: ${p => p.small ? 2.2 : 3}rem;
    font-weight: 800;
  }

  h3 {
    font-size: 1.6rem;
    transition: ${({ theme }) => theme.transition};
    font-weight: 700;
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

export const PostCard = ({ post, small, gutter, height }) => (
  <Wrapper
    to={"/" + post.slug}
    gutter={gutter}
  >
    <Article>
      <div className='content'>
        <Overlay
          small={small}
        >
          <h2>{post.title}</h2>
          <h3>{post.subTitle}</h3>
        </Overlay>
        <GatsbyImg
          height={height}
          fluid={post.headerImage.fluid}
          alt={post.headerImage.description}
          title={post.headerImage.description}
        />
      </div>
    </Article>
  </Wrapper>
)

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  small: PropTypes.bool,
  gutter: PropTypes.number,
  height: PropTypes.number
}

PostCard.defaultProps = {
  small: false,
  height: 300
}
