import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { PostsGrid, Divider } from '../../utils/UI'
import { edgesToNode } from '../../utils/helpers'
import Pagination from './pagination'
import Hero from './hero'

const Home = ({ data: { posts } }) => (
  <>
    <Hero />
    <Divider text="Últimos posts" />
    <PostsGrid posts={edgesToNode(posts.edges)} />
    <Pagination
      onChange={(page) =>
        navigate(page === 1 ? '/' : `/posts/${page}`, {
          state: {
            disableScrollUpdate: true,
          },
        })
      }
      current={posts.pageInfo.currentPage}
      total={posts.totalCount}
      defaultPageSize={posts.pageInfo.perPage}
      showPrevNextJumpers={false}
      showSizeChanger={false}
    />
  </>
)

Home.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object,
  }).isRequired,
}

export default Home
