import './ctth.scss';
import React from 'react';

function ChiTietThanhToan() {
    return (
        <div className="checkout-container">
            <div className="breadcrumb">
                <a href="/">Trang chủ</a> / <span>Kiểm tra</span>
            </div>

            <div className="checkout-details">
                <h2>Chi tiết thanh toán</h2>
                <form className="checkout-form">
                    <label htmlFor="name">Họ và tên*</label>
                    <input type="text" id="name" name="name" placeholder="Nhập họ và tên" required />

                    <label htmlFor="address">Địa chỉ*</label>
                    <input type="text" id="address" name="address" placeholder="Nhập địa chỉ" required />

                    <label htmlFor="city">Thành phố*</label>
                    <input type="text" id="city" name="city" placeholder="Nhập thành phố" required />

                    <label htmlFor="phone">Số Điện Thoại*</label>
                    <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" required />

                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" placeholder="Nhập email" required />
                </form>

                <div className="order-summary">
                    <h2>Đơn hàng của bạn</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Tổng cộng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Iphone 16 Pro Max</td>
                                <td>25.990.000 VND</td>
                            </tr>
                            <tr>
                                <td>Iphone 16</td>
                                <td>21.000.000 VND</td>
                            </tr>
                            <tr>
                                <td><strong>Tổng cộng</strong></td>
                                <td><strong>46.990.000 VND</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="payment-notice">
                    <p>
                        Thanh toán khi nhận hàng. Vui lòng liên hệ với chúng tôi nếu bạn cần hỗ trợ hoặc muốn thay đổi phương án
                        thanh toán khác.
                    </p>
                    <button className="submit-btn">Đặt hàng</button>
                </div>
            </div>
        </div>
    );
}

export default ChiTietThanhToan;
