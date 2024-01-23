import "../../index.scss";
import { Link, NavLink, Navigate, Outlet} from "react-router-dom";
import image from "../../images/RAB_Logo2.png";
import { RiDashboardFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";
import { FaPersonDigging } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const MccSideBar = () => {

  let auth = {'token' : true}

  const navigations = [
    {icon: <RiDashboardFill className="text-[1.4rem]"/>, name: "Dashboard", href: "/mccdashboard"},
    {icon: <GiNotebook className="text-[1.4rem]"/>, name: "Production Register", href: "/mccdashboard/productionregister"},
    {icon: <AiOutlineStock className="text-[1.4rem]"/>, name: "Production Records", href: "/mccdashboard/productionrecords"},
    {icon: <FaPersonDigging className="text-[1.4rem]"/>, name: "Farmers", href: "/mccdashboard/farmers"},
    {icon: <MdLogout />, name: "Log Out", href: "/login"},
  ]

  return (
    <div className="wrapper flex relative">
      {/* left side */}
      <div className="leftSide w-[17%] h-screen flex flex-col  fixed left-0 bg-[#009048] shadow-xl">
        <div className="log flex items-center py-4 px-6 space-x-2 border  bg-[#f1f1fb] pb-11">
          <div className="img w-[40%]">
            <Link to={"/"}><img src={image} alt="img" className=" object-contain" /></Link>
          </div>
          <div className="text font-bold uppercase">
            <span className="text-[1.3rem]">MCC</span>
          </div>
        </div>
        <div className="links flex flex-col space-y-4 text-[1.1rem] font-semibold ml-4 text-white bg-[#009048]">
          {navigations.map((item, idx) =>{
           return( <NavLink 
            key={idx}
            to={item.href}
            className="flex items-center space-x-2 mt-4">
              <span className=" cursor-pointer ">{item.icon}</span>
              <span className=" cursor-pointer ">{item.name}</span>
            </NavLink>
          )})}
        </div>
      </div>
      {/* Right side */}
      <div className="rightSide w-[83%] h-screen absolute right-0 ">
        <div className="top h-16 w-full fixed flex items-center z-30 bg-[#f1f1fb]">
          <h1 className="text-2xl font-semibold mx-10">Hi Kamali!</h1>
        </div>
        {/* <Outlet /> */}
        {auth.token ? <Outlet/> : <Navigate to={"/login"}/>}
      </div>
    </div>
  );
};

export default MccSideBar;
