import React from 'react'
import './gioithiu.scss'
function GioiThieu() {

    const testimonialsData = [
        { text: "Không tệ chút nào", author: "XXX" },
        { text: "Không tệ chút nào", author: "XXX" },
        { text: "Không tệ chút nào", author: "XXX" },
    ];
    return (
        <>
            <section className='baner'>

                <div className="baner-image">
                    <img src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/14/shop14_home_slider1.jpg" alt="" />
                </div>
                <div className="baner-text">
                    <p className="small-text">Totally Wireless High-Performance</p>
                    <h1 className="main-text">SELECT HEADPHONES</h1>
                    <h2 className="discount-text">30% OFF</h2>
                    <p className="price">
                        <span>STARTING AT</span>
                        <span className="price-tag">$199<sup>99</sup></span>
                        <button className="shop-now">SHOP NOW!</button>
                    </p>

                </div>
            </section>
            <section className="hero">
                <div className="hero-item">
                    <img src="https://www.portotheme.com/magento/porto/media/wysiwyg/porto/homepage/slider/09/layer4.png" alt="" />

                    <button>Buy now</button></div>
                <div className="hero-item">
                    <img src="https://www.portotheme.com/magento/porto/media/wysiwyg/porto/homepage/slider/09/layer4.png" alt="" />
                    <button>Buy now</button></div>
            </section>

            <section className="founders">
                <h2>Những Người Sáng Lập</h2>
                <div className="founder-cards">
                    <div className="founder-card">
                        <img src="https://taiphatgroup.vn/media/banner/17_Sep0e311e11321467ea997df43ba5f9eea5.jpg" alt="" />
                        <div className='name'>
                            <span>NGUYỄN VĂN A</span>
                        </div>

                    </div>
                    <div className="founder-card">
                        <img src="https://taiphatgroup.vn/media/banner/17_Sep0e311e11321467ea997df43ba5f9eea5.jpg" alt="" />
                        <div className='name'>
                            NGUYỄN VĂN A
                        </div>
                    </div>
                    <div className="founder-card">
                        <img src="https://taiphatgroup.vn/media/banner/17_Sep0e311e11321467ea997df43ba5f9eea5.jpg" alt="" />
                        <div className='name'>
                            NGUYỄN VĂN A
                        </div>
                    </div>
                    <div className="founder-card">
                        <img src="https://taiphatgroup.vn/media/banner/17_Sep0e311e11321467ea997df43ba5f9eea5.jpg" alt="" />
                        <div className='name'>
                            NGUYỄN VĂN A
                        </div>
                    </div>
                </div>
            </section>



            <div className="testimonials">
                <h2>Chứng Thực</h2>
                <div className="testimonial-list">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <div className="testimonial-icon">
                                <div className="icon-circle"></div>
                                <span className="quote">“</span>
                            </div>
                            <div className="kh">
                                <p className="testimonial-text">{testimonial.text}</p>
                                <span className="testimonial-author">{testimonial.author}</span>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default GioiThieu