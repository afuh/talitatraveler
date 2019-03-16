import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMeta = () => {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            titleTemplate
            nav {
              name
              path
            }
            footerNav {
              name
              path
            }
            external {
              name
              url
            }
            email
          }
        }
      }
    `
  )

  return siteMetadata
}
