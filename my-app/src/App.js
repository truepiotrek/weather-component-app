import './App.css';
import React from 'react';
import AddNewCity from "./AddNewCity";
import List from "./List";

export default function App(props) {

    function addNewCityToList() {
        console.log('adding new city to the list')
    }

    return (
        <div className="App">
            <div className="App-body">
                <p>
                    WIELKA APLIKACJA POGODOWA
                </p>
                <div>
                    <List />
                    <AddNewCity onAdd={addNewCityToList}/>
                </div>
            </div>
        </div>
    );
}
