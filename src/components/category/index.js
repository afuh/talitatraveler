import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fontSize } from '../../utils/style'
import { PostsGrid, Section, SectionHeader } from '../../utils/UI'

const Wrapper = styled(Section)`
  position: relative;

  .title {
    text-align: center;
    ${fontSize(3.2)};
    font-weight: 900;
  }

  .category {
    position: absolute;
    transform: translateY(1.4rem);
    font-weight: 900;
  }
`

const Category = ({ edges, category }) => (
  <Wrapper>
    <SectionHeader text={category} />
    <PostsGrid
      edges={edges}
      header={category}
    />
  </Wrapper>
)

Category.propTypes = {
  edges: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
}

export default Category
