import React from 'react'
import PropTypes from 'prop-types'

import Hero from './hero'
import { Section, PostsGrid, Separator } from '../../utils/UI'

const scrollId = 'post-grid'

const Home = ({ data: { posts: { edges, totalCount } } }) => (
  <Section>
    <Hero scrollId={scrollId}/>
      <Separator
        id={scrollId}
        text='Últimos posts'
      />
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
