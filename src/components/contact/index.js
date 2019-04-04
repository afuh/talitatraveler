import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ContactForm from './contactForm'
import { Section, SectionHeader, Paragraph } from '../../utils/UI'

const Wrapper = styled.div`
  padding: 2% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Contact = ({ contact }) => (
  <>
    <SectionHeader text='Contacto' />
    <Wrapper>
      <Section
        margin={2}
        style={{ maxWidth: 600 }}
      >
        <Paragraph
          dangerouslySetInnerHTML={{ __html: contact.text.md.html }}
        />
        <ContactForm />
      </Section>
    </Wrapper>
  </>
)

Contact.propTypes = {
  contact: PropTypes.shape({
    text: PropTypes.object
  }).isRequired
}

export default Contact
