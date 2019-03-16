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
      <p>Podés mandarme un <a href={`mailto:${contact.email}`}>mail</a></p>
      <IconsWrapper>
        {contact.external.map(icon => {
          if (icon.name.match(/facebook|twitter/i)) {
            return (
              <SocialIcon
                key={icon.name}
                href={icon.url}
                name={icon.name}
              />
            )
          }
          return null
        })}
      </IconsWrapper>
      <ContactForm />
  </Section>
)

Contact.propTypes = {
  contact: PropTypes.shape({
    external: PropTypes.array,
    mail: PropTypes.string
  }).isRequired
}

export default Contact
