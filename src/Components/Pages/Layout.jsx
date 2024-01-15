import { Outlet } from "react-router-dom"
import Footer from "../Bars/Footer"
import Navbar from "../Bars/Navbar"

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
