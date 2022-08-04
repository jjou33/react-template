import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import './index.css'
import { worker } from './mocks/worker'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
