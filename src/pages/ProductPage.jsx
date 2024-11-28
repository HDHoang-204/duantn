import React from 'react'
import { BannerTowProduct } from '../compoment/BannerTowProduct'
import { CategoryMain } from '../compoment/CategoryMain'
import { ProductMain } from '../compoment/ProductMain'
import { Pagination } from 'antd';
export const ProductPage = () => {
  return (
   <>
     <div className='w-full mt-[70px] flex flex-col justify-center items-center'>
       <div className='w-[90%]'>
       <BannerTowProduct/>
       <CategoryMain/>
       <ProductMain/>
       <div className='w-full mb-5 flex justify-center items-center'>
       <Pagination defaultCurrent={1} total={50} />
       </div>
       </div>
     </div>
     
   </>
  )
}
