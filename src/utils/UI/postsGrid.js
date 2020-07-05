import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard } from './'

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${theme.media.phone(css`
      flex-direction: column;
    `)}
  `}
`

export const PostsGrid = ({ posts }) => {
  return (
    <section>
      <Wrapper>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Wrapper>
    </section>
  )
}

PostsGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}
