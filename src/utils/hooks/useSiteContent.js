import { useStaticQuery, graphql } from 'gatsby'

export const useSiteContent = () => {
  const { content } = useStaticQuery(
    graphql`
      query SITE_CONTENT {
        content: contentfulContent {
          heroTitle
          heroImage {
            description
            fluid(maxWidth: 2000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          subscriptionTitle
          subscriptionSubtitle
        }
      }
    `
  )

  return content
}
