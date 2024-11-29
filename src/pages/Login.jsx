import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [currState, setCurrState] = useState("Đăng nhập")
  const [token, setToken] = useState("")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const url = 'http://localhost:3000'
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData(data => ({ ...data, [name]: value }))
  }

  const onlogin = async (e) => {
    e.preventDefault()
    let newUrl = url
    if (currState === 'Đăng nhập') {
      newUrl += "/api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }
    const res = await axios.post(newUrl, data)
    if (res.data.success) {
      setToken(res.data.token)
      localStorage.setItem("token", res.data.token)
      navigate("/")
      window.location.reload()
    }
    else {
      alert(res.data.message)
    }

  }



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">{currState}</h2>
        <form onSubmit={onlogin}>
          {currState === "Đăng nhập" ? <></> : <div className="mb-4">

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
          </div>}

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Nhập email"
              required
              name='email'
              onChange={onChangeHandler}
              value={data.email}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Mật khẩu</label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Nhập mật khẩu"
              required
              name='password'
              onChange={onChangeHandler}
              value={data.password}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"

          >
            {currState === "Đăng nhập" ? "Đăng nhập " : "Đăng ký"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Chưa có tài khoản?{' '}
          {currState === "Đăng nhập" ? <p onClick={() => setCurrState('Đăng ký')}>Đăng ký</p> : <p onClick={() => setCurrState('Đăng nhập')}>Đăng nhập</p>
          }
        </p>
      </div>
    </div>
  );
};

export default Login;
