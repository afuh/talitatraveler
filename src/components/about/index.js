import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import ContactForm from './contactForm'
import { media } from '../../utils/style'
import { SocialIcon } from '../../utils/UI/icons'

const Wrapper = styled.div`
  display: flex;

  ${media.phone(css`
    display: block;
  `)}
`

const Description = styled.div`
  white-space: pre-line;
`

const IconsWrapper = styled.div`
  display: flex;
`

const AboutSection = ({ author }) => (
  <div style={{ marginRight: 20 }}>
    <h1>{author.name}</h1>
    <Description dangerouslySetInnerHTML={{ __html: author.about.md.html }}/><br/>
    <p>Podés mandarme un <a href={`mailto:${author.contact.mail}`}>mail</a></p>
    <IconsWrapper>
      {author.contact.social.map(icon => (
        <SocialIcon
          key={icon.name}
          href={icon.url}
          name={icon.name}
        />
      ))}
    </IconsWrapper>
  </div>
)

AboutSection.propTypes = {
  author: PropTypes.object.isRequired
}


const About = ({ author }) => (
  <Wrapper>
    <div style={{ flex: 1 }}>
      <AboutSection author={author}/>
    </div>
    <div style={{ flex: 1 }}>
      <ContactForm />
    </div>
  </Wrapper>
)

About.propTypes = {
  author: PropTypes.object.isRequired
}

export default About
