import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './admin.scss'
import { LogoutOutlined, StarTwoTone, HomeOutlined, ShoppingCartOutlined, AppstoreAddOutlined, TagOutlined, CreditCardOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import ScreenHome from './Screens/ScreenHome';
import ScreenCart from './Screens/ScreenCart';
import ScreenCategory from './Screens/ScreenCategory';
import ScreenVoucher from './Screens/ScreenVoucher';
import ScreenPay from './Screens/ScreenPay';
import ScreenOrder from './Screens/ScreenOrder';
import ScreenCustomer from './Screens/ScreenCustomer';

const DashboardAdmin = () => {
    const [categoryName, setCategoryName] = useState("Tên danh mục");
    const location = useLocation();

    React.useEffect(() => {
        switch (location.pathname) {
            case "/":
                setCategoryName("Trang chủ");
                break;
            case "/admin/user":
                setCategoryName("Người dùng");
                break;
            case "/admin/cart":
                setCategoryName("Giỏ hàng");
                break;
            case "/admin/category":
                setCategoryName("Danh mục & thương hiệu");
                break;
            case "/admin/voucher":
                setCategoryName("Khuyến mãi & giảm giá");
                break;
            case "/admin/pay":
                setCategoryName("Thanh toán");
                break;
            default:
                setCategoryName("Tên danh mục");
        }
    }, [location.pathname]);

    return (
        <div>
            <div className="container bg-gray-100 gap-5 mx-auto flex min-h-screen p-5">
                <div className="flex-3 bg-white p-4 flex flex-col rounded-lg shadow-md">
                    <h2 className="text-gray-800 text-xl font-bold mb-4">Dashboard</h2>
                    <div className="flex flex-col gap-5 flex-grow">
                        <Link className="text-gray-800 mb-2 bg-blue-300 hover:bg-blue-400 p-2 rounded-lg flex items-center gap-2" to="/admin">
                            <HomeOutlined />
                            Trang chủ
                        </Link>
                        <Link className="text-gray-800 mb-2 bg-green-300 hover:bg-green-400 p-2 rounded-lg flex items-center gap-2" to="/admin/customer">
                            <UserOutlined />
                            Khách hàng
                        </Link>
                        <Link className="text-gray-800 mb-2 bg-pink-300 hover:bg-orange-400 p-2 rounded-lg flex items-center gap-2" to="/admin/cart">
                            <ShoppingCartOutlined />
                            Giỏ hàng
                        </Link>
                        <Link className="text-gray-800 mb-2 bg-yellow-300 hover:bg-yellow-400 p-2 rounded-lg flex items-center gap-2" to="/admin/category">
                            <AppstoreAddOutlined />
                            Danh mục & thương hiệu
                        </Link>
                        <Link className="text-gray-800 mb-2 bg-red-300 hover:bg-red-400 p-2 rounded-lg flex items-center gap-2" to="/admin/voucher">
                            <TagOutlined />
                            Khuyến mãi & giảm giá
                        </Link>
                        <Link className="text-gray-800 mb-2 bg-indigo-300 hover:bg-indigo-400 p-2 rounded-lg flex items-center gap-2" to="/admin/pay">
                            <CreditCardOutlined />
                            Thanh toán
                        </Link>
                        <Link className="text-gray-800 mb-2 bg-purple-300 hover:bg-purple-400 p-2 rounded-lg flex items-center gap-2" to="/admin/order">
                            <UnorderedListOutlined />
                            Quản lý đơn hàng
                        </Link>
                    </div>
                    <div className="mx-auto text-gray-800 mb-2 bg-gray-300 hover:bg-blue-400 p-2 rounded-lg mt-auto">
                        Cài đặt hệ thống
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-2 bg-white p-4 rounded-lg shadow-md overflow-y-auto" style={{ maxHeight: 'calc(100vh - 50px)' }}>
                    <div className="bg-blue-500 p-5 rounded-lg justify-between flex items-center">
                        <h2 className="text-white font-semibold">{categoryName}</h2>
                        <div className="user mx-auto flex items-center gap-4">
                            <span className="text-white">Võ Như Thi</span>
                            <span className="text-white cursor-pointer flex items-center gap-1">
                                <LogoutOutlined /> Đăng xuất
                            </span>
                        </div>
                        <div className="iconstart">
                            <StarTwoTone twoToneColor="#ffd700" />
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<ScreenHome />} />
                        <Route path="customer" element={<ScreenCustomer />} />
                        <Route path="cart" element={<ScreenCart />} />
                        <Route path="category" element={<ScreenCategory />} />
                        <Route path="voucher" element={<ScreenVoucher />} />
                        <Route path="pay" element={<ScreenPay />} />
                        <Route path="order" element={<ScreenOrder />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdmin;