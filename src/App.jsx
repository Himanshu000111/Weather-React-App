import React, { useEffect, useState } from 'react'
import HeaderBtns from './components/HeaderBtns'
import Input from './components/Input'
import TimeandLoc from './components/TimeandLoc'
import TempAndDets from './components/TempAndDets'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/WeatherService'

function App() {

  const [query, setQuery] = useState({q: "Karnal"})
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
     await getFormattedWeatherData(query, units).then((data) => 
    {setWeather(data); 
      console.log(data)   
    })
  };

  useEffect(() => {
    getWeather()
  }, [query, units])

  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
      <HeaderBtns setQuery = {setQuery} />
      <Input setQuery= {setQuery} units= {setUnits}/>

      {weather && (
    <>  
     <TimeandLoc weather={weather} />
     <TempAndDets weather = {weather} />
     <Forecast title = {'3 Hours Step Forecast'} data = {weather.hourly} />
     <Forecast title = {'3 Days Step Forecast'} data = {weather.daily}/>
     </>
      )}
 
    </div>
  )
}

export default App