import './navbar.scss'
import React from 'react'
function Navbar() {
    return (
        <>
            <header>


                <div class="nav">
                    <h1>F5 Shop</h1>
                    <ul>
                        <li><a href="/">Trang Chủ</a></li>
                        <li><a href="/ctsp">Sản Phẩm</a></li>
                        <li><a href="/gt">Giới Thiệu</a></li>
                    </ul>

                </div>
                <div class="cart">
                    <div class="giohang"></div>
                    <div class="nguoidung"></div>
                    <div class="them"></div>
                </div>

            </header>
        </>
    )
}

export default Navbar