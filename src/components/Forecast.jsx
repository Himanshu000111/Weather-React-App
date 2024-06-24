import React from 'react'

function Forecast({title, data}) {
    return (
    <div>
        <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-1' />

        <div className='flex items-center justify-between'>
        {data.map((weatherdata, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>{weatherdata.title}</p>
                <img src= {weatherdata.icon}/>
                <p className='font-medium'>{weatherdata.temp.toFixed()}°C</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Forecast