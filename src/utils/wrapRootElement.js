/* eslint react/prop-types: 0  */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { PostsToShowProvider } from './hooks/usePostCounter'
import { theme, GlobalStyles } from './style'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <PostsToShowProvider>{element}</PostsToShowProvider>
    </>
  </ThemeProvider>
)
