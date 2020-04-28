import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'
import EnvList from './EnvList'
import { systemFont } from './lib'

function App () {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: { type: prefersDarkMode ? 'dark' : 'light', },
        typography: { fontFamily: systemFont }
      }),
    [prefersDarkMode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <EnvList/>
    </ThemeProvider>
  )
}

export default App
