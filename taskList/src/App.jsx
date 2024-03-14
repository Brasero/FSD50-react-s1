import { useReducer } from 'react'
import './App.css'
import Input from "./component/Input.jsx"
import TaskList from './component/TaskList.jsx'

function App() {

  return (
    <div className={'main'}>
      <div className={'task__header'}>
        <Input />
      </div>
      <div className={'task__list'}>
          <TaskList />
      </div>
    </div>
  )
}

export default App