import React from 'react'
import { LiaThermometerEmptySolid } from "react-icons/lia";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";



function TempAndDets({weather: {icon, temp, details, feels_like, humidity, speed, sunset, sunrise, temp_max, temp_min}}) {

    const verticalDetails = [
        {
            Icon: LiaThermometerEmptySolid,
            title: "Real Feel",
            value: `${feels_like.toFixed()}°C`,
            id: 1
        },
        {
            Icon: BiSolidDropletHalf,
            title: "Humdity",
            value: `${humidity}%`,
            id: 2
        },
        {
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()} km/hr`,
            id: 3
        }
    ];
    const HorizontalDetails = [
        {
            Icon: GiSunrise,
            title: "Sunrise",
            value: `${sunrise}`,
            id: 1
        },
        {
            Icon: GiSunset,
            title: "Sunset",
            value: `${sunset}`,
            id: 2
        },
        {
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}°C`,
            id: 3
        },
        {
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}°C`,
            id: 4
        }
    ];

  return (
    <div>
        <div className=" flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
        </div>

        <div className='flex flex-row items-center justify-between'>
        <img src= {icon} />
        <p className='text-5xl'>{temp.toFixed()}°C</p>

        <div className='flex flex-col justify-start items-start'>
        {verticalDetails.map((details) => (
            <div className='flex flex-row items-center justify-center' key={details.id}>
            <details.Icon size={18} className='mr-1'/>
            {details.title}: <span className='ml-2 text-md font-normal'>{details.value}</span>
            </div>
        ))}
        </div>
        </div>

        <div className='flex flex-row justify-between items-center py-12'>
            {HorizontalDetails.map((hrzdet) => (
                <div className='flex flex-row items-center justify-center' key={hrzdet.id}>
                <hrzdet.Icon size={18} className='mr-1'/>
                {hrzdet.title}: <span className='ml-2 text-md font-normal'>{hrzdet.value}</span>
                </div>
            ))}
        </div>

    </div>
  )
}

export default TempAndDets