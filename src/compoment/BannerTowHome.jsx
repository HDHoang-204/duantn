import React from 'react'
import Banner2 from '../assets/banner2.png'

export const BannerTowHome = () => {
  return (
     <div className='w-full py-5 justify-between flex  '>
        <div className='w-[49%]  hover:translate-y-3 duration-500 transform h-200px'>
           <img alt='' src={Banner2} ></img>
        </div>
        <div className='w-[49%]  hover:translate-y-3 duration-500 h-200px'>
           <img alt='' src={Banner2} ></img>
        </div>
     </div>
  )
}
