import './App.css';
import React from 'react';
import ShowWeatherInCity from "./CityWeatherComponent";

export default function App() {
    return (
        <div className="App">
            <div className="App-body">
                <p>
                    WIELKA APLIKACJA POGODOWA
                </p>
                <div>
                    <ShowWeatherInCity />
                </div>
            </div>
        </div>
    );
}
