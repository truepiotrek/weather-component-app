import './App.css';
import React, {useState} from 'react';
import AddNewCity from "./AddNewCity";
import Dump from "./dump";
import ShowWeatherInCity from "./CityWeatherComponent";

export default function App(props) {
    const [cityList, updateCityList] = useState(['Zawory', 'Warszawa']);


    function renderIfThereAreCities() {
        if(cityList.length === 0) {
            return (
                <span className="default-message">Brak miast do wyświetlenia</span>
            );
        }

        return (
            <>
            {cityList && cityList.map(function(item, index) {
                return (<div key={index + ' ' + item}><ShowWeatherInCity cityName={item} /></div>);
            })}
            </>
        );
    }

    function addNewCityToCityList(cityName) {
        console.log('adding new city to the list')

        let clonedCityList = [...cityList]

        clonedCityList.push(cityName);
        updateCityList(clonedCityList);
    }

    return (
        <div className="App">
            <div className="App-body">
                <p>
                    WIELKA APLIKACJA POGODOWA
                </p>
                <div>
                    {renderIfThereAreCities()}
                    <AddNewCity onAdd={addNewCityToCityList}/>
                </div>
            </div>
        </div>
    );
}
