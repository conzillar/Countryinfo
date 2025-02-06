import React from 'react'
import { IoMoonSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className='flex justify-between px-[50px] py-[20px] bg-[#2b3945]'>
      <div>
        <h1 className='text-white font-[500]'>Where in the world</h1>
      </div>
      <div className='flex items-center gap-[1rem]'>
      <IoMoonSharp className='text-white' />
      <h2 className='text-white font-[500]'>Dark Mood</h2>
      </div>
    </nav>
  )
}
