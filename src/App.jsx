
import { Outlet } from 'react-router-dom'
import Footer from './compoment/Layout/footer'
import Navbar from './compoment/Layout/navbar'
import './index.css'

function App() {


  return (
    <div className='container'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
