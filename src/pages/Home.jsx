import React from 'react'
import { BannerHome } from '../compoment/BannerHome'
import { ProductHot } from '../compoment/ProductHot'
import { BannerTowHome } from '../compoment/BannerTowHome'
import { ProductsStandOut } from '../compoment/ProductsStandOut'


export const Home = () => {
  return (
   <>
   <div className='w-full flex flex-col justify-center items-center bg-slate-100'>
   <div className='w-[90%] '>
   <BannerHome/>
   <ProductHot/>
   <BannerTowHome/>
   <ProductsStandOut/>
   </div>
   </div>
   </>
  )
}
