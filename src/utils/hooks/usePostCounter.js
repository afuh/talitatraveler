import React, { useState, createContext, useContext } from 'react'

const Context = createContext()
export const usePostCounter = () => useContext(Context)

export const PostsToShowProvider = ({ children }) => {
  const limit = 9
  const [postsToShow, setPostsToShow] = useState(limit)

  return (
    <Context.Provider
      value={{
        postsToShow,
        onShowMorePosts: () => setPostsToShow(postsToShow + limit),
      }}
    >
      {children}
    </Context.Provider>
  )
}
