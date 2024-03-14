import {useTownContext} from "../utils/context/TownContext.jsx";
import {useWeatherContext} from "../utils/context/WeatherContext.jsx";
import './suggest.css';

const Suggest = () => {

    const {town: {suggest}, dispatch} = useTownContext()
    const {getWeather} = useWeatherContext()


    const handleClick = (town) => {
        dispatch({
            type: 'change_value',
            payload: town.name
        })
        dispatch({
            type: 'reset_suggestion'
        })
        getWeather(town.coordinate)
    }

    return (
        <div className={'suggest'}>
            <h4 className={'suggest__title'}>Suggéstions</h4>
            <div className="suggest__container">
                {
                    suggest.length > 0 &&
                        suggest.map((s, i) => {
                            return (
                                <div
                                    key={i}
                                    className="suggest__container__item"
                                    onClick={() => handleClick(s)}
                                >
                                    <span className="name">{s.name},</span> <span className="context">{s.context}</span>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
};

export default Suggest;