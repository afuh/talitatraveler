import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaAngleRight as Arrow } from 'react-icons/fa'
import { PostsGrid, Section } from '../../utils/UI'

const Title = styled.h3`
  display: flex;
  align-items: center;
`
const Category = ({ edges, category }) => (
  <Section margin={2}>
    <Title>
      <Link to='/categorias'>Categorías </Link> <Arrow/> {category}
    </Title>
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
