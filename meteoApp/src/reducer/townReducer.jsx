
export const initialState = {
    search: '',
    suggest: [],
    isLoading: false
}

const townReducer = (state, action) => {

    switch(action.type) {
        case 'change_value':
            return {
                ...state,
                search: action.payload
            }

        case 'is_loading':
            return {
                ...state,
                isLoading: true
            }

        case 'loaded':
            return {
                ...state,
                isLoading: false
            }

        case 'set_suggestion':
            return {
                ...state,
                isLoading: false,
                suggest: action.payload
            }

        case "reset_suggestion":
            return {
                ...state,
                suggest: [],
                isLoading: false
            }

        default:
            return state;
    }
}

export default townReducer