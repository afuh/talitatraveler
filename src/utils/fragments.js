import { graphql } from 'gatsby'

export const PostCard = graphql`
  fragment PostCard on ContentfulPost {
    id
    title
    slug
    createdAt(formatString: "MMMM, YYYY", locale: "es")
    date(formatString: "MMMM, YYYY", locale: "es")
    content {
      md: childMarkdownRemark {
        excerpt
        timeToRead
      }
    }
    headerImage {
      description
      fluid(maxWidth: 1024) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
    }
  }
`
