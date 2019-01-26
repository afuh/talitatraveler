import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from 'disqus-react'
import styled, { css } from 'styled-components'

import { Section, SocialLinks } from '../../utils/UI'
import { fontSize, media } from '../../utils/style'

import HeaderImage from './headerImage'
import Header from './header'
import RelatedPosts from './relatedPosts'
import Categories from './categories'

const Content = styled(Section)`
  background: ${({ theme }) => theme.white};
  transform: translateY(-150px);
  padding: 5%;

  ${media.phone(css`
    transform: none;
    max-width: none;
    margin: 0;
  `)}
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
  padding-bottom: 40px;
  position: relative;
  border-bottom: 1px solid #f8f8f8;

  p {
    white-space: ${({ whiteSpace }) => whiteSpace ? "pre-line" : "normal"}
  }

  ol, ul {
    margin: 0;
  }

  p, li {
    ${fontSize(1.6)};
    text-align: justify;

    ${media.phone(css`
      text-align: left;
    `)}

    strong {
      font-weight: 900;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    text-align: justify;
    font-weight: 800;
    margin-bottom: 3.0rem;
    margin-top: 6.0rem;

    ${media.phone(css`
      text-align: left;
    `)}
  }

  sup {
    margin: 0 0.2rem;
    line-height: 1;
  }

  .footnote-backref {
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }

  figure {
    margin: 0;
    figcaption {
      font-style: italic;
      font-size: 1.4rem;
      text-align: center;
      color: ${({ theme }) => theme.lightGray};
    }
  }

  .footnotes {
    margin-top: 24px;
    ol {
      margin-top: 14px;
    }
    li {
      margin-bottom: 12px;
      font-size: 1.4rem;
      p {
        font-size: 1.4rem;
        display: inline;
      }
    }
  }

  blockquote {
    color: ${({ theme }) => theme.lightGray};
    border-left: 2px solid rgba(0,0,0,0.13);
    padding-left: 2rem;
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
        <Article
          whiteSpace={post.whiteSpace}
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
        </Footer>
        {process.env.NODE_ENV !== 'development' && <DiscussionEmbed {...disqusProps}/>}
      </Content>
    </>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  relatedPosts: PropTypes.array.isRequired
}

export default Post
