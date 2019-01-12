import React from 'react'
import PropTypes from 'prop-types'

import { PostCard, MoreButton } from '../../../utils/UI'
import { withPostCounter } from '../../../utils/context/postsToShow'

const LatestsPosts = ({ edges, postsToShow, onShowMorePosts }) => (
  <div>
    {edges.map((post, i) => i < postsToShow && (
      <PostCard
        key={post.node.id}
        node={post.node}
      />
    ))}
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MoreButton
        onClick={onShowMorePosts}
      >
        Ver más
      </MoreButton>
    </div>
  </div>
)

LatestsPosts.propTypes = {
  edges: PropTypes.array.isRequired,
  postsToShow: PropTypes.number.isRequired,
  onShowMorePosts: PropTypes.func.isRequired
}

export default withPostCounter(LatestsPosts)
