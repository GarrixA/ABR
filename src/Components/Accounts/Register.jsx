import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../images/RAB_Logo2.png";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [load, setLoad] = useState(false);
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nationalIdError, setNationalIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validatePassword = () => {
    let error = "";

    if (password.length < 4) {
      error =
        "Password must be at least 8 characters long at least one digit one special character one upper and lowercase letter";
    } else if (!/\d/.test(password)) {
      error = "Digit is missing";
    } else if (!/[!@#$%^&*]/.test(password)) {
      error = "Special character is missing";
    } else if (!/[a-z]/.test(password)) {
      error = "Lowercase letter is missing";
    } else if (!/[A-Z]/.test(password)) {
      error = "Uppercase letter is missing";
    }

    setPasswordError(error);
  };

  const validateConfirmPassword = () => {
    let error = "";

    if (confirmPassword !== password) {
      error = "Passwords do not match";
    } else {
      error = "";
    }

    setConfirmPasswordError(error);
  };

  const validatePhoneNumber = () => {
    const phoneNumberRegex = /^(078|079|072|073)\d{7}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError(
        "Invalid phone number. It must be Rwandan valid phone number"
      );
    } else {
      setPhoneNumberError("");
    }
  };

  const validateNationalId = () => {
    if (nationalId.length !== 16) {
      setNationalIdError("National ID must be 16 digits long");
    } else {
      setNationalIdError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    setLoad(true);
    e.preventDefault();

    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validatePhoneNumber();
    validateNationalId();

    if (
      emailError ||
      passwordError ||
      confirmPasswordError ||
      phoneNumberError ||
      nationalIdError
    ) {
      const firstError =
        emailError ||
        passwordError ||
        confirmPasswordError ||
        phoneNumberError ||
        nationalIdError;

      toast.error(`${firstError}`);
      setLoad(false);
    } else {
      setLoad(true);
      
      setTimeout(() =>{
        toast.success("Form submitted successfully!");
        setLoad(false)
      }, 3000)
    }
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
          <form className=" w-full " onSubmit={handleSubmit}>
            <div className="grid grid-cols-2">
              <div className="flex flex-col py-3">
                <label>Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  className="border border-green-700 px-4 py-2 rounded mt-2"
                />
              </div>
              <div className="flex flex-col py-3 ml-4">
                <label>Email address</label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onInput={validateEmail}
                  type="text"
                  placeholder="email"
                  className="border border-green-700 px-4 py-2 rounded mt-2"
                />
                {emailError && (
                  <span className="validation-error">{emailError}</span>
                )}
              </div>
              <div className="flex flex-col py-3">
                <label>Password</label>
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onInput={validatePassword}
                  type="password"
                  placeholder="password"
                  className="border border-green-700 px-4 py-2 rounded mt-2"
                />
                {passwordError && (
                  <span className="validation-error">{passwordError}</span>
                )}
              </div>
              <div className="flex flex-col py-3 ml-4">
                <label>Confirm Password</label>
                <input
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onInput={validateConfirmPassword}
                  type="password"
                  placeholder="confirm password"
                  className="border border-green-700 px-4 py-2 rounded mt-2"
                />
                {confirmPasswordError && (
                  <span className="validation-error">
                    {confirmPasswordError}
                  </span>
                )}
              </div>
              <div className="flex flex-col py-3">
                <label>Phone number</label>
                <input
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onInput={validatePhoneNumber}
                  type="number"
                  placeholder="phone"
                  className="border border-green-700 px-4 py-2 rounded mt-2"
                />
                {phoneNumberError && (
                  <span className="validation-error">{phoneNumberError}</span>
                )}
              </div>
              <div className="flex flex-col py-3 ml-4">
                <label>National ID</label>
                <input
                  required
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  onInput={validateNationalId}
                  type="number"
                  placeholder="national ID"
                  className="border border-green-700 px-4 py-2 rounded mt-2"
                />
                {nationalIdError && (
                  <span className="validation-error">{nationalIdError}</span>
                )}
              </div>
            </div>
            <div className="">
              <button className="bg-[#1a8cff] rounded uppercase text-white font-semibold w-full py-1">
                {load ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
