import {createContext, useContext, useReducer} from "react";
import weatherReducer, {initialState} from "../../reducer/weatherReducer.jsx";
import axios from "axios";
import {weatherAdapter} from "../weatherAdapter.js";

const API_KEY = '05703578c01c2c55a1646de5258c13d1'

const weatherContext = createContext()

export const useWeatherContext = () => {
    return useContext(weatherContext)
}


const ConsumeWeatherContext = () => {

    const [weather, dispatch] = useReducer(weatherReducer, initialState)

    const getWeather = ({lat, lon}) => {
        dispatch({type: "set_isLoading", payload: true})
        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`
        )
            .then(({data}) => {
                dispatch({
                    type: "set_weather",
                    payload: weatherAdapter(data)
                })
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return {
        getWeather,
        weather,
        dispatch
    }
}

const WeatherContextProvider = ({children}) => {

    const context = ConsumeWeatherContext()

    return (
        <weatherContext.Provider value={context}>
            {children}
        </weatherContext.Provider>
    )
}

export default WeatherContextProvider;