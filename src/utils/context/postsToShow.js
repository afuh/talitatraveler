import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()

export class PostsToShowProvider extends Component {
  state = {
    postsToShow: 4
  }

  handlePostsToShow = () => {
    this.setState(state => ({
      postsToShow: state.postsToShow + 4
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
