import React from 'react'
import PropTypes from 'prop-types'
import { InstantSearch, SearchBox, Hits, Highlight, Menu } from 'react-instantsearch-dom'

import { Section } from '../utils/UI'
import Layout from '../components/layout'

const Hit = ({ hit }) => (
  <Highlight attribute={'title'} hit={hit} tagName="mark" />
)

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

const Search = () => (
  <InstantSearch
    appId={process.env.ALGOLIA_APP_ID}
    apiKey={process.env.ALGOLIA_API_KEY}
    indexName={process.env.ALGOLIA_INDEX_NAME}
  >
    <SearchBox
      translations={{ placeholder: 'Buscar...' }}
    />
    <Menu attribute='categories'/>
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