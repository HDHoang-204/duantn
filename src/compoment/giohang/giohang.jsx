import "./giohang.scss"
import React from "react"
import { Link } from "react-router-dom"

function GioHang(p) {
    return (
        <div className="cart-container">

            <div className="breadcrumb">
                <a href="#">Trang chủ</a> / <span>Giỏ hàng</span>
            </div>


            <div className="cart-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng cộng</th>
                        </tr>
                    </thead>
                    <tbody id="cart-items">

                        <tr>
                            <td><button className="remove-btn">×</button></td>
                            <td>Iphone 16 pro Max</td>
                            <td className="price">25990000</td>
                            <td>
                                <input className="quantity" type="number" value="1" min="1" />

                            </td>
                            <td className="subtotal">25990000 </td>
                        </tr>
                        <tr>
                            <td><button className="remove-btn">×</button></td>
                            <td>Iphone 16</td>
                            <td className="price">21000000</td>
                            <td>
                                <input className="quantity" type="number" value="1" min="1" />
                            </td>
                            <td className="subtotal">21000000 </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="cart-total">
                <h2>Tổng số giỏ hàng</h2>
                <div className="total-item">
                    <span>Tổng cộng:</span>
                    <span id="total-price">46990000 VND</span> VND
                </div>
                <button className="checkout-btn"> <a href="/cttt">THANH TOÁN</a> </button>
            </div>
        </div>

    )
}

export default GioHang