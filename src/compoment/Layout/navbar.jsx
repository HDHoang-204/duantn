import React from 'react';  // Đảm bảo rằng React được import
import './navbar.scss'
function Navbar() {
    return (
        <>
            <header>


                <div className="nav">
                    <h1>F5 Shop</h1>
                    <ul>
                        <li><a href="/">Trang Chủ</a></li>
                        <li><a href="/ctsp">Sản Phẩm</a></li>
                        <li><a href="/gt">Giới Thiệu</a></li>
                        <li><a href="/lienhe">Liên hệ</a></li>
                    </ul>

                </div>
                <div className="cart">
                    <div className="giohang"></div>
                    <div className="nguoidung"></div>
                    <div className="them"></div>
                </div>

            </header>
        </>
    )
}

export default Navbar