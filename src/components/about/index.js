import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Section } from '../../utils/UI'

const Description = styled.div`
  white-space: pre-line;
`

const About = ({ author }) => (
  <Section margin={2}>
    <div style={{ marginRight: 20, paddingBottom: 50 }}>
      <h1>{author.name}</h1>
      <Description dangerouslySetInnerHTML={{ __html: author.bio.md.html }}/>
      <Link to='/contacto'>
        contacto
      </Link>
    </div>
  </Section>
)

About.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.object
  }).isRequired
}

export default About
