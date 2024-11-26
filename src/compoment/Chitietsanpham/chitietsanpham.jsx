import React, { useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import './ctsp.scss';

function CTSP() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productListRef = useRef(null);
    const { ctpsid } = useParams();
    const products = [
        { id: 1, name: 'Iphone 16', price: '25,990,000 VND', img: 'https://cdn.hoanghamobile.com/i/content/Uploads/2024/09/11/iphone-16-pro-natural-titanium-pdp-image-position-1a-natural-titanium-color-vn-vi.jpg' },
        { id: 2, name: 'Iphone 13', price: '15,990,000 VND', img: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/177295_2020.jpg' },
        { id: 3, name: 'Iphone 14', price: '19,990,000 VND', img: 'https://www.istore.pt/media/catalog/product/cache/47a7b1d3a04ad63771ce52f5c8c5c41d/i/p/iphone_14_blue_pdp_image_position-1a__wwen.jpg' },
        { id: 4, name: 'Iphone 15', price: '23,990,000 VND', img: 'https://cdn.hoanghamobile.com/i/content/Uploads/2023/12/18/vn-iphone-15-plus-pink-pdp-image-position-2-design-hhm.jpg' },
        { id: 5, name: 'Iphone 15', price: '23,990,000 VND', img: 'https://cdn.hoanghamobile.com/i/content/Uploads/2023/12/18/vn-iphone-15-plus-pink-pdp-image-position-2-design-hhm.jpg' },
        { id: 6, name: 'Iphone 15', price: '23,990,000 VND', img: 'https://cdn.hoanghamobile.com/i/content/Uploads/2023/12/18/vn-iphone-15-plus-pink-pdp-image-position-2-design-hhm.jpg' },
        { id: 7, name: 'Iphone 15', price: '23,990,000 VND', img: 'https://cdn.hoanghamobile.com/i/content/Uploads/2023/12/18/vn-iphone-15-plus-pink-pdp-image-position-2-design-hhm.jpg' },
        { id: 8, name: 'Iphone 15', price: '23,990,000 VND', img: 'https://cdn.hoanghamobile.com/i/content/Uploads/2023/12/18/vn-iphone-15-plus-pink-pdp-image-position-2-design-hhm.jpg' }
    ];

    const ctspa = [
        { id: 1, name: 'Iphone 16', price: '25,990,000 VND', img: 'https://cdn.hoanghamobile.com/i/content/Uploads/2024/09/11/iphone-16-pro-natural-titanium-pdp-image-position-1a-natural-titanium-color-vn-vi.jpg' },
        { id: 2, name: 'Iphone 13', price: '15,990,000 VND', img: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/177295_2020.jpg' },
        { id: 3, name: 'Iphone 14', price: '19,990,000 VND', img: 'https://www.istore.pt/media/catalog/product/cache/47a7b1d3a04ad63771ce52f5c8c5c41d/i/p/iphone_14_blue_pdp_image_position-1a__wwen.jpg' },
        // Add more products if needed
    ];

    // Function to handle previous button
    const nextSlide = () => {
        // Move to next product, if at the end, loop back to the first
        const newIndex = (currentIndex + 1) % products.length;
        setCurrentIndex(newIndex);
    };

    // Function to handle the previous slide
    const prevSlide = () => {
        // Move to previous product, if at the start, loop back to the last
        const newIndex = (currentIndex - 1 + products.length) % products.length;
        setCurrentIndex(newIndex);
    };

    // Update the transform of the product list to shift items
    const transformStyle = {
        transform: `translateX(-${currentIndex * 270}px)` // Adjust based on the product width + margin-right
    };

    const ctsp = ctspa.find(item => item.id === parseInt(ctpsid));

    if (!ctsp) {
        return <p>Product not found!</p>; // Handle case when the product doesn't exist
    }



    return (
        <>
            <div className="product-container">
                <div className="product-image">
                    <img src={ctsp.img} alt={ctsp.name} />
                </div>

                <div className="product-details">
                    <h2>{ctsp.name}</h2>
                    <p className="total-price">{ctsp.price}</p>
                    <p className="product-description">
                        Mô tả chi tiết sản phẩm của {ctsp.name}.
                    </p>
                    <div className="quantity-selection">
                        <p>Chọn số lượng:</p>
                        <div className="quantity-controls">
                            <button id="decrease-btn">-</button>
                            <span id="quantity-value">1</span>
                            <button id="increase-btn">+</button>
                        </div>
                    </div>
                    <button className="add-to-cart">Thêm vào giỏ hàng</button>
                    <button className="buy-now">Mua ngay</button>
                </div >
            </div >
            <div className="reviews">
                <h3>Đánh giá từ khách hàng</h3>
                <div className="review">
                    <p><span className="reviewer">Phạm Hữu Lộc:</span> Mình tạm hài lòng với chiếc điện thoại này.</p>
                </div>
                <div className="review">
                    <p><span className="reviewer">Hoàng Huỳnh Đức:</span> Điện thoại mượt mà, chạy rất nhanh và không gặp vấn đề gì trong suốt quá trình sử dụng. Rất đáng tiền!</p>
                </div>
                <div className="review">
                    <p><span className="reviewer">Phạm Đức Lộc:</span> Shop giao hàng hơi lâu nhưng đóng gói cẩn thận.</p>
                </div>
                <div className="review">
                    <p><span className="reviewer">Hoàng văn An:</span> Nhân viên tư vấn nhiệt tình, điện thoại tốt trong tầm giá</p>
                </div>
                <div className="review">
                    <p><span className="reviewer">Đặng Quang Chiến:</span> Sản phẩm tốt!</p>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="related-products">
                <h3>Sản phẩm liên quan</h3>
                <div className="related-products-container">
                    <div className="related-products-list" style={transformStyle} ref={productListRef}>
                        {products.map(product => (
                            <div className="related-product" key={product.id}>
                                <img src={product.img} alt={product.name} />
                                <div className="related-product-details">
                                    <h4>{product.name}</h4>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Carousel controls */}
                    <div className="carousel-controls">
                        <button onClick={prevSlide}>{"<"}</button>
                        <button onClick={nextSlide}>{">"}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CTSP;
