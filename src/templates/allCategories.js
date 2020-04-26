import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Categories from '../components/categories'

const AllCategories = ({ pageContext: { allCategories } }) => (
  <Layout seo={{ title: 'Categorías' }}>
    <Categories categories={allCategories} />
  </Layout>
)

AllCategories.propTypes = {
  pageContext: PropTypes.shape({
    allCategories: PropTypes.array,
  }).isRequired,
}

export default AllCategories
