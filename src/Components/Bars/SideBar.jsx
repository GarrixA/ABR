import "../../index.scss";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import image from "../../images/RAB_Logo2.png";
import { RiDashboardFill } from "react-icons/ri";
import { LuMilk } from "react-icons/lu";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const SideBar = () => {

  let auth = { 'token': true }

  const navigations = [
    { icon: <RiDashboardFill />, name: "Dashboard", href: "/dashboard" },
    { icon: <LuMilk />, name: "Production", href: "/dashboard/production" },
    { icon: <HiBuildingOffice2 />, name: "MCCs", href: "/dashboard/mccs" },
    { icon: <IoMdPerson />, name: "Veternaries", href: "/dashboard/veternaries" },
    { icon: <MdLogout />, name: "Log Out", href: "/login" },
  ]

  const [openModal, setOpenModal] = useState(false)
  const toggleModal = ()=>{
    setOpenModal(!openModal);
  }

  return (
    <div className="wrapper flex relative ">
      {/* left side */}
      <div className="leftSide w-[15%] h-screen flex-col  fixed left-0 shadow-xl bg-[#009048] md:flex hidden">
        <div className="log flex items-center justify-center border border-b-black bg-[#f1f1fb] ">
          <div className="img w-[50%] p-2">
            <Link to={"/"}><img src={image} alt="img" className=" object-contain" /></Link>
          </div>
        </div>
        <div className="links text-white flex flex-col space-y-4 text-[1.2rem] font-semibold px-6 bg-[#009048]">
          {navigations.map((item, idx) => {
            return (<NavLink
              key={idx}
              to={item.href}
              className="flex items-center space-x-4 mt-4">
              <span className=" cursor-pointer space-x-4">{item.icon}</span>
              <span className=" cursor-pointer space-x-4">{item.name}</span>
            </NavLink>
            )
          })}
        </div>
      </div>
      {/* Right side */}
      <div className="rightSide h-screen absolute md:w-[85%] w-full md:right-0">
        <div className="top w-full fixed flex items-center z-30 md:bg-[#009048] bg-[#009048] md:h-16 md:p-0 p-2">
          <div className="img w-[20%] md:hidden ">
            <Link to={"/"}><img src={image} alt="img" className=" object-contain" /></Link>
          </div>
          <h1 className="text-2xl font-semibold md:mx-10 mx-2 text-white">Hi Admin</h1>
          <MdMenu className="absolute right-0 text-white text-4xl mx-5" onClick={toggleModal}/>
        </div>
        {/* <Outlet /> */}
        {auth.token ? <Outlet /> : <Navigate to={"/login"} />}
      </div>
      {openModal && (
        <div className="links md:hidden absolute w-full top-[5.4rem] h-screen text-white flex flex-col space-y-4 text-[1.4rem] font-semibold px-6 bg-[#009048] ">
        {navigations.map((item, idx) => {
          return (<NavLink
            key={idx}
            to={item.href}
            className="flex items-center space-x-4 mt-24 mx-10">
            <span className=" cursor-pointer space-x-4" onClick={toggleModal}>{item.icon}</span>
            <span className=" cursor-pointer space-x-4" onClick={toggleModal}>{item.name}</span>
          </NavLink>
          )
        })}
      </div>
      )}
    </div>
  );
};

export default SideBar;
