// depensies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//components
import Home from './Home'

//theme
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

//styles
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);