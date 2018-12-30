import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import GatsbyImg from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'
import styled, { css } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../utils/seo'
import { Section, SocialLinks } from '../utils/UI'

const Wrapper = styled.div`
  ${({ poesia }) => poesia && css`
    white-space: pre;
  `};
`

const Post = ({ data: { post } }) => {
  const disqusProps = {
    shortname: process.env.DISQUSS,
    config: {
      identifier : post.id,
      title : post.title
    }
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.content.md.excerpt}
        pathname={"/" + post.slug}
        image={{
          url: post.headerImage.file.url,
          contentType: post.headerImage.file.contentType,
          size: post.headerImage.file.details.image
        }}
      />
      <Section>
        <SocialLinks post={post} />
        <h1>{post.title}</h1>
        <h2>{post.subTitle}</h2>
        <GatsbyImg
          fluid={post.headerImage.fluid}
          alt={post.headerImage.description}
          title={post.headerImage.description}
        />
        <Wrapper
          poesia={post.categories.filter(i => i.match(/poes(í|i)a/i)).length}
          dangerouslySetInnerHTML={{ __html: post.content.md.html }}
        />
        {process.env.NODE_ENV === 'production' && <DiscussionEmbed {...disqusProps}/>}
      </Section>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired
}

export default Post

export const query = graphql`
  query POST_TEMPLATE_QUERY ($slug: String!) {
    post: contentfulPost(slug: { eq: $slug } ) {
      id
      title
      subTitle
      slug
      categories
      headerImage {
        description
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        file {
          url
          contentType
          details {
            image {
              width
              height
            }
          }
        }
      }
      content {
        md: childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`
