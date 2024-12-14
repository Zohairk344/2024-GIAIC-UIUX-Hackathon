import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='hero'>
        <Image src="/background_1.svg" alt="" fill={true} className='bg-img'/>
        <div className="flex justify-between items-center h-screen">
          <div className="w-1/2 mx-12">
          </div>

          <div className="w-1/2 ">
          <div className="w-[650px] h-[465px] bg-[#FFF3E3]">
            <p className="text-lg ml-12 pt-12">New Arrival</p>
            <h1 className="text-5xl mt-2 mx-12 font-bold text-[#B88E2F] w-[400px]">Discover Our New Collection</h1>
            <p className="text-lg mx-12 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="mx-12 mt-16 bg-[#B88E2F] w-56 h-20 font-bold text-white">BUY NOW</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Intro