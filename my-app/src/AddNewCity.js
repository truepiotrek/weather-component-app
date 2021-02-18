import React, {useState} from 'react';
import './AddNewCity.css';
import axios from "axios";

export default function AddNewCityToList(props) {

    const [input, setInput] = useState("")
    const [validationStatus, setValidationStatus] = useState(true);

    function handleInputChange(event){
        setInput(event.target.value);
        setValidationStatus(true);
    }

    function handleSubmit(event){
        event.preventDefault();

        if (input === '') {
            console.log('Nie podano miasta, uzupełnij proszę')
        } else {
            handleValidation(input);
        }
    }

    function handleValidation(cityName) {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=818c22ea71e55d4533a6c533966f8bcb&units=metric')
            .then(function(response) {
                setValidationStatus(true);

                if (typeof props.onAdd === 'function') {
                    props.onAdd(response.data.name);
                }
                setInput('');
            })
            .catch(function(validationStatus) {
                setValidationStatus(false);
                console.log(validationStatus);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Dodaj miasto</label>
                <input type="text" id="city-to-add" value={input} placeholder="np. Białystok" onChange={handleInputChange}/><br />
                <input type="button" value="Dodaj" className="button-add" onClick={handleSubmit}/>
            </form>
            {(validationStatus) ? '' : <div className="city-adding-error">
                błędna nazwa miasta, spróbuj ponownie
            </div> }
        </div>
    );
}