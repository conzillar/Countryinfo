import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Input from '../component/Input'
import { Link } from 'react-router-dom'

export default function Main() {

    const [contries, setContries] = useState()

    async function getCountries(){
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setContries(data)
    }


    useEffect(() => {
        getCountries()
    },[])

  return (
    <>
        <Navbar />
        <Input />
        <section className=' px-[50px] grid grid-cols-4 gap-[10px] items-center align-center'>
            {
                contries?.map((country, index) => (
                    <Link to={`/countryinfo/${country.name.common}`} className='pb-[1rem] w-[300px] h-[350px] cursor-pointer' key={index}>
                        <img src= {country.flags.svg} className='w-[300px] h-[200px] object-cover' alt="" />
                        <div className='bg-[#2b3945] w-[300px] px-[20px] pb-[1rem]'>
                            <h1 className='text-[18px] font-[500] text-white py-[5px]'>{country.name.common}</h1>
                            <p className='text-white'>Population: <span className='text-[#858585]'>{country.population.toLocaleString()}</span></p>
                            <p className='text-white'>Region: <span className='text-[#858585]'> {country.region} </span></p>
                            <p className='text-white'>Capital: <span className='text-[#858585]'> {country.capital} </span></p>
                        </div>
                    </Link>
                ))
            }
        </section>
    </>
  )
}
