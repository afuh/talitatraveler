import React from 'react'
import PropTypes from 'prop-types'

import { PostsGrid, Section } from '../../utils/UI'

const Category = ({ edges, category }) => (
  <Section margin={2}>
    <PostsGrid
      posts={edges}
      header={category}
    />
  </Section>
)

Category.propTypes = {
  edges: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
}

export default Category
