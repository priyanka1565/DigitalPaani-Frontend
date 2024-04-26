const API_KEY = '440f8e07876056047055a662b864e6d1';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((json) => {
            return json;
        })
}

export default getWeather;