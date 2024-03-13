import { useReducer } from 'react'
import './App.css'
import Input from "./component/Input.jsx"
import TaskList from './component/TaskList.jsx'
import taskReducer, {initialState} from './reducer/taskReducer.jsx'

function App() {

    const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <div className={'main'}>
      <div className={'task__header'}>
        <Input error={state.errorMessage} value={state.input} dispatch={dispatch} />
      </div>
      <div className={'task__list'}>
          <TaskList tasks={state.tasks} dispatch={dispatch} />
      </div>
    </div>
  )
}

export default App