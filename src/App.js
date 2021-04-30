import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Layout from './components/Layout'
import Counter from './components/Counter'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#fff'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Counter />
      </Layout>
    </ThemeProvider>
  )
}
export default App
