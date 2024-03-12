import Counter from './component/Counter.jsx';
import {useState, useReducer} from "react"
import List from './component/List.jsx';
import './App.css'

const initialState = {
    count: 0,
    message: ''
}

//objet action:  {type: string, ?payload: any}
const reducer = (state, action) => {
    switch(action.type) {

        case 'incr':
            return {
                ...state,
                count: state.count + action.payload
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
            payload: 3
        })
    }

    return (
        <>
            <div>Count : {state.count}</div>
            <button onClick={incr}>+1</button>
        </>
    )
}

export default App