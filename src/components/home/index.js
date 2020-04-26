import React from 'react'
import PropTypes from 'prop-types'

import Hero from './hero'
import { PostsGrid, Divider } from '../../utils/UI'

const Home = ({ data: { posts } }) => (
  <>
    <Hero />
    <Divider text="Últimos posts" />
    <PostsGrid totalCount={posts.totalCount} edges={posts.edges} />
  </>
)

Home.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object,
  }).isRequired,
}

export default Home
