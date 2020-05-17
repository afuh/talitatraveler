import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from 'disqus-react'
import styled, { css } from 'styled-components'

import { Container as _Container, SocialLinks, CategoryList, PostImage } from '../../utils/UI'
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
    width: 1100px;
    background: ${theme.white};
    transform: translateY(-150px);
    padding-top: ${theme.spacing.mobile};%;
    margin: 0;

    ${theme.media.phone(css`
      transform: none;
      max-width: none;
      padding: ${theme.spacing.mobile};
    `)}
  `}
`

const Footer = styled.footer`
  margin-bottom: 80px;

  .social-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
`

const Post = ({ post, relatedPosts }) => {
  const disqusProps = {
    shortname: process.env.GATSBY_DISQUSS,
    config: {
      identifier: post.id,
      title: post.title,
    },
  }

  return (
    <Wrapper>
      <PostImage image={post.headerImage} placeholderHeight="40vh" />
      <div className="post-wrapper">
        <Container>
          <Header post={post} />
          <PostStyles whiteSpace={post.whiteSpace} dangerouslySetInnerHTML={{ __html: post.content.md.html }} />
          <Footer>
            <div className="social-wrapper">
              <CategoryList categories={post.categories} />
              <SocialLinks post={post} />
            </div>
            <RelatedPosts related={relatedPosts} post={post} />
          </Footer>
          {process.env.NODE_ENV !== 'development' && <DiscussionEmbed {...disqusProps} />}
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
