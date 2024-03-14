import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './component/Result.jsx'
import Input from "./component/Input.jsx"
import Button from './component/Button.jsx';


const initialState = {
    num1: '',
    num2: '',
    result: 0
}
const reducer = (state, action) => {
    switch (action.type) {

        case 'set_value':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case 'addition':
            return {
                ...state,
                result: parseFloat(state.num1) + parseFloat(state.num2),
                num1: '',
                num2: ''
            }

        case 'soustract':
            return {
                ...state,
                result: parseFloat(state.num1) - parseFloat(state.num2),
                num1: '',
                num2: ''
            }

        case 'multiply':
            return {
                ...state,
                result: parseFloat(state.num1) * parseFloat(state.num2),
                num1: '',
                num2: ''
            }

        case "reset":
            return initialState;

        default:
            return state;
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addition = () => {
        dispatch({type: 'addition'})
    }

    const soustact = () => {
        dispatch({type: 'soustract'})
    }

    const multiply = () => {
        dispatch({type: 'multiply'})
    }

  return (
    <>
      <Result  result={state.result} />
        <div>
            <Input value={state.num1} changeValue={dispatch} name={'num1'} />
            <Input value={state.num2} changeValue={dispatch} name={'num2'} />
        </div>
        <div>
            <Button name={'+'} handleClick={addition} />
            <Button name={'-'} handleClick={soustact} />
            <Button name={'X'} handleClick={multiply} />
            <Button name={'reset'} handleClick={()=> dispatch({type: 'reset'})} />
        </div>
    </>
  )
}

export default App