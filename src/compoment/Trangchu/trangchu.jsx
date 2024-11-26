import "./trangchu.scss"
import trangchu from '../../assets/sp.jpg'
import React from 'react'
import { Link } from "react-router-dom"
function TrangChu() {
    return (
        <main>
            {/* Hero Section */}
            <section id="home">
                <h2>Trang Chủ</h2>
                <p>
                    Chào mừng bạn đến với F5 Shop! Chúng tôi cung cấp các sản phẩm chất
                    lượng với dịch vụ khách hàng tận tâm.
                </p>
                <img src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/14/shop14_home_slider1.jpg" alt="Trang Chủ" style={{ width: "100%", height: "auto" }} />
            </section>

            {/* New Arrivals or Hot Products Section */}
            <h2 className="h2">Sản phẩm hot 2024</h2>
            <section id="new-arrivals">
                <div className="product-list">
                    {["Sản phẩm 1", "Sản phẩm 2", "Sản phẩm 3"].map((ctsp, index) => (
                        <div className="product-item" key={index}>
                            <img src={ctsp} alt={ctsp} />
                            <h3>{ctsp}</h3>
                            <p className="price">1.000.000$</p>
                            <Link to={`/ctsp/${index + 1}`} className="btn">Mua ngay</Link> {/* Update the link here */}
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Offers Section */}
            <h2 className="h2">Ưu Đãi Đặc Biệt</h2>
            <section id="special-offers">
                <div className="offer-item">
                    <h3>Mua 2 Tặng 1</h3>
                    <p>Chỉ áp dụng cho các sản phẩm chọn lọc. Nhanh tay mua ngay!</p>
                    <button>Mua ngay</button>
                </div>
                <div className="offer-item">
                    <h3>Giảm Giá 50%</h3>
                    <p>Giảm giá cho các sản phẩm mới. Cơ hội không thể bỏ lỡ!</p>
                    <button>Mua ngay</button>
                </div>
            </section>

            {/* Popular Products Section */}
            <h2 className="h2">Sản Phẩm Bán Chạy</h2>
            <section id="products">
                <div className="product-list">
                    <div class="product-item">
                        <img src={trangchu} alt="Sản phẩm 1" />
                        <h3>Sản phẩm 1</h3>
                        <p class="price">1.000.000$</p>
                        <a href="#" class="btn">Mua ngay</a>
                    </div>

                    <div class="product-item">
                        <img src={trangchu} alt="Sản phẩm 1" />
                        <h3>Sản phẩm 1</h3>
                        <p class="price">1.000.000$</p>
                        <a href="#" class="btn">Mua ngay</a>
                    </div>

                    <div class="product-item">
                        <img src={trangchu} alt="Sản phẩm 1" />
                        <h3>Sản phẩm 1</h3>
                        <p class="price">1.000.000$</p>
                        <a href="#" class="btn">Mua ngay</a>
                    </div>
                    {/* Add more products here */}
                </div>
            </section>

            {/* About Section */}
            <section id="about">
                <div className="about-content">
                    <h2>Giới Thiệu F5 Shop</h2>
                    <p>Chúng tôi cam kết cung cấp các sản phẩm chất lượng, dịch vụ chăm sóc khách hàng tận tâm và luôn luôn đổi mới để mang đến cho bạn những trải nghiệm mua sắm tuyệt vời nhất.</p>
                    <button>Xem thêm</button>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section id="reviews">
                <h2 className="h2">Đánh Giá Của Khách Hàng</h2>
                <div className="reviews-content">
                    <div className="review-item">
                        <p>"Chất lượng sản phẩm tuyệt vời, giao hàng nhanh chóng!"</p>
                        <span>- Nguyễn Anh Tuấn</span>
                    </div>
                    <div className="review-item">
                        <p>"Dịch vụ khách hàng rất tận tình, tôi rất hài lòng!"</p>
                        <span>- Trần Thị Mai</span>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default TrangChu