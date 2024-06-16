import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdLocationSearching } from "react-icons/md";

function Input() {
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='flex justify-center items-center flex-row w-3/4 space-x-4'>
            <input type='search' placeholder='search your city' 
            className='w-full text-gray-500 text-xl font-light p-2 shadow-xl capitalize focus: outline-none placeholder:lowercase' />
        

        <CiSearch size={30} className='cursor-pointer transition ease-out hover:scale-125'/>

        <MdLocationSearching size={30} className='cursor-pointer transition ease-out hover:scale-125' />
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