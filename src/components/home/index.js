import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Hero from './hero'
import { Section, PostsGrid } from '../../utils/UI'

const scrollId = 'post-grid'

const LatestPosts = styled.div`
  .title {
    padding: 80px 0;
    margin: 0;
    text-align: center;
    font-size: 3rem;
  }
`

const Home = ({ data: { posts: { edges, totalCount } } }) => (
  <Section>
    <Hero scrollId={scrollId}/>
    <LatestPosts>
      <h2
        className='title'
        id={scrollId}
        >
          Últimos posts
        </h2>
        <PostsGrid
          totalCount={totalCount}
          posts={edges}
        />
    </LatestPosts>
  </Section>
)

Home.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object
  }).isRequired
}

export default Home
