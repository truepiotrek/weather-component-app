import './App.css';
import React, {useState} from 'react';
import AddNewCity from "./AddNewCity";
// import Dump from "./dump";
import ShowWeatherInCity from "./CityWeatherComponent";

export default function App(props) {
    const [cityList, updateCityList] = useState(['Warszawa']);

    function renderIfThereAreCities() {
        if(cityList.length === 0) {
            return (
                <div className="default-message">Brak miast do wyświetlenia</div>
            );
        }

        return (
            <div>
            {cityList && cityList.map(function(item, index) {
                return (<div className="city-container" key={index + ' ' + item}><ShowWeatherInCity cityName={item}/>
                <a href="#" className={"city-removal"} onClick={removeCityFromList}>
                    remove city [x]
                </a>
                </div>);
            })}
            </div>
        );
    }

    function addNewCityToCityList(cityName) {
        let clonedCityList = [...cityList]

        clonedCityList.push(cityName);
        updateCityList(clonedCityList);
    }

    function removeCityFromList(index) {
        let cityItem = [...cityList];
        cityItem.splice(index, 1);
        updateCityList(cityItem);
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
