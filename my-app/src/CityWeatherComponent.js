import React, {useEffect, useState} from 'react';

export default function ShowWeatherInCity() {
    const [temperature, setTemperature] = useState(0);
    const [city, setCity] = useState(0);

    // const apiKeys = []; array z różnymi api keys, które potem są losowane do funkcji fetch celem upewnienia się, że nie ma za dużo requestów

    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Zawory,pl&appid=818c22ea71e55d4533a6c533966f8bcb&units=metric')
            .then((response) => response.json())
            .then((data) => {
                setTemperature(data.main.temp);
                setCity(data.name);
            });
    });

    return (
        <div>
            Miasto: {city} <br />
            Temperatura: {temperature} stopni Celsjusza
        </div>
    );
}