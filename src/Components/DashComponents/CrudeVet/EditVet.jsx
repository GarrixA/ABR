/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditVet = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const location = useLocation();
  const data = location.state
  console.log("data:", data);

  const [email, setEmail] = useState(data.email);
  const [fullName, setFullName] = useState(data.fullName);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
  const [nationalId, setNationalId] = useState(data.nationalId);
  const [password, setPassword] = useState(data.password);
  const {id} = useParams();

  const formData = new FormData()
  formData.append("email", email)
  formData.append("fullName", fullName)
  formData.append("phoneNumber", phoneNumber)
  formData.append("nationalId", nationalId)
  formData.append("password", password)

  const EditVeterinary = (e) => {
    e.preventDefault();
    setLoad(true)
    axios({
      method: 'PATCH',
      url: `https://mpasw.onrender.com/mpas/veterian/vet/updateVet?id=${id}`,
      data: formData,
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((respons) => {
        console.log("res", respons)
        setLoad(false)
          toast.success("Update succss")
        navigate("/dashboard/veternaries")
      })
      .catch((error) => {
        setLoad(false)
        console.log(error)
        toast.error("Update failed")
      })
  }

  return (
    <div className=" mt-20 ml-10 text-[1rem] flex items-center justify-center   w-full absolute inset-0 backdrop-filter backdrop-blur-sm top-[-1rem] left-[-2.6rem] h-screen">
      <div className="w-[90%] md:w-[50%] bg-white p-10 rounded-lg shadow z-10">
        <h1 className="text-2xl relative bottom-5 font-bold">Update Veternary</h1>
        <form className=" w-full " onSubmit={EditVeterinary}>
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
                onChange={(e) => setEmail(e.target.value)}
                required
                type="text"
                placeholder="email"
                className="border border-green-700 px-4 py-1 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-1">
              <label>Phone number</label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                type="number"
                placeholder="phone"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
            <div className="flex flex-col py-1 md:ml-4">
              <label>National ID</label>
              <input
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                required
                type="number"
                placeholder="national ID"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
            <div className="flex flex-col py-1">
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder="password"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
            {/* <div className="flex flex-col py-1 md:ml-4">
              <label>Select Province</label>
              
            </div>
            <div className="flex flex-col py-3">
              <label>Select District</label>
                          </div> */}
          </div>
          <div className="">
            <button className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1" onClick={EditVeterinary}>
              {load ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default EditVet;
