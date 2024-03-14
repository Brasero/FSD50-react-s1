export const weatherAdapter = (weather) => {
    return {
        temp: {
            real: weather.main.temp,
            min: weather.main.temp_min,
            max: weather.main.temp_max,
            humidity: weather.main.humidity
        },
        name: weather.name,
        weather: weather.weather[0].description
    }
}