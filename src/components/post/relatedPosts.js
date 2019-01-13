import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard } from '../../utils/UI'
import { media } from '../../utils/style'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.phone(css`
    flex-direction: column;
  `)}
`

const RelatedPosts = ({ post, related }) => {
  const staticRelated = post.suggestions || []
  const suggestions = [...staticRelated, ...related].filter(post => post && post)

  return (
    <div>
      <h2>Posts relacionados</h2>
      <Wrapper>
        {
          suggestions.map((post, i) => i < 3 && (
            <PostCard
              mini
              key={post.slug}
              node={post}
            />
          ))
        }
      </Wrapper>
    </div>
  )
}

RelatedPosts.propTypes = {
  post: PropTypes.object.isRequired,
  related: PropTypes.array.isRequired
}

export default RelatedPosts
