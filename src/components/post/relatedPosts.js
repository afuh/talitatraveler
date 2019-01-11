import React from 'react'
import PropTypes from 'prop-types'

import { PostCard } from '../../utils/UI'

const RelatedPosts = ({ post }) => (
  <div>
    <h2>Post relacionados</h2>
    {post.suggestions &&
        post.suggestions.map(post => (
          <PostCard
            key={post.slug}
            node={post}
          />
        ))
    }
  </div>
)

RelatedPosts.propTypes = {
  post: PropTypes.object.isRequired
}

export default RelatedPosts
