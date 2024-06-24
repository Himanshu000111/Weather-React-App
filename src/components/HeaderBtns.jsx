import React from 'react'

function HeaderBtns({setQuery}) {

const cities = [
  {
    name: ''
  }
]

  return (
    <div className='links flex gap-10 items-center justify-around my-6'>
    {[{name: 'London', id: 1}, {name: 'Sydney', id: 2}, {name: 'Tokyo', id: 3}, { name: 'Paris', id: 4}, {name: 'Torronto', id:     
     5}].map((city)=>(<button key={city.id} className = {`text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-l transition ease-in`} 
       onClick={() => setQuery({q: city.name})}>
      {city.name}
      </button>))} 
    </div>
  )
}

export default HeaderBtns
