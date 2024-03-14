
export const initialState = {
    weather: {},
    statut: 'nodata',
    isLoading: false
}

const weatherReducer = (state,action) => {
    const {payload} = action
    switch(action.type) {
        case 'set_isLoading':
            return {
                ...state,
                isLoading: payload
            }

        case 'set_weather':
            return {
                ...state,
                isLoading: false,
                weather: payload,
                statut: 'loaded'
            }

        case 'reset_weather':
            return initialState

        default:
            return state
    }
}

export default weatherReducer