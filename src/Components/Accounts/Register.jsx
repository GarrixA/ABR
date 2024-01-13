import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/RAB_Logo2.png";
import "../../index.css";

const Register = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long and include numbers and special characters."
      );
      return;
    }

    // Phone number validation
    const phoneRegex = /^(078|079|072|073)\d{7}$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid phone number starting with 078, 079, 072, or 073.");
      return;
    }

    // If all validations pass, you can proceed with the login logic
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone Number:", phoneNumber);
  };
  return (
    <>
      <div className="wrapper w-full h-screen bg-no-repeat flex justify-center items-center">
        <div className="blue bg-[#339966] w-[27%] h-[80%] rounded-l-md text-white flex flex-col justify-between">
          <div className="top flex flex-col space-y-2 justify-center items-center">
            <div className="tit w-1/3 mt-10">
              <img src={img} alt="image" className=" bg-contain" />
            </div>
            <div className="decri px-14 text-3xl font-bold">
              Welcome to MMPAS
            </div>
          </div>
          <div className="bootom flex flex-col items-center mb-14">
            <div className="acc flex flex-col items-center py-10">
              <h1 className="mb-6"> Don't have an account?</h1>
              <Link to={"/"}>
                <span className="my-1 cursor-pointer px-3 py-2 rounded bg-transparent border border-white font-semibold">
                  Login
                </span>
              </Link>
            </div>
            <div className="foot">© All rights reserved. MMPAS 2023</div>
          </div>
        </div>
        <div className="white bg-white px-10 w-[43%] h-[80%] rounded-r-md flex flex-col justify-center">
          <p>RAB Admin</p>
          <h1 className="text-4xl font-bold pb-2">Register</h1>
          <form className=" w-full grid grid-cols-2" onSubmit={handleSubmit}>
            <div className="flex flex-col py-3">
              <label>Full Name</label>
              <input
              
                type="text"
                placeholder="Full name"
                className="border border-green-700 px-4 py-2 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-3 ml-4">
              <label>Email address</label>
              <input
              value={email}
              onChange={handleEmailChange}
                type="text"
                placeholder="email"
                className="border border-green-700 px-4 py-2 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-3">
              <label>Password</label>
              <input
              value={password}
              onChange={handlePasswordChange}
                type="password"
                placeholder="password"
                className="border border-green-700 px-4 py-2 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-3 ml-4">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="confirm password"
                className="border border-green-700 px-4 py-2 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-3">
              <label>Phone number</label>
              <input
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
                type="number"
                placeholder="phone"
                className="border border-green-700 px-4 py-2 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-3 ml-4">
              <label>National ID</label>
              <input
                type="number"
                placeholder="national ID"
                className="border border-green-700 px-4 py-2 rounded mt-2"
              />
            </div>
            <div className="">
              <button className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
