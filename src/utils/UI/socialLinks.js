import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, graphql } from "gatsby"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'

import { SocialIcon } from '../../utils/UI/icons'

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

      return (
        <Wrapper>
          <FacebookShareButton
            url={url}
            quote={post.content.md.excerpt}
          >
            <SocialIcon
              as='div'
              name='Facebook'
            />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            title={post.title}
            hashtags={post.categories}
          >
            <SocialIcon
              as='div'
              name='Twitter'
            />
          </TwitterShareButton>
          <WhatsappShareButton
            url={url}
            title={post.title}
          >
            <SocialIcon
              as='div'
              name='Whatsapp'
            />
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
