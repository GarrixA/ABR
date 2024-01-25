import "../../index.scss";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import image from "../../images/RAB_Logo2.png";
import { RiDashboardFill } from "react-icons/ri";
import { LuMilk } from "react-icons/lu";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdLogout } from "react-icons/md";

const VetSideBar = () => {

  let auth = { 'token': true }

  const navigations = [
    { icon: <RiDashboardFill />, name: "Dashboard", href: "/vetdashboard" },
    { icon: <LuMilk />, name: "Production", href: "/vetdashboard/vetproduction" },
    { icon: <HiBuildingOffice2 />, name: "MCCs", href: "/vetdashboard/vetmccs" },
    { icon: <MdLogout />, name: "Log Out", href: "/login" },
  ]

  return (
    <div className="wrapper flex relative">
      {/* left side */}
      <div className="leftSide w-[15%] h-screen flex flex-col  fixed left-0 shadow-xl bg-[#009048] z-10">
        <div className="log flex items-center justify-center border border-b-black bg-[#f1f1fb] ">
          <div className="img w-[50%] p-2">
            <Link to={"/"}><img src={image} alt="img" className=" object-cover" /></Link>
          </div>
        </div>
        <div className="links flex flex-col space-y-4 text-[1.2rem] text-white font-semibold px-6 bg-[#009048]">
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
      <div className="rightSide w-[85%] h-screen absolute right-0 ">
        <div className="top h-16 w-full fixed flex items-center z-30 bg-[#009048]">
          <h1 className="text-2xl font-semibold mx-10 text-white">Hi Vet Gasana!</h1>
        </div>
        {/* <Outlet /> */}
        {auth.token ? <Outlet /> : <Navigate to={"/login"} />}
      </div>
    </div>
  );
};

export default VetSideBar;