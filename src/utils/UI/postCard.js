import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import { PostImage as _PostImage } from './postImage'

const Article = styled.article`
  display: flex;
  height: 100%;

  .content {
    position: relative;
    flex: 1;
  }
`

const PostImage = styled(_PostImage)`
  ${({ theme, height }) => css`
    height: ${height ? height + 'px' : '50vh'};

    ${theme.media.phone(css`
      height: 40vh;
    `)}
  `}
`

const Wrapper = styled(Link)`
  flex: 1;
  flex-basis: 33%;
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

    background: rgba(0, 0, 0, 0.35);
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

export const PostCard = ({ post, small, height }) => (
  <Wrapper to={'/' + post.slug}>
    <Article>
      <div className="content">
        <Overlay small={small}>
          <h2>{post.title}</h2>
          <h3>{post.subTitle}</h3>
        </Overlay>
        <PostImage image={post.headerImage} height={height} placeholderHeight={small ? '300px' : '50vh'} />
      </div>
    </Article>
  </Wrapper>
)

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  small: PropTypes.bool,
  height: PropTypes.number,
}

PostCard.defaultProps = {
  small: false,
}
