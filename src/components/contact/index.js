import React from 'react'
import styled from 'styled-components'

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
        </Section>
      </Wrapper>
    </>
  )
}

export default Contact
