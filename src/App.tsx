import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
// import { MarketContextProvider } from './contexts/MarketContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* <MarketContextProvider> */}
        <Router />
        {/* </MarketContextProvider> */}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
