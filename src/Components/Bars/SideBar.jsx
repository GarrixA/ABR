import "../../index.scss";
import { Link, NavLink, Navigate, Outlet} from "react-router-dom";
import image from "../../images/RAB_Logo2.png";
import { RiDashboardFill } from "react-icons/ri";
import { LuMilk } from "react-icons/lu";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const SideBar = () => {

  let auth = {'token' : true}
  
  const navigations = [
    {icon: <RiDashboardFill />, name: "Dashboard", href: "/dashboard", style: {
      color: 'white', 
    } },
    {icon: <LuMilk />, name: "Production", href: "/dashboard/production"},
    {icon: <HiBuildingOffice2 />, name: "MCCs", href: "/dashboard/mccs"},
    {icon: <IoMdPerson />, name: "Veternaries", href: "/dashboard/veternaries"},
    {icon: <MdLogout />, name: "Log Out", href: "/login",style: {color: 'red', fontStyle: 'italic'}},
  ]

  return (
    <div className="wrapper flex relative ">
      {/* left side */}
      <div className="leftSide w-[15%] h-screen flex flex-col  fixed left-0 bg-[#006400]">
         <div className="log flex items-center pt-2 px-2 space-x-2 border border-b-black bg-[#f1f1fb] pb-11"> 
          <div className="img w-[50%] mt-5 mx-10 mb-0">
          <Link to={"/"}><img src={image} alt="img" className=" object-contain" /></Link>
          </div>
          {/* <div className="text font-bold uppercase">
            <span className="text-[1.3rem]">Admin</span>
          </div> */}
        </div> 
        <div className="links flex flex-col space-y-4 text-[1.2rem] font-semibold px-6 bg-[#006400]">
          {navigations.map((item, idx) =>{
           return( <NavLink 
            key={idx}
            to={item.href}
            className="flex items-center space-x-4 mt-4">
              <span className=" cursor-pointer space-x-4 text-white">{item.icon}</span>
              <span className=" cursor-pointer space-x-4 text-white">{item.name}</span>
            </NavLink>
          )})}
        </div>
      </div>
      {/* Right side */}
      <div className="rightSide w-[85%] h-screen absolute right-0 ">
        <div className="top h-16 w-full bg-[#006400] fixed flex items-center z-30">
        <span className="text-[1.3rem] text-white">ADMIN</span>
        </div>
        {/* <Outlet /> */}
        {auth.token ? <Outlet/> : <Navigate to={"/login"}/>}
      </div>
    </div>
  );
};

export default SideBar;
