import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import TrangChu from './compoment/Trangchu/trangchu';
import CTSP from './compoment/Chitietsanpham/chitietsanpham';
import DashboardAdmin from './admin/index.jsx';
import GioiThieu from './compoment/Gioithieu/gioithiu';
import Lienhe from './compoment/Lienhe/lienhe.jsx';
import DoiMK from './compoment/login_out/DMK/doiMK.jsx';
import GioHang from './compoment/giohang/giohang';
import ChiTietThanhToan from './compoment/Chitietthanhtoan/ctth';
import { Home } from './pages/Home.jsx';
import { ProductPage } from './pages/ProductPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/ctsp/:ctpsid',
        element: <CTSP />
      },
      {
        path: 'sanpham',
        element: <ProductPage/>
      },
      {
        path: '/gt',
        element: <GioiThieu />
      },
      {
        path: '/lienhe',
        element: <Lienhe />
      },
      {
        path: '/doimatkhau',
        element: <DoiMK />
      },
      {
        path: '/giohang',
        element: <GioHang />
      },
      {
        path: '/cttt',
        element: <ChiTietThanhToan />
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },

    ]
  },
  {
    path: '/admin/*',
    element: <DashboardAdmin />

  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
