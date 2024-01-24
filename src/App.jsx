import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Accounts/Login";
import Reset from "./Components/Accounts/Reset";
import Register from "./Components/Accounts/Register";
import Dashboard from "./Components/DashComponents/Dashboard";
import Production from "./Components/DashComponents/Production";
import MCCs from "./Components/DashComponents/MCCs";
import Veternaries from "./Components/DashComponents/Veternaries";
import MyAccount from "./Components/DashComponents/MyAccount";
import Layout from "./Components/Pages/Layout";
import Landing from "./Components/Pages/Landing";
import SideBar from "./Components/Bars/SideBar";
import Nopage from "./Components/Pages/Nopage";
import EditVet from "./Components/DashComponents/CrudeVet/EditVet";
import AllVets from "./Components/DashComponents/CrudeVet/AllVets";
import MccSideBar from "./Components/Bars/MccSideBar";
import VetSideBar from "./Components/Bars/VetSidBar";
import MccDashboard from "./Components/MCCs/MccDashboard";
import MccAccount from "./Components/MCCs/MccAccount";
import Farmers from "./Components/MCCs/Farmers";
import VetDashboard from "./Components/Veternaries/VetDashboard";
import VetProduction from "./Components/Veternaries/VetProduction";
import VetMCCs from "./Components/Veternaries/VetMCCs";
import VetAccount from "./Components/Veternaries/VetAccount";
import ProductionRegister from "./Components/MCCs/ProductionRegister";
import ProductionRecords from "./Components/MCCs/ProductionRecords";
import AllFarmers from "./Components/MCCs/CrudeFam/AllFarmers";
import EditFam from "./Components/MCCs/CrudeFam/EditFam";
import AllEmployees from "./Components/Veternaries/CrudeVetenary/AllEmployees";
import EditEmployee from "./Components/Veternaries/CrudeVetenary/EditEmployee";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="resetpassword" element={<Reset />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Nopage/>}/>
          </Route>
          <Route path="dashboard" element={<SideBar />}>
            <Route index element={<Dashboard />} />
            <Route path="production" element={<Production />} />
            <Route path="mccs" element={<MCCs />} />
            <Route path="veternaries" element={<Veternaries />} />
            <Route path="myaccout" element={<MyAccount />} />
            <Route path="editvet" element={<EditVet/>}/>
            <Route path="allvets" element={<AllVets/>}/>
          </Route>
          <Route path="mccdashboard" element={<MccSideBar/>}>
            <Route index element={<MccDashboard/>}/>
            <Route path="productionregister" element={<ProductionRegister/>}/>
            <Route path="productionrecords" element={<ProductionRecords/>}/>
            <Route path="farmers" element={<Farmers/>}/>
            <Route path="mccaccount" element={<MccAccount/>}/>
            <Route path="allfam" element={<AllFarmers/>}/>
            <Route path="editfam" element={<EditFam/>}/>
          </Route>
          <Route path="vetdashboard" element={<VetSideBar/>}>
            <Route index element={<VetDashboard/>}/>
            <Route path="vetproduction" element={<VetProduction/>}/>
            <Route path="vetmccs" element={<VetMCCs/>}/>
            <Route path="vetaccount" element={<VetAccount/>}/>
            <Route path="allemployees" element={<AllEmployees/>}/>
            <Route path="editemployee" element={<EditEmployee/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
