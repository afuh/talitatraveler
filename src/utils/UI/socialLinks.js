import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin: 2% 2% 2% 0;
    cursor: pointer;
  }
`

export const SocialLinks = ({ post }) => (
  <StaticQuery
    query={query}
    render={({ site: { siteMetadata: { siteUrl } } }) => {
      const url = siteUrl + "/" + post.slug
      const size = 32

      return (
        <Wrapper>
          <FacebookShareButton
            url={url}
            quote={post.content.md.excerpt}
          >
            <FacebookIcon size={size} round/>
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            title={post.title}
            hashtags={post.categories}
          >
            <TwitterIcon size={size} round/>
          </TwitterShareButton>
          <WhatsappShareButton
            url={url}
            title={post.title}
          >
            <WhatsappIcon size={size} round/>
          </WhatsappShareButton>
        </Wrapper>
      )
    }}
  />

)

SocialLinks.propTypes = {
  post: PropTypes.object.isRequired
}

const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
