import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [token, setToken] = useState("")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData(data => ({ ...data, [name]: value }))
  }

  const register = async (e) => {
    e.preventDefault()




    const res = await axios.post('http://localhost:3000/api/user/register', data);

    if (res.data.success) {
      // Lưu token vào localStorage và chuyển hướng về trang chủ
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);  // Lưu tên người dùng vào localStorage
      navigate('/login');
      window.location.reload();
    } else {
      alert(res.data.message);  // Hiển thị thông báo lỗi
    }


  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Đăng Ký</h2>
        <form onSubmit={register}>
          {/* Trường nhập tên */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Họ và tên</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Nhập họ và tên"
              required
              onChange={onChangeHandler}
              value={data.name}
            />
          </div>

          {/* Trường nhập email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Nhập email"
              required
              onChange={onChangeHandler}
              value={data.email}
            />
          </div>

          {/* Trường nhập mật khẩu */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Nhập mật khẩu"
              required
              onChange={onChangeHandler}
              value={data.password}
            />
          </div>

          {/* Trường nhập lại mật khẩu */}


          {/* Nút đăng ký */}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
          >
            Đăng Ký
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Đã có tài khoản?{' '}
          <a href="/login" className="text-green-500 hover:underline">Đăng nhập</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
