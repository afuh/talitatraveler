import React from 'react'
import PropTypes from 'prop-types'

import { MailForm, LatestsPosts, Search } from './sections'
import { Section } from '../../utils/UI'

const Home = ({ data: { posts: { edges, totalCount } } }) => (
  <Section>
    <Search />
    <LatestsPosts
      edges={edges}
      totalCount={totalCount}
    />
    <MailForm />
  </Section>
)

Home.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object
  }).isRequired
}

export default Home
