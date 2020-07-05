/* eslint react/prop-types: 0  */
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './theme'

export const wrapRootElement = ({ element }) => <ThemeProvider theme={theme}>{element}</ThemeProvider>
