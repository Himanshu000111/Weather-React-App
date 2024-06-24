import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdLocationSearching } from "react-icons/md";

function Input({setQuery, setUnits}) {
  const [city, setCity] = useState("")
  const handleSearchClick = () => 
    {
     if (city !== "") setQuery({q: city});
    };

    const handleGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const {longitude, latitude} = position.coords
          setQuery({lat: latitude, lon: longitude })
        })
      }
    }
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='flex justify-center items-center flex-row w-3/4 space-x-4'>
            <input type='search'
             value={city} 
             placeholder='search your city'
             onChange={(e) => (setCity(e.currentTarget.value))}
            className='w-full text-gray-500 text-xl font-light p-2 shadow-xl capitalize focus: outline-none placeholder:lowercase' />
        

        <CiSearch size={30} onClick={handleSearchClick} className='cursor-pointer transition ease-out hover:scale-125'/>

        <MdLocationSearching size={30} onClick={handleGeolocation} className='cursor-pointer transition ease-out hover:scale-125' />
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'> 
            <button className='text-2xl font-medium transition ease-out hover:scale-125'>°C</button>
            <p className='text-2xl font-medium mx-1'>|</p>
            <button className='text-2xl font-medium transition ease-out hover:scale-125'>°F</button>
        </div>
        </div>
        


        

  )
}

export default Input