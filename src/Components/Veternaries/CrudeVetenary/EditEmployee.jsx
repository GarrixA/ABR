/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import provinces from "./province";
import distr from "./district";
import axios from "axios";

const EditEmployee = () => {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);

    const location = useLocation();
    const data = location.state
    // console.log(data)
    const [mccName, setMccName] = useState(data.mccName)
    const [mccEmail, setMccEmail] = useState(data.email)
    const [district, setDistrict] = useState(data.district)
    const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber)
    const {id} = useParams();
    console.log(mccName)

    const formData = new FormData()
    formData.append("mccName", mccName)
    formData.append("email", mccEmail)
    formData.append("district", district)
    formData.append("phoneNumber", phoneNumber)

    const handleUpdate = (e) =>{
      e.preventDefault();
      setLoad(true)
      let token = localStorage.getItem("token")
      axios({
        method: "PATCH",
        url:`https://mpasw.onrender.com/mpas/mcc/updateMcc?id=${id}`,
        data: formData,
        headers:{
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then((response)=>{
        console.log(" res",response)
        toast.success("Employee Updated successfully")
        navigate("/vetdashboard/vetmccs")
      })
      .then((error)=>{
        setLoad(false)
        toast.error("Failed to update employee")
        console.log(error)
      })
    }
  
    
  return (
    <div className=" mt-20 ml-10 text-[1rem] flex items-center justify-center   w-full absolute inset-0 backdrop-filter backdrop-blur-sm top-[-1rem] left-[-2.6rem] h-screen">
      <div className="w-[90%] md:w-[50%] bg-white p-10 rounded-lg shadow z-10">
        <h1 className="text-2xl relative bottom-5 font-bold">Update Mcc</h1>
        <form className=" w-full " onSubmit={handleUpdate}>
          <div className="md:grid grid-cols-2">
            <div className="flex flex-col py-1">
              <label>Mcc Name</label>
              <input
              value={mccName}
              onChange={(e) => setMccName(e.target.value)}
                required
                type="text"
                placeholder="Mcc name"
                className="border border-green-700 px-4 py-1 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-1 md:ml-4">
              <label>Email address</label>
              <input
              value={mccEmail}
              onChange={(e) => setMccEmail(e.target.value)}
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
              onChange={(e)=>setPhoneNumber(e.target.value)}
                required
                type="number"
                placeholder="phone"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
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
            {/* <div className="flex flex-col py-1 md:ml-4">
              <label>Password</label>
              <input
                required
                type="password"
                placeholder="password"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div> */}
            <div className="flex flex-col py-1 md:ml-4">
              <label>District</label>
              <input
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
                required
                type="text"
                placeholder="District"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
            {/* <div className="flex flex-col py-1 md:ml-4">
              <label>Province</label>
              <input
                required
                type="text"
                placeholder="Province"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div> */}
          </div>
          <div className="">
            <button className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1"  type="submit">
              {load ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
