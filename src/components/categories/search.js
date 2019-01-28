import React, { Component } from 'react'
import { StaticQuery, graphql, Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'
import Downshift from 'downshift'
import computeScrollIntoView from 'compute-scroll-into-view'

const InputWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  filter: grayscale(100%);

  ${({ highlighted }) => highlighted && css`
    filter: grayscale(0);
    background: #f6f6f6;
  `};

  display: flex;
  padding: 20px;

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
  searchIn = post => Object.values(post).map(value => this.normalize(value))
  normalize = str => str && str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")

  findWord = (search, post) => {
    const searchIn = this.searchIn({
      title: post.title,
      subTitle: post.subTitle,
      content: post.content.text
    })

    return searchIn.some(str => RegExp('\\b' + this.normalize(search), "i").test(str))
  }

  state = {
    filteredPosts: []
  }

  handleChange = e => {
    const filteredPosts = this.handleFilter(e.target.value)
    this.setState({ filteredPosts })
  }

  handleFilter(search){
    const { posts } = this.props

    return posts.reduce((acc, post) => {
      if (this.findWord(search, post)) {
        acc.push(post)
      }
      return acc
    }, [])
  }

  render(){
    const { filteredPosts } = this.state

    return (
      <Downshift
        itemToString={post => (post === null ? '' : post.title)}
        onChange={({ slug }) => navigate(slug)}
        scrollIntoView={node => {
          if (!node) return

          const [ action ] = computeScrollIntoView(node, {
            scrollMode: 'if-needed',
            block: 'nearest',
            inline: 'nearest'
          })
          if (!action) return

          action.el.scrollTop = action.top
          action.el.scrollLeft = action.left
        }}
      >
        {({ getInputProps, getItemProps, highlightedIndex, getMenuProps, isOpen }) => (
          <div>
            <InputWrapper>
              <Input
                {...getInputProps({
                  type: 'text',
                  placeholder: 'Buscar...',
                  id: 'search',
                  onChange: e => {
                    e.persist()
                    this.handleChange(e)
                  }
                })}
                name="search"
                placeholder='Buscar...'
              />
            </InputWrapper>
            <div {...getMenuProps()} >
              {isOpen && filteredPosts.map((post, index) => (
                <Post
                  {...getItemProps({ item: post })}
                  key={post.slug}
                  highlighted={index === highlightedIndex}
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
          </div>
        </div>
      )}
      </Downshift>
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
            text: content
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
