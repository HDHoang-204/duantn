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

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <TrangChu />
      },
      {
        path: '/ctsp/:ctpsid',
        element: <CTSP />
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
      }

    ]
  },
  {
    path: '/admin',
    element: <DashboardAdmin />

  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
