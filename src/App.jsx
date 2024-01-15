import { BrowserRouter, Route, Routes } from "react-router-dom";
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
            <Route path="*" element={<Nopage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
