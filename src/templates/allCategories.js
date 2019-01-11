import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import Layout from '../components/layout'

const AllCagtegories = ({ pageContext }) => (
  <Layout>
    <ul>
      {pageContext.allCategories.map(({ category, slug }) => (
        <li key={slug}>
          <Link to={`/categorias/${slug}`}>{category}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

AllCagtegories.propTypes = {
  pageContext: PropTypes.shape({
    allTags: PropTypes.array
  }).isRequired
}

export default AllCagtegories
