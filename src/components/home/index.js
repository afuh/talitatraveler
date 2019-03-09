import React from 'react'
import PropTypes from 'prop-types'

import { Section, PostsGrid } from '../../utils/UI'

const Home = ({ data: { posts: { edges, totalCount } } }) => (
  <Section>
    <PostsGrid
      totalCount={totalCount}
      posts={edges}
    />
  </Section>
)

Home.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object
  }).isRequired
}

export default Home
