import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function ShowWeatherInCity(props) {

    const [temperature, setTemperature] = useState(0);
    const [city, setCity] = useState(0);

    // const apiKeys = []; array z różnymi api keys, które potem są losowane do funkcji fetch celem upewnienia się, że nie ma za dużo requestów

    useEffect(() => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + props.cityName + '&appid=818c22ea71e55d4533a6c533966f8bcb&units=metric')
            .then(function(response) {
                setTemperature(response.data.main.temp);
                setCity(response.data.name);
            })
            .catch(function(error) {
                console.log(error);
            })
    });

    return (
        <div>
            Miasto: {city} <br />
            Temperatura: {temperature} stopni Celsjusza
        </div>
    );
}