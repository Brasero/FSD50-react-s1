import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Computer from "./component/Computer.jsx";
import Buttons from  './component/Buttons.jsx';
import './App.css'


const calculate = (state) => {
    const current = parseFloat(state.current)
    const prev = parseFloat(state.prev)

    switch (state.operator) {

        case '+':
            return prev + current;

        case '-':
            return prev - current;

        case '*':
            return prev * current;

        case '/':
            return current !== 0 ? prev / current : "Les division par 0 sont impossible"

        default:
            return current;
    }
}

const changeCurrent = (state, action) => {
    if (state.current === 0) {
        if (action.payload === ".") {
            if (!(String(state.current).includes('.'))) {
                return state.current.toString() + action.payload.toString()
            } else {
                return state.current
            }
        } else {
            return action.payload
        }
    } else {
        if(action.payload === '.' && String(state.current).includes('.')) {
            return state.current
        }

        return state.current.toString() + action.payload.toString()
    }
}

const initialState = {
    current: 0,
    prev: 0,
    operator: "",
    errorMessage: ""
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'changeCurrent':
            return {
                ...state,
                current: changeCurrent(state, action),
                errorMessage: ""
            }

        case 'setOperator':
            return {
                ...state,
                prev: calculate(state),
                current: 0,
                operator: action.payload
            }

        case "calculate":
            const result = calculate(state);
            return isNaN(parseFloat(result)) ? {
                ...state,
                errorMessage: result
            } : {
                ...state,
                current: result,
                prev: 0,
                operator: '',
                errorMessage: ""
            }

        case 'reset':
            return initialState;

        default:
            return state;
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);

  return (
    <div className={"calculatrice"}>
        <div>
            {
                state.errorMessage !== "" && <span style={{color: 'red'}}>{state.errorMessage}</span>
            }
            <div className="calculatrice__head">
                <Computer value={state.current} />
            </div>
            <div className="calculatrice__button__wrapper">
                <Buttons dispatch={dispatch} />
            </div>
        </div>
    </div>
  )
}

export default App