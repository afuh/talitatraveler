import React from 'react'

import SEO from '../utils/seo'
import { useSiteMeta } from '../utils/hooks'
import Layout from '../components/layout'
import Contact from '../components/contact'

const AboutPage = () => {
  const { external } = useSiteMeta()

  return (
    <Layout>
      <SEO
        title='Contacto'
      />
      <Contact contact={external} />
    </Layout>
  )
}

export default AboutPage
