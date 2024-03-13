import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Computer from "./component/Computer.jsx";
import Buttons from  './component/Buttons.jsx';
import './App.css'

function App() {

  return (
    <div className={"calculatrice"}>
        <div>
            <div className="calculatrice__head">
                <Computer />
            </div>
            <div className="calculatrice__button__wrapper">
                <Buttons />
            </div>
        </div>
    </div>
  )
}

export default App