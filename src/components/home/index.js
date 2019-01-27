import React from 'react'
import PropTypes from 'prop-types'

import { MailForm } from './sections'
import { Section, PostsGrid } from '../../utils/UI'

const Home = ({ data: { posts: { edges, totalCount } } }) => (
  <Section margin={2}>
    <PostsGrid
      totalCount={totalCount}
      posts={edges}
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
