import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bio from "./assets/sections/Bio"
import Skills from './assets/sections/Skills'

function App() {

  return (
    <>
      
     <div className="container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7">
      <div className=' '>
        <Bio/>
        <Skills />
        </div>
      <div className='border border-bacground col-span-2'>column-2</div>
     </div>
      
    </>
  )
}

export default App
