import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Input() {

    const continentArray = ["all","africa","america","asia","europe","oceania"]
    const [dropDown, setDropDown] = useState(false)
    const [selectedContinent, setSelectedContinent] = useState("")


    return (
        <main className='flex justify-between px-[50px] py-[40px]'>
           
            <div className='bg-[#2b3945] w-[25%] h-[43px] rounded-[5px] border-none algin-center items-center'>
                <input type="text" name="" id="" placeholder='Search for a country...' className='outline-none px-[15px] text-white w-[100%] h-[43px] ' />
            </div>
        <div className='flex flex-col relative w-[180px]'>
                <div onClick={() => setDropDown(!dropDown) } className='flex justify-between items-center bg-[#2b3945] gap-[10px] cursor-pointer px-[10px] rounded-[5px] py-[5px] mb-[5px]'>
                    <h1 className='text-white font-[500] capitalize'>{selectedContinent ? selectedContinent : 'Filter by Region'} </h1>
                    <RiArrowDropDownLine className='text-white text-[30px]' />
                </div>
                {
                    dropDown &&
                    <div className='bg-[#2b3945] rounded-[5px] grid grid-cols-1 absolute w-full top-[45px]'>
                        {
                            continentArray.map((continent, index) => (
                                <p onClick={() => {
                                    setSelectedContinent(continent)
                                    setDropDown(false)
                                }} className='text-white font-[500] capitalize py-[5px] px-[10px] hover:bg-red-600 cursor-pointer'>{continent}</p>
                            ))
                        }
                    </div>
                }
            </div>
        </main >
    )
}
