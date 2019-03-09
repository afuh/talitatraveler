import React from 'react'
import PropTypes from 'prop-types'

import Hero from './hero'
import { Section, PostsGrid } from '../../utils/UI'

const scrollId = 'post-grid'

const Home = ({ data: { posts: { edges, totalCount } } }) => (
  <Section>
    <Hero scrollId={scrollId}/>
    <h2
      style={{
        textAlign: 'center',
        fontSize: '2.9rem'
      }}
      id={scrollId}
    >
      Últimos posts
    </h2>
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
