import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router-dom'

export default function Countryinfo() {

      const [countryInfo, setCountryInfo] = useState()
      const { countryName } = useParams()
      const navigate = useNavigate()
      async function getCountryInfo(){
        
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const data = await response.json()
        setCountryInfo(data[0]);
        console.log(data);
      }
  
  
      useEffect(() => {
        getCountryInfo()
      },[])


  return (
    <section className='bg-[#202c37] py-[20px]  md:px-[70px] md:py-[80px]'>
      <div className='inline-flex px-[20px] py-[10px] md:gap-[8px] md:px-[20px] bg-[#2b3945] text-center items-center rounded-[5px] ml-[1.7rem] md:ml-[3.3rem] md:mb-[7rem]'>
        <FaArrowLeftLong className='text-[12px] text-white' />
        <h1 className='text-white cursor-pointer'onClick={() => navigate("/")}>Back</h1>
      </div>
      <div className='h-[100vh] flex flex-col px-[30px]  md:gap-[10rem]'>
        <img src={countryInfo?.flags.svg} alt="" className='py-[20px] md:w-[350px] h-[300px] md:ml-[3rem]' />
        <div className='flex '>
          <div className='flex gap-[2rem] md:gap-[5rem] '>
            <div className='md:mt-[2rem]'>
              <h1 className='text-[23px] font-[700] md:text-[50px] md:font-[500] text-white'>{countryInfo?.name.common}</h1>
              <p className='md:text-[18px] font-[500] text-white'>Native Name: <span className='text-[15px] text-[#858585]'> {countryInfo?.population.toLocaleString()} </span></p>
              <p className='md:text-[18px] font-[500] text-white'>Population: <span className='text-[15px] text-[#858585]'>11,319,511</span></p>
              <p className='md:text-[18px] font-[500] text-white'>Region: <span className='text-[15px] text-[#858585]'> {countryInfo?.region} </span></p>
              <p className='md:text-[18px] font-[500] text-white'>Sub Region: <span className='text-[15px] text-[#858585]'> {countryInfo?.subregion} </span></p>
              <p className='md:text-[18px] font-[500] text-white'>Capital: <span className='text-[15px] text-[#858585]'> {countryInfo?.capital} </span></p>
            </div>
            <div className='mt-[2rem] md:mt-[7rem]'>
              <p className='md:text-[18px] font-[500] text-white'>Top Level Domain: <span className='text-[15px] text-[#858585]'> {countryInfo?.tld} </span></p>
              <p className='md:text-[18px] font-[500] text-white'>Currencies: <span className='text-[15px] text-[#858585]'> {} </span></p>
              <p className='md:text-[18px] font-[500] text-white'>Languages: <span className='text-[15px] text-[#858585]'>Dutch, French,German</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
