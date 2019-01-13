import { graphql } from 'gatsby'

export const PostCard = graphql`
  fragment PostCard_Big on ContentfulPost {
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
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_withWebp_noBase64
      }
    }
  }

  fragment PostCard_Small on ContentfulPost {
    id
    title
    slug
    headerImage {
      description
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
