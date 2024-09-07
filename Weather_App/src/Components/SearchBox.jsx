import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"

import { useState } from 'react';

function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "11c43e3ed5ed324cfefd8d2e771a924c";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod === "404") {
                // Handle city not found case
                setError(true);
                return null;
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            return result;
        } catch (err) {
            // Handle general fetch error
            setError(true);
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false); // Reset error on input change
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City" 
                    variant="outlined" 
                    color="warning" 
                    required 
                    value={city} 
                    onChange={handleChange} 
                />
                <br /><br />
                <Button 
                    variant="contained" 
                    endIcon={<SendIcon />} 
                    onClick={handleSubmit}
                >
                    Send
                </Button>
                {error && <p style={{color : "red"}}>No such place exists !!</p>}
            </form>
        </div>
    );
}

export default SearchBox;
