import './ctsp.scss'

function CTSP() {
    return (
        <>
            <div className="product-container">
                <div className="product-image">
                    <img src="https://cdn.hoanghamobile.com/i/content/Uploads/2024/09/11/iphone-16-pro-natural-titanium-pdp-image-position-1a-natural-titanium-color-vn-vi.jpg" alt="" />
                </div>

                <div className="product-details">
                    <h2>Iphone 9</h2>
                    <p className="total-price">25,990,000 VND</p>
                    <p className="product-description">
                        Sản Phẩm với thiết kế sang trọng, màn hình tràn viền, camera sắc nét và hiệu năng mạnh mẽ.
                        Chạy trên hệ điều hành IOS mới nhất, mượt mà, hỗ trợ đầy đủ các ứng dụng và tiện ích. Đây là sự lựa chọn lý
                        tưởng
                        cho những ai yêu thích công nghệ và cần một chiếc điện thoại đáng tin cậy.
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