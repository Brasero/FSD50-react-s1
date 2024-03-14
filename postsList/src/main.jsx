import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProvidePostContext from './utils/postContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvidePostContext>
        <App />
    </ProvidePostContext>
  </React.StrictMode>,
)