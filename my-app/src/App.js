import './App.css';
import React from 'react';
import CityComponent from "./CityWeatherComponent";

function App() {
    return (
        <div className="App">
            <div className="App-body">
                <p>
                    WIELKA APLIKACJA POGODOWA
                </p>
                <p>
                    [placeholder na miasto]
                    <CityComponent />
                </p>
            </div>
        </div>
    );
}

export default App;
