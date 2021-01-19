import React, {useState} from 'react';
import './AddNewCity.css';

export default function AddNewCityToList(props) {

    const [input, setInput] = useState("")

    function handleInputChange(event){
        setInput(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if(input === ''){
            console.log('Nie podano miasta, uzupełnij proszę')
        } else {
            if (typeof props.onAdd === 'function') {
                props.onAdd(input);
            }
            console.log('beep');
            setInput('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Dodaj miasto</label>
                <input type="text" id="city-to-add" value={input} placeholder="np. Białystok" onChange={handleInputChange}/><br />
                <input type="button" value="Dodaj" className="button-add" onClick={handleSubmit}/>
            </form>
        </div>
    );
}