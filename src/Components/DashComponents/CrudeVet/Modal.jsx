/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ matchModal }) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);



  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isValidNationalId, setIsValidNationalId] = useState(true);

  const formData = new FormData()
  formData.append("fullName", fullName)
  formData.append("email", email)
  formData.append("nationalId", nationalId)
  formData.append("phoneNumber", phoneNumber)
  formData.append("province", province)
  formData.append("district", district)

  let token = localStorage.getItem("token")
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(newEmail);

    setEmail(newEmail);
    setIsValidEmail(isValid);
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;

    const phoneRegex = /^(078|079|072|073)\d{7}$/;
    const isValid = phoneRegex.test(newPhoneNumber);

    setPhoneNumber(newPhoneNumber);
    setIsValidPhoneNumber(isValid);
  };

  const handleNationalIdChange = (e) => {
    const newNationalId = e.target.value;

    const nationalIdRegex = /^(119|120)\d{14}$/;
    const isValid = nationalIdRegex.test(newNationalId);

    setNationalId(newNationalId);
    setIsValidNationalId(isValid);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!isValidPhoneNumber) {
      toast.error("Invalid phone number, please try again");
      return;
    }
    if (!isValidNationalId) {
      toast.error("Invalid national Id, please try again");
      return;
    }
    if (!isValidEmail) {
      toast.error("Invalid email please try again");
      return;
    }

    
    axios({
      method: "POST",
      url: "https://mpasw.onrender.com/mpas/veterian/vet/addVet",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Baerer ${token}`
      }
    })
      .then((response) => {
        console.log(response)
        setTimeout(() => {
          toast.success("veterinary added successfully")
          navigate("/dashboard/veternaries")
        }, 300)

      })
      .catch((error) => {
        console.log(error)
        toast.error("failed to add veterinary")
      })
  }

  return (
    <div className="mt-20 ml-10 text-[1rem] flex items-center justify-center   w-full absolute inset-0 backdrop-filter backdrop-blur-sm top-[-1rem] left-[-2.3rem] h-screen">
      <div
        className="mt-20 ml-10 text-[1rem] flex items-center justify-center  w-full absolute  top-[-1rem] left-[-2.3rem] h-screen "
        onClick={matchModal}
      ></div>
      <div className="w-[90%] md:w-[50%] bg-white p-10 rounded-lg shadow z-10">
        <h1 className="text-2xl relative bottom-4 left-[-1rem]">Register</h1>
        <form className=" w-full " onSubmit={handleLogin}>
          <div className="md:grid grid-cols-2">
            <div className="flex flex-col py-1">
              <label>Full Name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                type="text"
                placeholder="Full name"
                className="border border-green-700 px-4 py-1 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-1 md:ml-4">
              <label>Email address</label>
              <input
                value={email}
                onChange={handleEmailChange}
                required
                type="text"
                placeholder="email"
                className={`border border-green-700 px-4 py-1 rounded mt-2 ${isValidEmail ? "border-green-700" : "border-red-700"
                  }`}
              />
              {!isValidEmail && (
                <span className="text-black mt-1 border border-red-700 bg-red-300 py-[0.01rem] px-2">
                  Please enter a valid email address like{" "}
                  <b> example@gmail.com</b>
                </span>
              )}
            </div>
            <div className="flex flex-col py-1">
              <label>Phone number</label>
              <input
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                type="number"
                placeholder="phone"
                className={`border border-green-700 px-4 py-1 rounded mt-1 ${isValidPhoneNumber ? "border-green-700" : "border-red-700"
                  }`}
              />
              {!isValidPhoneNumber && (
                <span className="text-red-700 mt-1 border border-red-700 bg-red-300 py-[0.01rem] px-2">
                  Please enter a valid Rwandan phone number.
                </span>
              )}
            </div>
            <div className="flex flex-col py-1 md:ml-4">
              <label>National ID</label>
              <input
                value={nationalId}
                onChange={handleNationalIdChange}
                required
                type="number"
                placeholder="national ID"
                className={`border border-green-700 px-4 py-1 rounded mt-1 ${isValidNationalId ? "border-green-700" : "border-red-700"
                  }`}
              />
              {!isValidNationalId && (
                <span className="text-red-700 mt-1 border border-red-700 bg-red-300 py-[0.01rem] px-2">
                  Please enter a valid Rwandan national ID.
                </span>
              )}
            </div>
            {/* <div className="flex flex-col py-1">
              <label>Password</label>
              <input
                required
                type="password"
                placeholder="password"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div> */}
            <div className="flex flex-col py-1 md:ml- ">
              <label>Province</label>
              {/* <select
                onChange={handleProvinceChange}
                className="border border-green-700 px-4 py-1 rounded mt-1"
              >
                {provinces.map((item, idx) => (
                  <option key={idx}>{item}</option>
                ))}
              </select> */}
              <input
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                required
                type="text"
                placeholder="province"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
            <div className="flex flex-col py-1 md:ml-4">
              <label> District</label>
              {/* <select className="border border-green-700 px-4 py-1 rounded mt-1 ">
                {filteredDistricts.map((item, idx) => (
                  <option key={idx}>{item}</option>
                ))}
              </select> */}
              <input
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
                type="text"
                placeholder="district"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
          </div>
          <div className="">
            <button type="submit" className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1 mt-4"
              onClick={async (e) => {
                // e.preventDefault();
                await handleLogin();
                if (isValidPhoneNumber && isValidNationalId) {
                  matchModal();
                }
              }}
            >
              {load ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Modal;
