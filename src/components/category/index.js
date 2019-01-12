import React from 'react'
import PropTypes from 'prop-types'

import { PostCard, Section } from '../../utils/UI'

const Category = ({ edges }) => (
  <Section>
    {edges.map(post => (
      <PostCard
        key={post.node.id}
        node={post.node}
      />
    ))}
  </Section>
)

Category.propTypes = {
  edges: PropTypes.array.isRequired
}

export default Category
