import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from 'disqus-react'
import styled, { css } from 'styled-components'

import { Section, SocialLinks } from '../../utils/UI'
import { media } from '../../utils/style'

import HeaderImage from './headerImage'
import Header from './header'
import RelatedPosts from './relatedPosts'
import Categories from './categories'

const Content = styled(Section)`
  background: ${({ theme }) => theme.white};
  transform: translateY(-150px);
  padding: 60px;

  .sub-title {
    padding-bottom: 10px;
  }
`

const Footer = styled.footer`
  padding: 0 0 80px;

  .social-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
`

const Article = styled.article`
  white-space: pre-line;
  padding-bottom: 20px;
  position: relative;
  border-bottom: 1px solid #f8f8f8;

  p {
    text-align: justify;

    ${media.phone(css`
      text-align: left;
      font-size: 1.9rem;
    `)}
  }
`

const Post = ({ post, relatedPosts }) => {
  const disqusProps = {
    shortname: process.env.GATSBY_DISQUSS,
    config: {
      identifier : post.id,
      title : post.title
    }
  }

  return (
    <>
      <HeaderImage post={post} />
      <Content margin={6}>
        <Header post={post} />
        {post.subTitle &&
          <h2 className='sub-title'>
            {post.subTitle}
          </h2>
        }
        <Article
          dangerouslySetInnerHTML={{ __html: post.content.md.html }}
        />
        <Footer>
          <div className='social-wrapper'>
            <Categories categories={post.categories}/>
            <SocialLinks post={post} />
          </div>
          <RelatedPosts
            related={relatedPosts}
            post={post}
          />
          {process.env.NODE_ENV !== 'development' && <DiscussionEmbed {...disqusProps}/>}
        </Footer>
      </Content>
    </>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  relatedPosts: PropTypes.array.isRequired
}

export default Post
