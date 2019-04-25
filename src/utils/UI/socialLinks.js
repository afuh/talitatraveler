import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'

import { SocialIcon } from '../../utils/UI/icons'
import { useSiteMeta } from '../../utils/hooks'

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin: 2% 2% 2% 0;
    cursor: pointer;
  }

  div[role='button'] {
    &:focus {
      outline: 0;
    }
  }
`

export const SocialLinks = ({ post }) => {
  const { siteUrl } = useSiteMeta()
  const url = siteUrl + "/" + post.slug

  return (
    <Wrapper>
      <FacebookShareButton
        url={url}
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
}

SocialLinks.propTypes = {
  post: PropTypes.object.isRequired
}
