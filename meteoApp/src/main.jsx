import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TownContextProvider from "./utils/context/TownContext.jsx";
import WeatherContextProvider from "./utils/context/WeatherContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherContextProvider>
        <TownContextProvider>
            <App />
        </TownContextProvider>
    </WeatherContextProvider>
  </React.StrictMode>,
)