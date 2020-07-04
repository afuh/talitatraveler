import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import 'antd/lib/pagination/style/index.css'

import { PostsGrid, Divider } from '../../utils/UI'
import { edgesToNode } from '../../utils/helpers'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`

const Posts = ({ data: { posts } }) => (
  <>
    <Divider text="Posts" />
    <PostsGrid posts={edgesToNode(posts.edges)} />
    <PaginationWrapper>
      <Pagination
        onChange={(page) => navigate(`/posts/${page}`)}
        showSizeChanger={false}
        current={posts.pageInfo.currentPage}
        total={posts.totalCount}
        defaultPageSize={posts.pageInfo.perPage}
        showLessItems
      />
    </PaginationWrapper>
  </>
)

Posts.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object,
  }).isRequired,
}

export default Posts
