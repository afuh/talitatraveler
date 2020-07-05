import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { PostsGrid, Divider } from '../../utils/UI'
import { edgesToNode } from '../../utils/helpers'
import Pagination from './pagination'

const Posts = ({ data: { posts } }) => (
  <>
    <Divider text="Posts" />
    <PostsGrid posts={edgesToNode(posts.edges)} />
    <Pagination
      onChange={(page) => navigate(`/posts/${page}`)}
      showSizeChanger={false}
      current={posts.pageInfo.currentPage}
      total={posts.totalCount}
      defaultPageSize={posts.pageInfo.perPage}
      showLessItems
    />
  </>
)

Posts.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object,
  }).isRequired,
}

export default Posts
