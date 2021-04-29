import React, { useEffect, useState } from "react";
import Card from "./Card";
const Weather = ({ fetchCity,city }) => {
  const [cityData, setCityData] = useState(null);
  const [Temp, setTemp] = useState(null);
  const [Pressure, setPressure] = useState(null);
  const [Humidity, setHumidity] = useState(null);
  const [Sunrise, setSunrise] = useState(null);
  const [Sunset, setSunset] = useState(null);
  const [Error, setError]=useState("")
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${fetchCity}&appid=179e1df4ea7a105c0a9bcffb33c6e557`;
     
      
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
      const resJson = await response.json();
      setCityData(resJson);
    }
      else {
        setError("Data Not Found")
      }
           
         
            
          
    }
    fetchApi();
  }, [fetchCity]);
  useEffect( ()=> {
   
       
       if(cityData) {
        setTemp(cityData.main.temp);
        setPressure(cityData.main.pressure);
        setHumidity(cityData.main.humidity);
        setSunrise(cityData.sys.sunrise);
        setSunset(cityData.sys.sunset);
        setError("")
       }
        
      
       
  }, [cityData])
  
  return (
    Error===""?
    <Card
      Temp={Temp}
      Pressure={Pressure}
      Humidity={Humidity}
      Sunrise={Sunrise}
      Sunset={Sunset}
    />: <p>{Error}</p>
  );
};

export default Weather;
