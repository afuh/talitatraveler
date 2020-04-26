import React from 'react'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

import { Container as _Container, Paragraph, Divider } from '../../utils/UI'
import { useSiteContent } from '../../utils/hooks'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled(_Container)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    .avatar {
      flex-basis: 30%;
      margin-left: 60px;
    }

    .text {
      flex-basis: 70%;
    }

    ${theme.media.mobile(css`
      flex-direction: column;

      .avatar {
        width: 100%;
        margin: 60px 0;
      }
    `)}
  `}
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

const About = () => {
  const { authorBio, authorAvatars } = useSiteContent()
  const makeClassName = (avatar) => `avatar${avatar.title.match(/avatar - a/i) ? '-b' : '-a'}`

  return (
    <>
      <Divider text="Sobre mí" />
      <Wrapper>
        <Container>
          <Paragraph className="text" dangerouslySetInnerHTML={{ __html: authorBio.md.html }} />
          <AvatarWrapper>
            {authorAvatars.map((avatar) => (
              <GatsbyImg
                key={avatar.title}
                className={makeClassName(avatar)}
                fluid={avatar.fluid}
                alt={avatar.description}
              />
            ))}
          </AvatarWrapper>
        </Container>
      </Wrapper>
    </>
  )
}

export default About
