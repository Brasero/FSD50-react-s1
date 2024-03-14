import Suggest from "./Suggest.jsx";
import {useTownContext} from "../utils/context/TownContext.jsx";
import {useWeatherContext} from "../utils/context/WeatherContext.jsx";
import './searchTown.css';

const SearchTown = () => {

    const {town, dispatch, searchTown} = useTownContext()
    const {dispatch: weatherDispatch} = useWeatherContext()

    const handleChange = (e) => {
        const {value} = e.target
        dispatch({
            type: 'change_value',
            payload: value
        })
        if (value.length > 2) {
            searchTown(value)
        }
        else {
            dispatch({type: 'reset_suggestion'})
            weatherDispatch({type: 'reset_weather'})
        }
    }

    return (
        <div className={'search'}>
            <div className={"search__header"}>
                <h1 className={"search__header__title"}>Méteo App</h1>
            </div>
            <div className={'search__inputGroup'}>
                <label>Rechercher une ville</label>
                <input
                    name={'search'}
                    value={town.search}
                    placeholder={'Paris | Marseille ...'}
                    onChange={handleChange}
                />
                {
                    town.isLoading || town.suggest.length > 0 && <Suggest />
                }
            </div>
        </div>
    );
};

export default SearchTown;