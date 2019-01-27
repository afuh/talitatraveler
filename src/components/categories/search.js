import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

const Form = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  color: ${({ theme }) => theme.gray};
  background: #f6f6f6;
  border: none;
  border-left: 1px solid #c8c8c880;
  padding: 0 40px;
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  line-height: 2;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  align-self: stretch;

  cursor: ${({ loading }) => !loading && "pointer"};

  ${({ loading, theme }) => !loading && css`
    :active,
    :focus,
    :hover {
      border-left: 1px solid ${theme.mainColor};
      color: ${theme.mainColor};
    }
  `}

  transition: ${({ theme }) => theme.transition};
`

const Input = styled.input`
  flex: 1;

  border: none;
  background: #f6f6f6;

  display: block;
  padding: 2rem;
  transition: .2s border-color;

  &:focus {
    outline: 0;
  }
`

const Post = styled.div`
  display: flex;
  margin: 20px 0;

  .text {
    flex: 1;

    h3 {
      margin-top: 0;
      margin-bottom: 2px;
    }

    p {
      margin: 0;
      font-size: 1.5rem;
    }

    time p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.gray};
      margin-bottom: 6px;
    }
  }

`

class SearchForm extends Component {
  state = {
    search: '',
    filteredPosts: []
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { search } = this.state
    const { posts } = this.props

    if (search.length) {
      const filteredPosts = this.handleFilter(search, posts)
      this.setState({ filteredPosts })
    }
  }

  handleFilter(word, posts){
    const findWord = (word, post) => {
      const searchIn = [post.title, post.subTitle, post.content.md.text]
      return searchIn.some(str => RegExp('\\b' + word, "i").test(str))
    }

    return posts.reduce((acc, post) => {
      if (findWord(word, post)) {
        acc.push(post)
      }
      return acc
    }, [])
  }

  render(){
    const { filteredPosts } = this.state

    return (
      <>
        <Form
          onSubmit={this.handleSubmit}
        >
          <Input
            name="search"
            placeholder='Buscar...'
            onChange={this.handleChange}
          />
          <Button>buscar</Button>
        </Form>
          {filteredPosts.map(post => (
            <Post
              key={post.slug}
            >
              <div style={{ marginRight: 20, flexBasis: '14%' }}>
                <Link to={"/" + post.slug}>
                <GatsbyImg
                  style={{ height: 120 }}
                  fluid={post.headerImage.fluid}
                  alt={post.headerImage.description}
                  title={post.headerImage.description}
                />
                </Link>
              </div>
              <div className='text'>
                <h3><Link to={"/" + post.slug}>{post.title}</Link></h3>
                <time dateTime={(post.date || post.createdAt).replace(/\//g, "-")}>
                  <p>{post.date || post.createdAt}</p>
                </time>
                <p>{post.content.md.excerpt}</p>
              </div>
            </Post>
          ))}
      </>
    )
  }
}

SearchForm.propTypes = {
  posts: PropTypes.array.isRequired
}

const Search = () => (
  <StaticQuery
    query={query}
    render={({ posts: { edges } }) => (
      <SearchForm
        posts={edges.map(({ node }) => node)}
      />
    )}
  />
)

export default Search

const query = graphql`
  {
    posts: allContentfulPost(sort: { fields: date, order: DESC  }) {
      edges {
        node {
          title
          slug
          content {
            md: childMarkdownRemark {
              text: rawMarkdownBody
              excerpt(pruneLength: 240)
            }
          }
          headerImage {
            description
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
          }
          ...Dates
        }
      }
    }
  }
`
