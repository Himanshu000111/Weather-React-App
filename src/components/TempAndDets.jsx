import React from 'react'
import { LiaThermometerEmptySolid } from "react-icons/lia";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";



function TempAndDets() {

    const verticalDetails = [
        {
            Icon: LiaThermometerEmptySolid,
            title: "Real Feel",
            value: '35°',
            id: 1
        },
        {
            Icon: BiSolidDropletHalf,
            title: "Real Feel",
            value: '34%',
            id: 2
        },
        {
            Icon: FiWind,
            title: "Real Feel",
            value: '11 km/hr',
            id: 3
        }
    ];
    const HorizontalDetails = [
        {
            Icon: GiSunrise,
            title: "Sunrise",
            value: '05:33 AM',
            id: 1
        },
        {
            Icon: GiSunset,
            title: "Sunset",
            value: '08:33 PM',
            id: 2
        },
        {
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: '37°',
            id: 3
        },
        {
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: '7°',
            id: 4
        }
    ];

  return (
    <div>
        <div className=" flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Rain</p>
        </div>

        <div className='flex flex-row items-center justify-between'>
        <svg data-v-5ed3171e="" width="50px" height="50px" viewBox="0 0 148 148" ><path d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117" fill="#f15d46"></path></svg>
        <p className='text-5xl'>34°</p>

        <div className='flex flex-col justify-start items-start'>
        {verticalDetails.map((details) => (
            <div className='flex flex-row items-center justify-center'>
            <details.Icon size={18} className='mr-1'/>
            {details.title}: <span className='ml-2 text-md font-normal'>{details.value}</span>
            </div>
        ))}
        </div>
        </div>

        <div className='flex flex-row justify-between items-center py-12'>
            {HorizontalDetails.map((hrzdet) => (
                <div className='flex flex-row items-center justify-center'>
                <hrzdet.Icon size={18} className='mr-1'/>
                {hrzdet.title}: <span className='ml-2 text-md font-normal'>{hrzdet.value}</span>
                </div>
            ))}
        </div>

    </div>
  )
}

export default TempAndDets