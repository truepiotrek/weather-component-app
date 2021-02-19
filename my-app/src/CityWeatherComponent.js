import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "react-loader-spinner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function ShowWeatherInCity(props) {

    const [temperature, setTemperature] = useState(0);
    const [city, setCity] = useState(0);
    const [description, setDescription] = useState(0);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + props.cityName + '&appid=818c22ea71e55d4533a6c533966f8bcb&units=metric&lang=pl')
            .then(function (response) {
                setCity(response.data.name);
                setTemperature(response.data.main.temp);

                if (Array.isArray(response.data.weather)) {
                    console.log("array is in fact an array");

                    let tablica = response.data.weather;

                    if (tablica.length > 0) {
                        setDescription(tablica[0].description);
                    }
                } else {
                    console.log("this is not an array");
                }

                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
                setError(true);
                console.log(error);
            })
    }, [props.cityName]);

    function renderLoading() {
        return (
            <Loader
                type="Puff"
                color="white"
                height={100}
                width={100}
                timeout={3000}
            />
        )
    }

    function renderError() {
        return "Ups, coś poszło nie tak";
    }

    function renderNormal() {
        return (
            <div className="city-container">
                <>
                    Miasto/region: {city} <br />
                    Temperatura: {temperature} stopni Celsjusza
                    Pogoda: {description}
                </>
                <button className="city-removal" onClick={cityDeleteHandler}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        );
    }

    function cityDeleteHandler(event) {
        if (typeof props.onClickDelete == 'function') {
            confirmAlert({
                title: "Potwierdź aby usunąć",
                message: "Czy na pewno usunąć?",
                buttons: [
                    {
                        label: "Tak",
                        onClick: () => props.onClickDelete(props.deleteIndex)
                    },
                    {
                        label: "Nie"
                    }
                ]
            })
        }
    }

    if (loading === true) {
        return renderLoading();
    }

    if (error === true) {
        return renderError();
    }

    return renderNormal();

}