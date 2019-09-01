import { graphql } from 'gatsby'

export const Dates = graphql`
  fragment Dates on ContentfulPost {
    createdAt
    date
    formatedCreatedAt: createdAt(formatString: "DD/MM/YYYY", locale: "es")
    formatedDate: date(formatString: "DD/MM/YYYY", locale: "es")
  }
`

export const PostBasicInfo = graphql`
  fragment PostBasicInfo on ContentfulPost {
    id
    title
    subTitle
    slug
  }
`

export const PostCard = graphql`
  fragment PostCard on ContentfulPost {
    ...PostBasicInfo
    headerImage {
      description
      fluid(maxWidth: 800) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
