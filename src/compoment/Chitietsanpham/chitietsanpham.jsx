import './ctsp.scss'
import React from 'react'

function CTSP() {
    return (
        <>
            <div className="product-container">
                <div className="product-image">
                    <img src="https://cdn.hoanghamobile.com/i/content/Uploads/2024/09/11/iphone-16-pro-natural-titanium-pdp-image-position-1a-natural-titanium-color-vn-vi.jpg" alt="" />
                </div>

                <div className="product-details">
                    <h2>Iphone 16 Pro Max</h2>
                    <p className="total-price">25,990,000 VND</p>
                    <p className="product-description">
                       <h1>Iphone 16 Promax</h1>
        <p>
            Sản phẩm với thiết kế sang trọng, màn hình tràn viền, camera sắc nét,
            iOS mượt mà và hiệu năng mạnh mẽ.
          </p>
          <h2>Cấu hình & Bộ nhớ</h2>
          <ul>
            <li>Hệ điều hành: iOS 18</li>
            <li>Chip xử lý (CPU): Apple A18 Pro 6 nhân</li>
            <li>Dung lượng pin - Tốc độ sạc: 4.400 mAh - 27 W</li>
            <li>Chip đồ họa (GPU): Apple GPU 6 nhân</li>
            <li>RAM: 8 GB</li>
            <li>Dung lượng lưu trữ: 128 GB</li>
            <li>Màn hình: 6.3 inch - 120 Hz</li>
          </ul>
          <div className="price-section">
            <p className="price">25,990,000 VND</p>
            <div className="quantity-section">
              <label>Chọn số lượng:</label>
              <input type="number" min="1" defaultValue="1" />
            </div>
          </div>
                        <div className="quantity-controls">
                            <button id="decrease-btn">-</button>
                            <span id="quantity-value">1</span>
                            <button id="increase-btn">+</button>
                        </div>
                    </div>
                    <button className="add-to-cart">Thêm vào giỏ hàng</button>
                    <button className="buy-now">Mua ngay</button>
                </div>
            </div>

            <div className="reviews">
                <h3>Đánh giá từ khách hàng</h3>
                <div className="review">
                    <p><span className="reviewer">Phạm Hữu Lộc:</span> Mình tạm hài lòng với chiếc điện thoại này.</p>
                </div>
                <div className="review">
                    <p><span className="reviewer">Hoàng Huỳnh Đức:</span> Điện thoại mượt mà, chạy rất nhanh và không gặp vấn đề gì
                        trong suốt quá trình sử dụng. Rất đáng tiền!</p>
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

        </>
    )
}

export default CTSP
