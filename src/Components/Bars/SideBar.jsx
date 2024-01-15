import "../../index.css";
import { NavLink, Outlet} from "react-router-dom";
import image from "../../images/RAB_Logo2.png";
import { RiDashboardFill } from "react-icons/ri";
import { LuMilk } from "react-icons/lu";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdAccountCircle } from "react-icons/md";

const SideBar = () => {

  const navigations = [
    {icon: <RiDashboardFill />, name: "Dashboard", href: "/dashboard"},
    {icon: <LuMilk />, name: "Production", href: "/dashboard/production"},
    {icon: <HiBuildingOffice2 />, name: "MCCs", href: "/dashboard/mccs"},
    {icon: <MdAccountCircle />, name: "My account", href: "/dashboard/myaccout"},
  ]

  return (
    <div className="flex relative">
      <div className="lef w-[15%] h-screen flex flex-col  fixed left-0 bg-[#009048]">
        <div className="log flex items-center py-4 px-6 space-x-2 border border-b-black bg-[#f1f1fb] pb-11">
          <div className="img w-[40%]">
            <img src={image} alt="img" className=" object-contain" />
          </div>
          <div className="text font-bold uppercase">
            <span className="text-[1.3rem]">Admin</span>
          </div>
        </div>
        <div className="links flex flex-col space-y-4 text-[1.2rem] font-semibold px-6 bg-[#009048]">
          {navigations.map((item, idx) =>{
           return( <NavLink 
            key={idx}
            to={item.href}
            className="flex items-center space-x-4 mt-4">
              <span className=" cursor-pointer space-x-4">{item.icon}</span>
              <span className=" cursor-pointer space-x-4">{item.name}</span>
            </NavLink>
          )})}
          
        </div>
      </div>
      <div className="right w-[85%] h-screen absolute right-0">
        <div className="top h-16 w-full bg-slate-600 fixed flex items-center">
          Hi admin!
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;