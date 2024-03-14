import {useWeatherContext} from "../utils/context/WeatherContext.jsx";
import './display.css';

const Display = () => {
    const {weather} = useWeatherContext()

    return (
        <div className={'container'}>
            {
                weather.statut === 'nodata' ?
                    <span style={{color: 'red'}}>Aucune donnée à afficher, sélectionnez une ville dans la liste des suggestions.</span>
                    :
                    <div className={'weather'}>
                        <div className="town">
                            <h3 className="town__name">{weather.weather.name}</h3>
                            <p>{weather.weather.weather}</p>
                        </div>
                        <div className="temp">
                            <h4 className="temp__title">
                                Température
                            </h4>
                            <div className="temp__group">
                                <span className={'label'}>Actuelle</span>
                                <span className="value">{weather.weather.temp.real} C</span>
                            </div>
                            <div className="temp__group">
                                <span className={'label'}>Maximale</span>
                                <span className="value">{weather.weather.temp.max} C</span>
                            </div>
                            <div className="temp__group">
                                <span className={'label'}>Minimale</span>
                                <span className="value">{weather.weather.temp.min} C</span>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Display;