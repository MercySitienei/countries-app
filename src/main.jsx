import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './context/ThemeContext.jsx'
// import CountryProvider from './context/apiContext/CountryContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <CountryProvider> */}
        <App />
      {/* </CountryProvider> */}
    </ThemeProvider>
  </React.StrictMode>
)
