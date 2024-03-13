import {createContext, useContext, useReducer} from 'react';
import taskReducer, {initialState} from '../reducer/taskReducer.jsx';

const taskContext = createContext();


const taskConsumer = () => {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    return [state, dispatch];
}

export const useTaskContext = () => {
    return useContext(taskContext);
}

const TaskContextProvider = ({children}) => {

    const value = taskConsumer();

    return <taskContext.Provider value={value}>
        {children}
    </taskContext.Provider>
}

export default TaskContextProvider