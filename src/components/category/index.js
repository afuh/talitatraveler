import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard, Section } from '../../utils/UI'
import { media } from '../../utils/style'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${media.phone(css`
    flex-direction: column;
  `)}
`

const Category = ({ edges, category }) => (
  <Section margin={2}>
    <h1>{category}</h1>
    <Wrapper>
      {edges.map(post => (
        <PostCard
          mini
          key={post.node.id}
          node={post.node}
        />
      ))}
    </Wrapper>
  </Section>
)

Category.propTypes = {
  edges: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
}

export default Category
