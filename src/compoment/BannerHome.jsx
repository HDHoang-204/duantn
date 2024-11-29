import React from 'react'
import Banner1 from '../assets/Banner1.jpg'
import { Carousel } from 'antd';
export const BannerHome = () => {
  return (
    <Carousel className='mt-[80px]' autoplay>
    <div>
      <h3  style={contentStyle}>
      <img src="https://cdnv2.tgdd.vn/mwg-static/dmx/Banner/3b/47/3b479a61878418e3629e8c3d056808d2.png" alt="Trang Chủ" style={{ width: "100%", height: "auto" }} />
      </h3>
    </div>
    <div>
      <h3  style={contentStyle}>2</h3>
    </div>
    <div>
      <h3   style={contentStyle}>3</h3>
    </div>
    <div>
      <h3  style={contentStyle}>4</h3>
    </div>
  </Carousel>
  )
}


const contentStyle = {
    
    color: '#fff',
   
    textAlign: 'center',
    background: '#364d79',
  };
