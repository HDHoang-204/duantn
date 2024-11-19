import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import TrangChu from './compoment/Trangchu/trangchu';
import CTSP from './compoment/Chitietsanpham/chitietsanpham';

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
        path: '/ctsp',
        element: <CTSP />
      }
      //   {
      //     path: 'gt',
      //     element: <GioiThieu />
      //   },
      //   {
      //     path: 'lienhe',
      //     element: <LienHe />
      //   }

    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
