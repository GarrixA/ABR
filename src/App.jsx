import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Accounts/Login";
import Reset from "./Components/Accounts/Reset";
import Register from "./Components/Accounts/Register";
import Dashboard from "./Components/DashComponents/Dashboard";
import Production from "./Components/DashComponents/Production";
import MCCs from "./Components/DashComponents/MCCs";
import Veternaries from "./Components/DashComponents/Veternaries";
import MyAccount from "./Components/DashComponents/MyAccount";
import Home from "./Components/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="resetpassword" element={<Reset />} />
          <Route path="register" element={<Register/>}/>
        </Routes>
        <Routes>
          <Route path="dashboard" index element={<Dashboard/>}/>
          <Route path="production" element={<Production/>}/>
          <Route path="mccs" element={<MCCs/>}/>
          <Route path="veternaries" element={<Veternaries/>}/>
          <Route path="myaccout" element={<MyAccount/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
