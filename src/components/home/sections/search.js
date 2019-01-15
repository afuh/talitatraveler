import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

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
      return searchIn.some(str => RegExp('\\b'+ word +'\\b', "i").test(str))
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
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            name="search"
            placeholder='Buscar...'
            onChange={this.handleChange}
          />
          <button>buscar</button>
        </form>
        <ul>
          {filteredPosts.map(post => (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link><br/>
              <span>{post.content.md.excerpt}</span>
            </li>
          ))}
        </ul>
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
          subTitle
          slug
          content {
            md: childMarkdownRemark {
              text: rawMarkdownBody
              excerpt
            }
          }
        }
      }
    }
  }
`
