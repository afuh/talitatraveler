/* eslint react/prop-types: 0  */
import React from "react"

import { PostsToShowProvider } from './src/utils/context/postsToShow'

export const wrapRootElement = ({ element }) => (
  <PostsToShowProvider>
    {element}
  </PostsToShowProvider>
)
