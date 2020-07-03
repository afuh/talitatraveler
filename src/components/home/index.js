import React from 'react'
import PropTypes from 'prop-types'

import Hero from './hero'
import { PostsGrid, Divider } from '../../utils/UI'
import { edgesToNode } from '../../utils/helpers'

const Home = ({ data: { posts } }) => (
  <>
    <Hero />
    <Divider text="Últimos posts" />
    <PostsGrid totalCount={posts.totalCount} posts={edgesToNode(posts.edges)} />
  </>
)

Home.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object,
  }).isRequired,
}

export default Home
