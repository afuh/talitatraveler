import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard } from '../../utils/UI'

const Wrapper = styled.div`
  .posts {
    display: flex;
    justify-content: space-between;
    gap: 8px;

    ${({ theme }) =>
      theme.media.mobile(css`
        flex-direction: column;
      `)}
  }
`

const RelatedPosts = ({ post, related }) => {
  const staticRelated = post.suggestions || []
  const suggestions = [...staticRelated, ...related].filter((post) => post && post)

  return (
    <Wrapper>
      <h3>Posts relacionados</h3>
      <div className="posts">
        {suggestions.map(
          (suggestedPost, i) => i < 3 && <PostCard small height={240} key={suggestedPost.slug} post={suggestedPost} />,
        )}
      </div>
    </Wrapper>
  )
}

RelatedPosts.propTypes = {
  post: PropTypes.object.isRequired,
  related: PropTypes.array.isRequired,
}

export default RelatedPosts
