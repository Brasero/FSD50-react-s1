import {createContext, useContext, useReducer} from "react";
import townReducer, {initialState} from "../../reducer/townReducer.jsx";
import axios from "axios";
import {townAdapter} from "../townAdapter.js";

const townContext = createContext();

export const useTownContext = () => {
    return useContext(townContext);
}

const ConsumeTownContext = () => {

    const [town, dispatch] = useReducer(townReducer, initialState)

    const searchTown = (search) => {
        dispatch({type: 'is_loading'})
        axios.get(`https://api-adresse.data.gouv.fr/search/?q=${search}&type=municipality`)
            .then(({data}) => {
                dispatch({
                    type: 'set_suggestion',
                    payload: townAdapter(data.features)
                })
            })
            .catch((error) => {
                console.error(error)
                dispatch({
                    type: 'loaded'
                })
            })
    }

    return {
        town,
        dispatch,
        searchTown
    }
}

const TownContextProvider = ({children}) => {

    const context = ConsumeTownContext()

    return (
        <townContext.Provider value={context}>
            {children}
        </townContext.Provider>
    )
}


export default TownContextProvider;