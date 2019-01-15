import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

import { Section } from '../utils/UI'
import Layout from '../components/layout'

const Hit = ({ hit }) => (
  <Link to={hit.slug}>{hit.title}</Link>
)

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

const Search = () => (
  <InstantSearch
    appId={process.env.GATSBY_ALGOLIA_APP_ID}
    apiKey={process.env.GATSBY_ALGOLIA_API_KEY}
    indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
  >
    <SearchBox
      translations={{ placeholder: 'Buscar...' }}
    />
    <Hits hitComponent={Hit}/>
  </InstantSearch>
)

const Buscar = () => (
  <Layout>
    <Section>
      <Search />
    </Section>
  </Layout>
)

export default Buscar
