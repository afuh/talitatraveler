import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard } from '../../utils/UI'
import { media } from '../../utils/style'

const Wrapper = styled.div`
  border-bottom: 1px solid #f8f8f8;

  .posts {
    display: flex;
    justify-content: space-between;

    ${media.phone(css`
      flex-direction: column;
    `)}
  }
`

const RelatedPosts = ({ post, related }) => {
  const staticRelated = post.suggestions || []
  const suggestions = [...staticRelated, ...related].filter(post => post && post)

  return (
    <Wrapper>
      <h3>Posts relacionados</h3>
      <div className='posts'>
        {
          suggestions.map((post, i) => i < 3 && (
            <PostCard
              mini
              key={post.slug}
              node={post}
            />
          ))
        }
      </div>
    </Wrapper>
  )
}

RelatedPosts.propTypes = {
  post: PropTypes.object.isRequired,
  related: PropTypes.array.isRequired
}

export default RelatedPosts
