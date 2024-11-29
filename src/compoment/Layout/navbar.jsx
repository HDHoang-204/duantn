import React, { useEffect, useState } from 'react';  // Đảm bảo rằng React được import
import { Navigate } from 'react-router-dom';
import './navbar.scss'
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");  // Thêm token vào state

    const navigate = useNavigate();

    // Lấy token và tên người dùng từ localStorage khi component được tải
    useEffect(() => {
        const storedUsername = localStorage.getItem("name");
        const storedToken = localStorage.getItem("token");

        if (storedUsername) {
            setUsername(storedUsername);
        }

        if (storedToken) {
            setToken(storedToken);  // Lưu token vào state
        }
    }, []);

    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");  // Xóa tên người dùng khi đăng xuất
        setToken("");  // Xóa token trong state
        setUsername("");  // Xóa tên người dùng trong state
        navigate("/login");  // Điều hướng về trang đăng nhập
    };

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
                    {!token ? (
                        <a href="/login"><div className="nguoidung"></div></a>
                    ) : (
                        <div className='llogin'>
                            <ul>
                                <button onClick={handleLogout}>Logout</button>
                                <span>Xin chào, {username}</span>  {/* Hiển thị tên người dùng khi đăng nhập */}
                            </ul>
                        </div>
                    )}

                    <a ><div className="them"></div></a>
                </div>

            </header>
        </>
    )
}

export default Navbar