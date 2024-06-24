import React from 'react'

const TimeandLoc = ({weather : {formattedLoacalTime, name, country}}) => {
  return (
    <div>
        <div className='flex justify-center items-center  pt-8 '>
            <p className='font-light'>
              {formattedLoacalTime}</p>
        </div>
        <div className='flex justify-center items-center pt-8 '>
            <p className='text-[2vw] font-semibold'>{name}, {country}</p>
        </div>
    </div>
  )
}

export default TimeandLoc