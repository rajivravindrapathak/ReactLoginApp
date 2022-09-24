import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import Store from './Redux/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider Store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
)
