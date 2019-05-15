import React, { Component } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Downshift from 'downshift'
import computeScrollIntoView from 'compute-scroll-into-view'

import ListItem from './listItem'

const searchWord = (search, post) => {
  const normalize = str => str && str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")

  const searchIn = post => Object.values(post).map(value => normalize(value))

  const fields = searchIn({
    title: post.title,
    subTitle: post.subTitle,
    content: post.content.text
  })

  return fields.some(str => RegExp('\\b' + normalize(search), "i").test(str))
}

const Wrapper = styled.div`
  margin: 40px 0 80px;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Input = styled.input`
  ${({ theme }) => theme && css`
    caret-color: ${theme.mainColor};
    background: ${theme.lightGray};
  `};

  flex: 1;
  border: none;
  display: block;
  border-radius: 0;
  padding: 2rem;
  transition: .2s border-color;

  &:focus {
    box-shadow: ${({ theme }) => theme.shadow};
    outline: 0;
  }
`

class SearchForm extends Component {
  searchInput = React.createRef();
  state = {
    filteredPosts: []
  }

  componentDidMount(){
    const { location, posts } = this.props

    if (location.state && location.state.focus) {
      this.searchInput.current.focus()
    }

    this.setState({ filteredPosts: posts })
  }

  handleChange = e => {
    const filteredPosts = this.handleFilter(e.target.value)
    this.setState({ filteredPosts })
  }

  handleFilter(search){
    const { posts } = this.props

    return posts.reduce((acc, post) => {
      if (searchWord(search, post)) {
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
        {({ getInputProps, getItemProps, highlightedIndex, getMenuProps }) => (
          <div>
            <InputWrapper>
              <Input
                ref={this.searchInput}
                {...getInputProps({
                  name: 'search',
                  type: 'text',
                  placeholder: 'Filtrar...',
                  id: 'search',
                  onChange: e => {
                    e.persist()
                    this.handleChange(e)
                  }
                })}
              />
            </InputWrapper>
            <div {...getMenuProps()}>
              {filteredPosts.map((post, index) => (
                <ListItem
                  key={post.slug}
                  post={post}
                  getItemProps={getItemProps}
                  highlighted={index === highlightedIndex}
                />
            ))}
          </div>
        </div>
      )}
      </Downshift>
    )
  }
}

SearchForm.propTypes = {
  posts: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
}

const Search = ({ location }) => {
  const { posts: { edges } } = useStaticQuery(query)

  return (
    <Wrapper>
      <SearchForm
        location={location}
        posts={edges.map(({ node }) => node)}
      />
    </Wrapper>
  )
}

Search.propTypes = {
  location: PropTypes.object.isRequired
}

export default Search

const query = graphql`
  query SEARCH_POSTS_QUERY {
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
