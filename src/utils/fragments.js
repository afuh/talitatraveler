import { graphql } from 'gatsby'

export const Dates = graphql`
  fragment Dates on ContentfulPost {
    createdAt(formatString: "DD/MM/YYYY", locale: "es")
    date(formatString: "DD/MM/YYYY", locale: "es")
  }
`

export const PostCard = graphql`
  fragment PostCard_Big on ContentfulPost {
    id
    title
    subTitle
    slug
    ...Dates
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
