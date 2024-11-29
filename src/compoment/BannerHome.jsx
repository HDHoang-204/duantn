import React from 'react'
import Banner1 from '../assets/Banner1.jpg'
import { Carousel } from 'antd';
export const BannerHome = () => {
  return (
    <Carousel className='mt-[80px]' autoplay>
    <div>
      <h3  style={contentStyle}>
      <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/11/07/banner-asus-zenbook-1-1200x375.png" alt="Trang Chủ" style={{ width: "100%", height: "auto" }} />
      </h3>
    </div>
    <div>
      <h3  style={contentStyle}>
      <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/11/25/tab-lenovo-1200x375.png" alt="Trang Chủ" style={{ width: "100%", height: "auto" }} />
      </h3>
    </div>
    <div>
      <h3   style={contentStyle}>
      <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/11/01/banner-watch-d2-1200x375.jpg" alt="Trang Chủ" style={{ width: "100%", height: "auto" }} />
      </h3>
    </div>
    <div>
      <h3  style={contentStyle}>
      <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/11/28/14c-2-790-1200x375.png" alt="Trang Chủ" style={{ width: "100%", height: "auto" }} />
      </h3>
    </div>
  </Carousel>
  )
}


const contentStyle = {
    
    color: '#fff',
   
    textAlign: 'center',
    background: '#364d79',
  };
