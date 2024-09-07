
import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
function WeatherApp() {
    let  [weatherInfo , setWeatherInfo] = useState({

        city : "Kota",
        feelsLike : 24.78,
        temp : 25.05,
        tempMin : 25.05 ,
        tempMax : 25.05,
        humidity : 47,
        weather : "haze"
    })

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return (
    <div>
        <h1 style={{textAlign : "center"}}>Weather App by Rv </h1>

        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />

    </div>
    )
}

export default WeatherApp
