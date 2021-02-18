import './App.css';
import React, {useState} from 'react';
import AddNewCity from "./AddNewCity";
import ShowWeatherInCity from "./CityWeatherComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function App(props) {
    let cityListFromLocalStorage = JSON.parse(localStorage.getItem("lista_miast"))
    if(!Array.isArray(cityListFromLocalStorage)) {
        cityListFromLocalStorage = [];
    }

    const [cityList, updateCityList] = useState(cityListFromLocalStorage);

    function saveCityListToLocalStorage(updatedCityList) {
        localStorage.setItem('lista_miast', JSON.stringify(updatedCityList))
    }

    function renderIfThereAreCities() {
        if(cityList.length === 0) {
            return (
                <div className="default-message">Brak miast do wyświetlenia</div>
            );
        }

        return (
            <div>
            {cityList && cityList.map(function(item, index) {
                return (
                    <div className="city-container" key={index + ' ' + item}><ShowWeatherInCity cityName={item}/>
                        <button className="city-removal" onClick={removeCityFromList}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                );
            })}
            </div>
        );
    }

    function addNewCityToCityList(cityName) {
        let clonedCityList = [...cityList]

        clonedCityList.push(cityName);
        updateCityList(clonedCityList);

        saveCityListToLocalStorage(clonedCityList);
    }

    function removeCityFromList(index) {
        let clonedCityList = [...cityList];
        clonedCityList.splice(index, 1);
        updateCityList(clonedCityList);

        saveCityListToLocalStorage(clonedCityList);
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
