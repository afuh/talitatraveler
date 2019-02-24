import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { fontSize } from '../../utils/style'
import { PostsGrid, Section } from '../../utils/UI'


const Wrapper = styled(Section)`
  padding-top: ${({ theme }) => theme.categoryPadding};
  position: relative;

  .title {
    display: flex;
    align-items: center;
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
  <Wrapper margin={2}>
    <div className='category'><Link to='/categorias'>Categoría  </Link> </div>
    <h3 className='title'>{category}</h3>
    <PostsGrid
      posts={edges}
      header={category}
    />
  </Wrapper>
)

Category.propTypes = {
  edges: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
}

export default Category
