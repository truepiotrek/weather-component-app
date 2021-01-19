import './App.css';
import React from 'react';
import ShowWeatherInCity from "./CityWeatherComponent";

export default function App(props) {
    return (
        <div className="App">
            <div className="App-body">
                <p>
                    WIELKA APLIKACJA POGODOWA
                </p>
                <div>
                    {/*<ShowWeatherInCity cityName="Zawory,pl"/> <br />*/}
                    "testing testing one two three"
                </div>
            </div>
        </div>
    );
}
