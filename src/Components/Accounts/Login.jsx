/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../images/RAB_Logo2.png";
import "../../index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [load, setLoad] = useState();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(newEmail);

    setEmail(newEmail);
    setIsValidEmail(isValid);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    // Password must be at least 6 characters long and contain a mix of uppercase, lowercase, and special characters
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d?)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    const isValid = passwordRegex.test(newPassword);

    setPassword(newPassword);
    setIsValidPassword(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      toast.error("Invalid email please try again");
      return;
    }

    if (!isValidPassword) {
      toast.error("Invalid password, please try again");
      return;
    }

    axios({
      method: "POST",
      url: "http://localhost:5678/mpas/authentication/v1/auth/signin",
      data: {
        email: email,
        password: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("respo", response);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setLoad(false);
        toast.success("Login successfully");

        if (response.data.user.role == "admin") {
          navigate("/dashboard");
        } else if (response.data.user.role == "veterinary") {
          navigate("/vetDashboard");
        } else {
          navigate("/MCCDashBoard");
        }
        console.log(response.data.user.role);
        setLoad(false);
      })
      .catch((error) => {
        console.log("err", error);
        setLoad(false);
      });
  };

  return (
    <>
      <div className="wrapper w-full h-screen bg-no-repeat flex justify-center items-center">
        <div className="blue bg-[#009048] w-[27%] h-[80%] rounded-l-md text-white hidden md:flex flex-col justify-between">
          <div className="top flex flex-col space-y-2 justify-center items-center">
            <div className="tit w-1/3 mt-10">
              <img src={img} alt="image" className=" bg-contain" />
            </div>
            <div className="decri px-14 text-3xl font-bold">
              Welcome to MPAS
            </div>
          </div>
          <div className="bootom flex flex-col items-center mb-14">
            <div className="acc flex flex-col items-center py-10">
              Don't have an account?
              <Link to={"/register"}>
                <span className="my-1 underline font-semibold">
                  Get started
                </span>
              </Link>
            </div>
            <div className="foot">© All rights reserved. MMPAS 2024</div>
          </div>
        </div>
        <div className="white bg-white px-10 w-[90%] md:w-[43%] md:h-[80%] rounded-r-md flex flex-col justify-center">
          <div className="top flex flex-col space-y-2 justify-center items-center py-4 md:hidden">
            <div className="tit w-1/3 ">
              <img src={img} alt="image" className=" bg-contain" />
            </div>
            <div className="decri px-1 text-xl md:text-3xl font-bold">
              Welcome to MPAS
            </div>
          </div>

          <h1 className="text-4xl font-bold pb-2">Sign In</h1>
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col py-3">
              <label>Email address</label>
              <input
                required
                type="email"
                placeholder="email"
                className={`border px-4 py-2 rounded mt-2 ${
                  isValidEmail ? "border-green-700" : "border-red-700"
                }`}
                value={email}
                onChange={handleEmailChange}
              />
              {!isValidEmail && (
                <span className="text-black mt-1 border border-red-700 bg-red-300 py-[0.01rem] px-2">
                  Please enter a valid email address like{" "}
                  <b> example@gmail.com</b>
                </span>
              )}
            </div>
            <div className="flex flex-col py-3">
              <label>Password</label>
              <input
                required
                type="password"
                placeholder="password"
                className={`border px-4 py-2 rounded mt-2 ${
                  isValidPassword ? "border-green-700" : "border-red-700"
                }`}
                value={password}
                onChange={handlePasswordChange}
              />
              {!isValidPassword && (
                <span className="text-red-700 mt-1 border border-red-700 bg-red-300 py-[0.01rem] px-2">
                  Password must be at least 6 characters long and contain a mix
                  of uppercase, lowercase, and special characters.
                </span>
              )}
            </div>

            <span className="text-blue-800 font-semibold underline cursor-pointer">
              Forgot password?
            </span>

            <button className="bg-[#1a8cff] py-1 mt-4 rounded uppercase text-white font-semibold">
              {load ? "Loging in..." : "Login"}
            </button>
          </form>
          <div className="bootom flex flex-col items-center  md:hidden">
            <div className="acc flex flex-col items-center py-10"></div>
            <div className="foot py-2 font-bold">
              © All rights reserved. MPAS 2024
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
