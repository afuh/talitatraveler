import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

import { Section, Paragraph } from '../../utils/UI'
import { useSiteContent } from '../../utils/hooks'

const Wrapper = styled.div`
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 0;
  }

  ${({ theme }) =>
    theme.media.mobile(css`
      margin-top: 40px;
    `)}
`

const Inner = styled.div`
  display: flex;
  align-items: center;

  .avatar {
    flex-basis: 30%;
    margin-left: 60px;
  }

  .text {
    flex-basis: 70%;
  }

  ${({ theme }) =>
    theme.media.mobile(css`
      flex-direction: column;

      .avatar {
        width: 100%;
        margin: 60px 0;
      }
    `)}
`

const AvatarWrapper = styled.div.attrs({
  className: 'avatar',
})`
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  max-width: 400px;

  .avatar-b {
    display: none;
  }

  &:hover {
    .avatar-a {
      display: none;
    }

    .avatar-b {
      display: block;
    }
  }
`

const Avatar = ({ avatars }) => {
  const makeClassName = (i) => `avatar${i.title.match(/avatar - a/i) ? '-a' : '-b'}`

  return (
    <AvatarWrapper>
      {avatars.map((avatar) => (
        <GatsbyImg key={avatar.title} className={makeClassName(avatar)} fluid={avatar.fluid} alt={avatar.description} />
      ))}
    </AvatarWrapper>
  )
}

Avatar.propTypes = {
  avatars: PropTypes.array.isRequired,
}

const About = () => {
  const { authorBio, authorAvatars } = useSiteContent()

  return (
    <>
      <Wrapper>
        <Section margin={2} style={{ maxWidth: 1400 }}>
          <Inner>
            <Paragraph className="text" dangerouslySetInnerHTML={{ __html: authorBio.md.html }} />
            <Avatar avatars={authorAvatars} />
          </Inner>
        </Section>
      </Wrapper>
    </>
  )
}

export default About
