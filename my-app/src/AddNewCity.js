import React, {useEffect, useState} from 'react';
import axios from "axios";
import './AddNewCity.css';

export default function AddNewCityToList() {

    const [input, setInput] = useState("np. Białystok")

    return (
        <div>
            <form>
                <label for="city-name">Dodaj miasto</label>
                <input type="text" id="city-to-add" /><br />
            </form>
        </div>
    );
}