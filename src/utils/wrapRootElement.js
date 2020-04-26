/* eslint react/prop-types: 0  */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { PostsToShowProvider } from './hooks/usePostCounter'
import { theme } from './theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <PostsToShowProvider>{element}</PostsToShowProvider>
  </ThemeProvider>
)
