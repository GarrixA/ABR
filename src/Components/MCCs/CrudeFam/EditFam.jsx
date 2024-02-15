/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import provinces from "./province";
import distr from "./district";
import axios from "axios";

const EditFam = () => {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const location = useLocation()
    const data = location.state
    // console.log(data)

    const [farmerName, setFullName] = useState(data.farmerName);
    const [email, setEmail] = useState(data.email);
    const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
    const [nationalId, setNationalId] = useState(data.nationalId);
    const [district, setDistrict] = useState(data.district);
    const {id} = useParams();
    const formData = new FormData()
    formData.append("farmerName", farmerName)
    formData.append("email", email)
    formData.append("nationalId", nationalId)
    formData.append("phoneNumber", phoneNumber)
    // formData.append("province", province)
    formData.append("district", district)
    
    let token = localStorage.getItem("token")

    const updateFarmer = (e) =>{
      e.preventDefault();
      setLoad(true)
      axios({
        method: "PATCH",
        url: `https://mpasw.onrender.com/mpas/farmerNews/farmer/updateFarmers?id=${id}`,
        data: formData,
        headers:{
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then((response)=>{
        console.log(response)
        
        setTimeout(()=>{
          setLoad(false)
          toast.success("Farmer updated successfully")
          navigate("/mccdashboard/farmers")
        }, 2000)
      })
      .catch((error)=>{
        console.log(error)
        toast.error("Error updating farmer")
        setLoad(false)
      })
    }
    
  return (
    <div className=" mt-20 ml-10 text-[1rem] flex items-center justify-center   w-full absolute inset-0 backdrop-filter backdrop-blur-sm top-[-1rem] left-[-2.6rem] h-screen">
      <div className="w-[50%] bg-white p-10 rounded-lg shadow z-10">
        <h1 className="text-2xl relative bottom-5 font-bold">Update Farmer</h1>
        <form className=" w-full " onSubmit={updateFarmer}>
          <div className="grid grid-cols-2">
            <div className="flex flex-col py-1">
              <label>Full Name</label>
              <input
              value={farmerName}
              onChange={(e) => setFullName(e.target.value)}
                required
                type="text"
                placeholder="Full name"
                className="border border-green-700 px-4 py-1 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-1 ml-4">
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
            <div className="flex flex-col py-1 ml-4">
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
            <div className="flex flex-col py-1 ">
            <label>District</label>
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
            <button className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1" onClick={updateFarmer}>
              {load ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFam;
