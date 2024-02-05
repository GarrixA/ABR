/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import provinces from "./province";
import distr from "./district";
import axios from "axios";

const Modal = ({ matchModal }) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  
  const [mccName, setMccName] = useState("")
    const [mccEmail, setMccEmail] = useState("")
    const [sector, setSector] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("") // reka nkore undi mu mcc ahari ndi gukoresha credential zitari zo. o
    const [nationalId, setNationalId] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [isValidNationalId, setIsValidNationalId] = useState(true);

    const formData = new FormData()
    formData.append("mccName", mccName)
    formData.append("email", mccEmail)
    formData.append("sector", sector)
    formData.append("phoneNumber", phoneNumber)
    formData.append("nationalId", nationalId)

    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(newEmail);
  
      setMccEmail(newEmail);
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

  let token = localStorage.getItem("token")
  console.log("form data: ",formData)
  const addMcc = (e) =>{
    if(e){
      e.preventDefault()
    }
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
      url: "http://localhost:5678/mpas/mcc/addMcc",
      data :formData ,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then((response) =>{
      console.log(response)
      toast.success("Mcc added successfully")
      setTimeout(()=>{
        location.reload()
      }, 1000)
    })
    .catch((error)=>{
      console.log(error)
      toast.error("Failed to add Mcc")
    })
  }

  return (
    <div className="mt-20 ml-10 text-[1rem] flex items-center justify-center w-full absolute inset-0 backdrop-filter backdrop-blur-sm top-[2rem] md:top-[-1rem] left-[-2.3rem] h-full ">
      <div
        className="mt-20 ml-10 text-[1rem] flex items-center justify-center  w-full absolute  top-[-1rem] left-[-2.3rem] h-screen "
        onClick={matchModal}
      ></div>
      <div className="md-[90%] md:w-[50%] bg-white p-10 rounded-lg shadow z-10">
        <h1 className="text-2xl relative bottom-4 left-[-1rem]">Register</h1>
        <form className=" w-full " onSubmit={addMcc}>
          <div className="md:grid grid-cols-2">
            <div className="flex flex-col py-1">
              <label>MccName</label>
              <input
              value={mccName}
              onChange={(e) => setMccName(e.target.value)}
                required
                type="text"
                placeholder="MccName"
                className="border border-green-700 px-4 py-1 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-1 md:ml-4">
              <label>Email address</label>
              <input
              value={mccEmail}
              onChange={handleEmailChange}
                required
                type="text"
                placeholder="email"
                className={`border border-green-700 px-4 py-1 rounded mt-2 ${
                  isValidEmail ? "border-green-700" : "border-red-700"
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
                className={`border border-green-700 px-4 py-1 rounded mt-1 ${
                  isValidPhoneNumber ? "border-green-700" : "border-red-700"
                }`}
              />
              {!isValidPhoneNumber && (
                <span className="text-red-700 mt-1 border border-red-700 bg-red-300 py-[0.01rem] px-2">
                  Please enter a valid Rwandan phone number.
                </span>
              )}
            </div>
            {/* <div className="flex flex-col py-1 ml-4">
              <label>National ID</label>
              <input
                required
                type="number"
                placeholder="national ID"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div> */}
            <div className="flex flex-col py-1 md:ml-4">
              <label>Sector</label>
              <input
              value={sector}
              onChange={(e) => setSector(e.target.value)}
                required
                type="text"
                placeholder="sector"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
            <div className="flex flex-col py-1 ">
              <label>National Id</label>
              <input
              value={nationalId}
              onChange={handleNationalIdChange}
                required
                type="number"
                placeholder="sector"
                className={`border border-green-700 px-4 py-1 rounded mt-1 ${
                  isValidNationalId ? "border-green-700" : "border-red-700"
                }`}
              />
              {!isValidNationalId && (
                <span className="text-red-700 mt-1 border border-red-700 bg-red-300 py-[0.01rem] px-2">
                  Please enter a valid Rwandan national ID.
                </span>
              )}
            </div>
            {/* <div className="flex flex-col py-3 ">
              <label>Select Province</label>
              <select
                onChange={handleProvinceChange}
                className="border border-green-700 px-4 py-1 rounded mt-1"
              >
                {provinces.map((item, idx) => (
                  <option key={idx}>{item}</option>
                ))}
              </select>
            </div> */}
            {/* <div className="flex flex-col py-3 md:ml-4">
              <label>Select District</label>
              <select className="border border-green-700 px-4 py-1 rounded mt-1">
                {filteredDistricts.map((item, idx) => (
                  <option key={idx}>{item}</option>
                ))}
              </select>
            </div> */}
          </div>
          <div className="">
            <button className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1" onClick={async (e) =>{
              e.preventDefault()
              addMcc();
              if (isValidPhoneNumber && isValidNationalId && isValidEmail) {
                matchModal();
              }
            }}>
              {load ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Modal;
