import React from 'react'

function Forecast() {
    const data = [1,2,3,4,5]
    return (
    <div>
        <div className='flex items-center justify-start mt-6'>
        <p className='font-medium uppercase'>3 hour  step forecast</p>
        </div>
        <hr className='my-1' />

        <div className='flex items-center justify-between'>
        {data.map((weatherdata, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>Wed</p>
                <img src='https://openweathermap.org/img/wn/01d@2x.png' />
                <p className='font-medium'>12°</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Forecast