import React from 'react'
import styled from 'styled-components'

import ContactForm from './contactForm'
import { Section, SectionHeader, Paragraph } from '../../utils/UI'
import { useSiteContent } from '../../utils/hooks'

const Wrapper = styled.div`
  padding: 2% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Contact = () => {
  const { contactText } = useSiteContent()

  return (
    <>
      <SectionHeader text='Contacto' />
      <Wrapper>
        <Section
          margin={2}
          style={{ maxWidth: 600 }}
        >
          <Paragraph
            dangerouslySetInnerHTML={{ __html: contactText.md.html }}
          />
          <ContactForm />
        </Section>
      </Wrapper>
    </>
  )
}

export default Contact
