let id = 1;

export const initialState = {
    input: '',
    tasks: [],
    errorMessage: ''
}

const taskReducer = (state, action) => {

    switch(action.type) {

        case 'changeValue':
            return {
                ...state,
                input: action.payload,
                errorMessage: ''
            }

        case 'addTask':
            return {
                ...state,
                input: '',
                tasks: [...state.tasks, {id: id++, text: state.input}]
            }

        case 'error':
            return {
                ...state,
                errorMessage: action.payload
            }

        case 'removeTask':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            }

        default:
            return state;
    }
}

export default taskReducer