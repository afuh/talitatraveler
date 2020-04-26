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
  padding: 5% 5% 0;

  ${media.phone(css`
    transform: none;
    max-width: none;
    margin: 0;
    padding: 5%;
  `)}
`

const Footer = styled.footer`
  .social-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
`

const Wrapper = styled.div`
  .gatsby-image-wrapper {
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

const HeaderImage = ({ image }) => (
  <Wrapper>
    <GatsbyImg style={{ maxHeight: '70vh' }} fluid={image.fluid} alt={image.description} title={image.description} />
  </Wrapper>
)

HeaderImage.propTypes = {
  image: PropTypes.object.isRequired,
}

const Post = ({ post, relatedPosts }) => {
  const disqusProps = {
    shortname: process.env.GATSBY_DISQUSS,
    config: {
      identifier: post.id,
      title: post.title,
    },
  }

  return (
    <>
      <HeaderImage image={post.headerImage} />
      <Content margin={6}>
        <Header post={post} />
        <Article whiteSpace={post.whiteSpace} dangerouslySetInnerHTML={{ __html: post.content.md.html }} />
        <Footer>
          <div className="social-wrapper">
            <CategoryList categories={post.categories} />
            <SocialLinks post={post} />
          </div>
          <RelatedPosts related={relatedPosts} post={post} />
        </Footer>
        {process.env.NODE_ENV !== 'development' && <DiscussionEmbed {...disqusProps} />}
      </Content>
    </>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  relatedPosts: PropTypes.array.isRequired,
}

export default Post
