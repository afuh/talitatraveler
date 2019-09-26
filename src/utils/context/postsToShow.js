import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()

export class PostsToShowProvider extends Component {
  posts = 9
  state = {
    postsToShow: this.posts
  }

  handlePostsToShow = () => {
    this.setState(state => ({
      postsToShow: state.postsToShow + this.posts
    }))
  }

  render(){
    return (
      <Provider value ={{
        postsToShow: this.state.postsToShow,
        onShowMorePosts: () => this.handlePostsToShow()
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export const withPostCounter = Component => props => (
  <Consumer>{value => <Component {...props} {...value}/>}</Consumer>
)
