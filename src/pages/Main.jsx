import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Input from '../component/Input'
import { Link } from 'react-router-dom'

export default function Main() {

    const [contries, setContries] = useState()
    const [selectedContinent, setSelectedContinent] = useState("")
    const [searchTerm, setSearchTerm] = useState('')

    async function getCountries(){
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setContries(data)
    }

    const getCountriesByContinent = async () => {
        if(selectedContinent !== ""){
            try{
                const response = await fetch(`https://restcountries.com/v3.1/region/${selectedContinent}`);
                const result = await response.json();
                setContries(result)
                // setData(result);
                console.log("Fetched Data:", result);
            } catch (error){
                console.error("Error fetching data:", error)
            }
            
        }
    }


    useEffect(() => {
        getCountries()
    },[])

  return (
    <>
        <Navbar />
        <Input setSearchTerm={setSearchTerm} selectedContinent={selectedContinent} getCountriesByContinent={getCountriesByContinent} setSelectedContinent={setSelectedContinent}/>
        <section className='px-[20px] md:px-[20px] md:ml-[2.3rem] gap-[3rem] md:grid grid-cols-4 md:gap-[10px] md:items-center md:align-center'>
            {
                contries?.filter(country => {
                    if(searchTerm === '') return country
                    else if (country.name.common.toLowerCase().includes(searchTerm.toLowerCase())) return country
                })
                .map((country, index) => (
                    <Link to={`/countryinfo/${country.name.common}`} className=' md:pb-[1rem] md:w-[300px] md:h-[350px] cursor-pointer' key={index}>
                        <img src= {country.flags.svg} className='w-[350px] md:w-[300px] h-[200px] object-cover' alt="" />
                        <div className='bg-[#2b3945] px-[] md:w-[300px] mb-[2rem] md:pb-[1rem]'>
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
