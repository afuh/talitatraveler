import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import ContactForm from './contactForm'
import { media } from '../../utils/style'

const Wrapper = styled.div`
  display: flex;

  ${media.phone(css`
    display: block;
  `)}
`

const Description = styled.div`
  white-space: pre-line;
`

const findIcon = name => {
  const Component = require("react-icons/fa")['Fa' + name]
  return <Component />
}

const Icon = styled.a`
  border: none;
  margin: 20px 20px 20px 0;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.black};

  display: flex;
  align-items: center;

  :hover {
    color: ${({ theme }) => theme.mainColor};
  }

  transition: color .3s;
`

const SocialIcons = styled.div`
  display: flex;
`


const AboutSection = ({ author }) => (
  <div style={{ marginRight: 20 }}>
    <h1>{author.name}</h1>
    <Description dangerouslySetInnerHTML={{ __html: author.about.md.html }}/><br/>
    <p>Podés mandarme un <a href={`mailto:${author.contacto.mail}`}>mail</a></p>
    <SocialIcons>
      {author.contact.social.map(icon => (
        <Icon
          key={icon.name}
          href={icon.url}
        >
          {findIcon(icon.name)}
        </Icon>
      ))}
    </SocialIcons>
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
