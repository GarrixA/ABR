import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Accounts/Login";
import Reset from "./Components/Accounts/Reset";
import Register from "./Components/Accounts/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="resetpassword" element={<Reset />} />
          <Route path="register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
