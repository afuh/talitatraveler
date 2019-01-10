import { graphql } from 'gatsby'

export const PostCard = graphql`
  fragment PostCard on ContentfulPost {
    id
    title
    slug
    createdAt(fromNow: true, locale: "es")
    date(fromNow: true, locale: "es")
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
