import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

export default function Countryinfo() {
  return (
    <section className='bg-[#202c37] px-[70px] py-[80px]'>
      <div className='inline-flex gap-[8px] px-[20px] bg-[#2b3945] text-center items-center rounded-[5px] ml-[3.3rem] mb-[7rem]'>
        <FaArrowLeftLong className='text-[12px] text-white' />
        <h1 className='text-white'>Back</h1>
      </div>
      <div className='h-[100vh] flex  gap-[10rem]'>
        <img src="images.jpeg" alt="" className='w-[350px] h-[300px] ml-[3rem]' />
        <div className='flex '>
          <div className='flex gap-[5rem] '>
            <div className='mt-[2rem]'>
              <h1 className='text-[50px] font-[500] text-white'>Belgium</h1>
              <p className='text-[18px] font-[500] text-white'>Native Name: <span className='text-[15px] text-[#858585]'>Belgie</span></p>
              <p className='text-[18px] font-[500] text-white'>population: <span className='text-[15px] text-[#858585]'>11,319,511</span></p>
              <p className='text-[18px] font-[500] text-white'>Region: <span className='text-[15px] text-[#858585]'>Europe</span></p>
              <p className='text-[18px] font-[500] text-white'>Sub Region: <span className='text-[15px] text-[#858585]'>Western Europe</span></p>
              <p className='text-[18px] font-[500] text-white'>Capital: <span className='text-[15px] text-[#858585]'>Brussels</span></p>
            </div>
            <div className='mt-[7rem]'>
              <p className='text-[18px] font-[500] text-white'>Top Level Domain: <span className='text-[15px] text-[#858585]'>Be</span></p>
              <p className='text-[18px] font-[500] text-white'>Currencies: <span className='text-[15px] text-[#858585]'>Euro</span></p>
              <p className='text-[18px] font-[500] text-white'>Languages: <span className='text-[15px] text-[#858585]'>Dutch, French,German</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
