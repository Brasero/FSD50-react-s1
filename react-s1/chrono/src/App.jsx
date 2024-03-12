import Counter from './component/Counter.jsx';
import {useState, useReducer} from "react"
import List from './component/List.jsx';
import Input from './component/Input.jsx';
import './App.css'

const initialState = {
    count: 0,
    message: '',
    disabled: true
}

//objet action:  {type: string, ?payload: any}
const reducer = (state, action) => {
    switch(action.type) {

        case 'incr':
            return {
                ...state,
                count: state.count + action.payload,
                disabled: false,
                message: ""
            }

        case 'decr':
            return {
                ...state,
                count: state.count === 0 ? 0 : state.count - action.payload,
                message: state.count === 0 ? "Vous ne pouvez plus décrémenter" : "",
                disabled: state.count === 0 ? true : false
            }

        default:
            return state;
    }
}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const incr = () => {
        dispatch({
            type: 'incr',
            payload: 1
        })
    }

    const decr = () => {
        dispatch({
            type: 'decr',
            payload: 1
        })
    }

    return (
        <>
            {
                state.message !== '' && <span style={{color: "red"}}>{state.message}</span>
            }
            <div>Count : {state.count}</div>
            <button onClick={incr}>+1</button>
            <button onClick={decr} disabled={state.disabled}>-1</button>
        </>
    )
}

export default App