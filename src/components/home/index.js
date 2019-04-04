import React from 'react'
import PropTypes from 'prop-types'

import Hero from './hero'
import { PostsGrid, Separator } from '../../utils/UI'

const scrollId = 'post-grid'

const Home = ({ data: { posts: { edges, totalCount } } }) => (
  <div>
    <Hero scrollId={scrollId} />
    <Separator
      id={scrollId}
      text='Últimos posts'
    />
    <PostsGrid
      totalCount={totalCount}
      posts={edges}
    />
  </div>
)

Home.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object
  }).isRequired
}

export default Home
