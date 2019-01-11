import React from 'react'
import PropTypes from 'prop-types'

import { MailForm, LatestsPosts } from './sections'
import { Section } from '../../utils/UI'

const Home = ({ data: { posts: { edges } } }) => (
  <Section>
    <LatestsPosts edges={edges} />
    <MailForm />
  </Section>
)

Home.propTypes = {
  data: PropTypes.object.isRequired
}

export default Home
