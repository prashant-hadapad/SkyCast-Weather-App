import React from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
    temp: 16.05,
    humidity: 77,
    pressure: 1017,
    feels_like: 15.72,
    temp_min: 16.05,
    temp_max: 16.05,
    wind_speed: 0,
    description: "mist",
    city: "Delhi",
    country: "IN",
  });


  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }

    return(
        <div style={{textAlign:"center"}}>
            
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}