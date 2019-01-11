import React from 'react'
import PropTypes from 'prop-types'

import { PostCard } from '../../utils/UI'

const RelatedPosts = ({ post, related }) => {
  const staticRelated= post.suggestions || []
  const suggestions = [...staticRelated, ...related].filter(post => post && post)

  return (
    <div>
      <h2>Post relacionados</h2>
      {
        suggestions.map((post, i) => i < 3 && (
          <PostCard
            key={post.slug}
            node={post}
          />
        ))
      }
    </div>
  )
}

RelatedPosts.propTypes = {
  post: PropTypes.object.isRequired,
  related: PropTypes.array.isRequired
}

export default RelatedPosts
