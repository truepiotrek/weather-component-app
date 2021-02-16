import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "react-loader-spinner";

export default function ShowWeatherInCity(props) {

    const [temperature, setTemperature] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + props.cityName + '&appid=818c22ea71e55d4533a6c533966f8bcb&units=metric')
            .then(function(response) {
                setTemperature(response.data.main.temp);
                setLoading(false);
            })
            .catch(function(error) {
                setLoading(false);
                setError(true);
                console.log(error);
            })
    });

    function renderLoading() {
        return (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        )
    }

    function renderError() {
        return "Błędna nazwa miasta, spróbuj jeszcze raz ";
    }

    function renderNormal() {
        return (
            <div>
                Miasto: {props.cityName} <br />
                Temperatura: {temperature} stopni Celsjusza
            </div>
        );
    }



    if(loading === true) {
        return renderLoading();
    }

    if(error === true) {
        return renderError();
    }

    return renderNormal();



}