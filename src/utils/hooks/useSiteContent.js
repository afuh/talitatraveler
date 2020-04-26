import { useStaticQuery, graphql } from 'gatsby'

export const useSiteContent = () => {
  const { content } = useStaticQuery(
    graphql`
      query SITE_CONTENT {
        content: contentfulContent {
          heroTitle
          heroImage {
            description
            fluid(maxWidth: 2400) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          subscriptionTitle
          subscriptionSubtitle
          authorName
          authorBio {
            md: childMarkdownRemark {
              html
            }
          }
          authorAvatars {
            description
            title
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    `,
  )

  return content
}
