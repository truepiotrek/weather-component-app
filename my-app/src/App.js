import './App.css';
import React, {useState} from 'react';
import AddNewCity from "./AddNewCity";
import ShowWeatherInCity from "./CityWeatherComponent";

export default function App(props) {
    let cityListFromLocalStorage = JSON.parse(localStorage.getItem("lista_miast"))
    console.log("this is your city list " + cityListFromLocalStorage);


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

        saveCityListToLocalStorage(clonedCityList);
        console.log("system push to local storage " + clonedCityList)
    }

    function removeCityFromList(index) {
        let clonedCityList = [...cityList];
        clonedCityList.splice(index, 1);
        updateCityList(clonedCityList);

        saveCityListToLocalStorage(clonedCityList);
        console.log("removing from city list " + clonedCityList)
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
