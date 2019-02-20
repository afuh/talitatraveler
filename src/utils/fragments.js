import { graphql } from 'gatsby'

export const Dates = graphql`
  fragment Dates on ContentfulPost {
    createdAt(formatString: "DD/MM/YYYY", locale: "es")
    date(formatString: "DD/MM/YYYY", locale: "es")
  }
`

export const PostCard = graphql`
  fragment PostCard on ContentfulPost {
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
