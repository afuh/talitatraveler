import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Container as _Container, CategoryList, PostImage } from '../../utils/UI'
import { PostStyles } from '../../utils/style'

import Header from './header'
import RelatedPosts from './relatedPosts'

const Wrapper = styled.div`
  .post-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .gatsby-image-wrapper {
    max-height: 70vh;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 1%, rgba(0, 0, 0, 0) 100%);
    }
  }
`

const Container = styled(_Container).attrs({
  as: 'article',
})`
  ${({ theme }) => css`
    width: 800px;
    background: ${theme.white};
    transform: translateY(-150px);
    padding-top: 48px;
    margin: 0;

    ${theme.media.phone(css`
      transform: none;
      max-width: none;
      padding: ${theme.spacing.mobile};
    `)}
  `}
`

const Post = ({ post, relatedPosts }) => {
  return (
    <Wrapper>
      <PostImage image={post.headerImage} />
      <div className="post-wrapper">
        <Container>
          <Header post={post} />
          <PostStyles whiteSpace={post.whiteSpace} dangerouslySetInnerHTML={{ __html: post.content.md.html }} />
          <footer>
            <CategoryList categories={post.categories} />
            <RelatedPosts related={relatedPosts} post={post} />
          </footer>
        </Container>
      </div>
    </Wrapper>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  relatedPosts: PropTypes.array.isRequired,
}

export default Post
