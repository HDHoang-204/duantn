import React from 'react';  // Đảm bảo rằng React được import
import './navbar.scss'
function Navbar() {
    return (
        <>
            <header className='fixed w-full bg-white top-0 left-0 z-10'>


                <div className="nav ">
                    <h1 className='motion-preset-oscillate '>F5 Shop</h1>
                    <ul className='animotion-top-to-bottom '>
                        <li><a href="/">Trang Chủ</a></li>
                        <li><a href="/sanpham">Sản Phẩm</a></li>
                        <li><a href="/gt">Giới Thiệu</a></li>
                        <li><a href="/lienhe">Liên hệ</a></li>
                    </ul>

                </div>
                <div className="cart">
                    <a href="/giohang"><div className="giohang"></div></a>
                    <a href="/login"><div className="nguoidung"></div></a>
                    <div className="them"></div>
                </div>

            </header>
        </>
    )
}

export default Navbar