import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ContactForm from './contactForm'
import { SocialIcon } from '../../utils/UI/icons'
import { Section } from '../../utils/UI'

const IconsWrapper = styled.div`
  display: flex;
`

const Contact = ({ contact }) => (
  <Section margin={2}>
      <h2>Contacto</h2>
      <p>Podés mandarme un <a href={`mailto:${contact.mail}`}>mail</a></p>
      <IconsWrapper>
        {contact.social.map(icon => (
          <SocialIcon
            key={icon.name}
            href={icon.url}
            name={icon.name}
          />
        ))}
      </IconsWrapper>
      <ContactForm />
  </Section>
)

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact
