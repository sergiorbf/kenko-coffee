import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

// import { Header } from './components/Header'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { MarketContextProvider } from './contexts/MarketContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <MarketContextProvider>
          <Router />
        </MarketContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
