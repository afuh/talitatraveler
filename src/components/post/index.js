import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from 'disqus-react'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

import { Section, SocialLinks, CategoryList } from '../../utils/UI'
import { media, Article } from '../../utils/style'

import Header from './header'
import RelatedPosts from './relatedPosts'

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

const HeaderImage = ({ image }) => (
  <GatsbyImg
    style={{ maxHeight: '84vh' }}
    fluid={image.fluid}
    alt={image.description}
    title={image.description}
  />
)

HeaderImage.propTypes = {
  image: PropTypes.object.isRequired
}

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
      <HeaderImage image={post.headerImage} />
      <Content margin={6}>
        <Header post={post} />
        <Article
          whiteSpace={post.whiteSpace}
          dangerouslySetInnerHTML={{ __html: post.content.md.html }}
        />
        <Footer>
          <div className='social-wrapper'>
            <CategoryList categories={post.categories}/>
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
