import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMeta = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query SITE_META {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
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
    `,
  )

  return siteMetadata
}
