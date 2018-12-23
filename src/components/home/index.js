import React from 'react'
import PropTypes from 'prop-types'

import { Section, PostCard } from '../../utils/UI'

const Home = ({ data: { posts: { edges } } }) => (
  <Section>
    {edges.map(({ node }) => (
      <PostCard
        key={node.id}
        node={node}
      />
    ))}
  </Section>
)

Home.propTypes = {
  data: PropTypes.object.isRequired
}

export default Home
