/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import distr from "./district";

const MccModal = ({ matchModal }) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [filteredDistricts, setFilteredDistricts] = useState(distr);

  return (
    <div className="mt-20 ml-10 text-[1rem] flex items-center justify-center   w-full absolute inset-0 backdrop-filter backdrop-blur-sm top-[-1rem] left-[-2.3rem] h-screen">
      <div
        className="mt-20 ml-10 text-[1rem] flex items-center justify-center  w-full absolute  top-[-1rem] left-[-2.3rem] h-screen "
        onClick={matchModal}
      ></div>
      <div className="w-[50%] bg-white p-10 rounded-lg shadow z-10">
        <h1 className="text-2xl relative bottom-4 left-[-1rem]">Register</h1>
        <form className=" w-full ">
          <div className="grid grid-cols-2">
            <div className="flex flex-col py-1">
              <label>Full Name</label>
              <input
                required
                type="text"
                placeholder="Full name"
                className="border border-green-700 px-4 py-1 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-1 ml-4">
              <label>Email address</label>
              <input
                required
                type="text"
                placeholder="email"
                className="border border-green-700 px-4 py-1 rounded mt-2"
              />
            </div>
            <div className="flex flex-col py-1">
              <label>Phone number</label>
              <input
                required
                type="number"
                placeholder="phone"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
            <div className="flex flex-col py-1 ml-4">
              <label>National ID</label>
              <input
                required
                type="number"
                placeholder="national ID"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
            <div className="flex flex-col py-1">
              <label>Password</label>
              <input
                required
                type="password"
                placeholder="password"
                className="border border-green-700 px-4 py-1 rounded mt-1"
              />
            </div>
            
            <div className="flex flex-col py-1 ml-4">
              <label>Select District</label>
              <select className="border border-green-700 px-4 py-1 rounded mt-1">
                {filteredDistricts.map((item, idx) => (
                  <option key={idx}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="">
            <button className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1">
              {load ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MccModal;
