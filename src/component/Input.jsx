import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Input() {
    return (
        <main className='flex justify-between px-[50px] py-[40px]  '>
            <div className='bg-[#2b3945] w-[25%] h-[43px] rounded-[5px] border-none algin-center items-center'>
                <input type="text" name="" id="" placeholder='Search for a country...' className='outline-none px-[15px] text-white w-[100%] h-[43px] ' />
            </div>
            <div className='flex flex-col'>
                <div className='flex items-center bg-[#2b3945] gap-[10px]  px-[10px] rounded-[5px] py-[5px] mb-[5px]'>
                    <h1 className='text-white font-[500]'> Filter by Region</h1>
                    <RiArrowDropDownLine className='text-white text-[30px]' />
                </div>
                <div className='bg-[#2b3945] rounded-[5px] px-[10px] grid grid-cols-1'>
                    <a href="" className='text-white font-[500]'>Africa</a>
                    <a href="" className='text-white font-[500]'>America</a>
                    <a href="" className='text-white font-[500]'>Asia</a>
                    <a href="" className='text-white font-[500]'>Europe</a>
                    <a href="" className='text-white font-[500]'>Oceania</a>
                </div>
            </div>
        </main >
    )
}
