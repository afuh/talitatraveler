import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PostsGrid, Divider } from '../../utils/UI'
import { edgesToNode } from '../../utils/helpers'

const Wrapper = styled.div`
  position: relative;

  .title {
    text-align: center;
    ${({ theme }) => theme.fontSize(3.2)};
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
    <Divider text={category} />
    <PostsGrid posts={edgesToNode(edges)} header={category} />
  </Wrapper>
)

Category.propTypes = {
  edges: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
}

export default Category
