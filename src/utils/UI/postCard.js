import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

const GatsbyImg = styled(Img)`
  ${({ theme, height }) => css`
    height: ${height}px;

    ${theme.media.phone(css`
      height: 40vh;
    `)}
  `}
`

const Wrapper = styled(Link)`
  ${({ theme, gutter }) => css`
    flex: 1;
    flex-basis: 33%;

    ${gutter &&
    css`
      margin: 0 ${gutter / 2}px;

      ${theme.media.mobile(css`
        margin: ${gutter / 2}px 0;
      `)}
    `}

    ${theme.media.mobile(css`
      flex-basis: 50%;
    `)}
  `}
`

const Article = styled.article`
  display: flex;

  .content {
    position: relative;
    flex: 1;
  }
`

const Overlay = styled.div`
  ${({ theme, small }) => css`
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
    color: ${theme.white};

    h2,
    h3 {
      text-align: center;
      margin: 0;
    }

    h2 {
      font-size: ${small ? 2.2 : 3}rem;
      font-weight: 800;
    }

    h3 {
      font-size: 1.6rem;
      transition: ${theme.transition};
      font-weight: 700;
    }

    &:hover,
    &:active,
    &:focus {
      background: rgba(0, 0, 0, 0.2);
      color: ${theme.white};

      h3 {
        opacity: 0;
      }

      h2 {
        text-shadow: 3px 3px 10px #3e3e3e70;
      }
    }

    transition: ${theme.transition};
  `}
`

export const PostCard = ({ post, small, gutter, height }) => (
  <Wrapper to={'/' + post.slug} gutter={gutter}>
    <Article>
      <div className="content">
        <Overlay small={small}>
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
  height: PropTypes.number,
}

PostCard.defaultProps = {
  small: false,
  height: 300,
}
