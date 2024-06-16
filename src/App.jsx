import React from 'react'
import HeaderBtns from './components/HeaderBtns'
import Input from './components/Input'
import TimeandLoc from './components/TimeandLoc'
import TempAndDets from './components/TempAndDets'

function App() {
  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
      <HeaderBtns />
      <Input />
      <TimeandLoc />
      <TempAndDets />
    </div>
  )
}

export default App